import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import styles from './styles';
import AppBar from '../../../Components/AppBar';
import {BackIcon, EyeHide, EyeShow} from '../../../Assets/Svgs';
import InputLabel from '../../../Components/InputLabel';
import InputText from '../../../Components/InputText';
import CustomButton from '../../../Components/CustomButton';
import {PRIMARY, WHITE} from '../../../Theme/Colors';
import LoadingModal from '../../../Components/LoadingModal';
import {resetPasswordApi} from '../../../Services/apis/authAPIs';

const CreatePassword = props => {
  // const {data} = props?.route?.params;
  const navigation = useNavigation<any>();
  const [password, setPassword] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [visible, setVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isConfirmPassHidden, setIsConfirmPasswordHidden] = useState(true);

  const handlePassword = txt => {
    setPassword(txt);
  };
  const handleConfirmPassword = txt => {
    setConfirmPassword(txt);
  };
  const handlePasswordVisible = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  const handleConfirmPasswordVisible = () => {
    setIsConfirmPasswordHidden(!isConfirmPassHidden);
  };

  const handleContinueButton = async () => {
    navigation.navigate('CreatePassword');
    return; // have to reset it
    if (password === '' || confirmPassword === '') {
      Alert.alert('Please fill both password fields');
      return;
    } else if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
      return;
    } else {
      setVisible(true);
      const payload = {
        password: password,
        newPassword: confirmPassword,
      };
      try {
        const results = await resetPasswordApi(payload, data?.userId);
        setVisible(false);
        if (results?.status == 200) {
          Alert.alert('OTP success', `${results?.data?.message}`);
          navigation.navigate('CreatePassword', {data: data});
          // }
        }
      } catch (error) {
        setVisible(false);
        Alert.alert('OTP error', `${error?.response?.data?.message}`);
        console.log('Error:', error?.response?.data);
      }
      navigation.navigate('PasswordRecover');
    }
  };
  return (
    <View style={styles.body}>
      <AppBar
        text="New Password"
        leftIcon={<BackIcon></BackIcon>}
        OnLeftPress={() => navigation.goBack()}></AppBar>
      <View style={styles.content}>
        <Text style={styles.enterEmail}>
          Create new password that is easy to remember for you.
        </Text>
        <View style={{paddingHorizontal: 10}}>
          <InputLabel label="Password" />
          <InputText
            placeholder="Password"
            value={password}
            onChangeText={handlePassword}
            secureTextEntry={isPasswordHidden}
            onRightPress={handlePasswordVisible}
            addRight={
              isPasswordHidden ? <EyeHide></EyeHide> : <EyeShow></EyeShow>
            }
          />
          <InputLabel label="Confirm Password" />
          <InputText
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={handleConfirmPassword}
            secureTextEntry={isConfirmPassHidden}
            onRightPress={handleConfirmPasswordVisible}
            addRight={
              isConfirmPassHidden ? <EyeHide></EyeHide> : <EyeShow></EyeShow>
            }
          />
        </View>
        <CustomButton
          text="Continue"
          onPress={handleContinueButton}
          TextStyle={{color: WHITE}}
          extraStyle={{
            marginTop: 200,
            backgroundColor: PRIMARY,
          }}
        />
      </View>
      <LoadingModal message={'Please wait...'} visible={visible} />
    </View>
  );
};

export default CreatePassword;

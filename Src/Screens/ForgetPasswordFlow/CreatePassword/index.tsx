import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import AppBar from '../../../Components/AppBar';
import {BackIcon, EyeHide, EyeShow} from '../../../Assets/Svgs';
import InputLabel from '../../../Components/InputLabel';
import InputText from '../../../Components/InputText';
import CustomButton from '../../../Components/CustomButton';
import {PRIMARY, WHITE} from '../../../Theme/Colors';

const CreatePassword = () => {
  const navigation = useNavigation<any>();
  const [password, setPassword] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
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

  const handleContinueButton = () => {
    navigation.navigate('PasswordRecover');
  };
  return (
    <View style={styles.body}>
      <AppBar text="New Password" leftIcon={<BackIcon></BackIcon>} OnLeftPress={()=> navigation.goBack()}></AppBar>
      <View style={styles.content}>
        <Text style={styles.enterEmail}>
          Create new password that is easy to remember for you.
        </Text>
        <View style={{ paddingHorizontal: 10,}}>
        <InputLabel label="Password" />
        <InputText
          placeholder="Password"
          value={password}
          onChange={handlePassword}
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
          onChange={handleConfirmPassword}
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
    </View>
  );
};

export default CreatePassword;

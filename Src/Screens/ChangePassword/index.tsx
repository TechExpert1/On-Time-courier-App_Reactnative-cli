import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {BackIcon, EyeHide, EyeShow} from '../../Assets/Svgs';
import InputLabel from '../../Components/InputLabel';
import InputText from '../../Components/InputText';
import CustomButton from '../../Components/CustomButton';
import {PRIMARY, WHITE} from '../../Theme/Colors';
import Toast from 'react-native-toast-message';
import LoadingModal from '../../Components/LoadingModal';
import {ChangePasswordAPI} from '../../Services/apis/authAPIs';

const ChangePasswordScreen = props => {
  const {isRole} = props.route.params;
  const navigation = useNavigation<any>();
  const [oldPassword, setOldPassword] = useState('');
  const [isOldPasswordHidden, setIsOldPasswordHidden] = useState(true);
  const [password, setPassword] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isConfirmPassHidden, setIsConfirmPasswordHidden] = useState(true);
  const [visible, setVisible] = useState(false);

  const handleOldPassword = txt => {
    setOldPassword(txt);
  };
  const handleOldPasswordVisible = () => {
    setIsOldPasswordHidden(!isOldPasswordHidden);
  };
  const handlePassword = txt => {
    setPassword(txt);
  };
  const handlePasswordVisible = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };
  const handleConfirmPassword = txt => {
    setConfirmPassword(txt);
  };
  const handleConfirmPasswordVisible = () => {
    setIsConfirmPasswordHidden(!isConfirmPassHidden);
  };
  const handleContinueButton = () => {
    if (oldPassword === '') {
      Toast.show({
        type: 'error',
        text1: 'Change password failed',
        text2: 'Please enter old password.',
        visibilityTime: 3000,
      });
      return;
    } else if (password === '') {
      Toast.show({
        type: 'error',
        text1: 'Change password failed',
        text2: 'Please enter new password.',
        visibilityTime: 3000,
      });
      return;
    } else if (confirmPassword !== password) {
      Toast.show({
        type: 'error',
        text1: 'Change password failed',
        text2: 'Passwords do not match.',
        visibilityTime: 3000,
      });
      return;
    } else {
      handleChangePassword();
    }
  };
  const handleChangePassword = async () => {
    const body = {
      oldPassword: oldPassword,
      newPassword: password,
      confirmPassword: confirmPassword,
    };
    setVisible(true);
    try {
      const result = await ChangePasswordAPI(body);
      setVisible(false);
      console.log('🚀 ~ handleChangePassword ~ result:', result);
      if (result) {
        navigation.navigate('PasswordChangedSuccess', {isRole: isRole});
      }
    } catch (error) {
      setVisible(false);
      if (error?.response?.data?.JWTErr) {
        Toast.show({
          type: 'error',
          text1: 'Change password failed',
          text2: `${error?.response?.data?.JWTErr?.message}`,
          visibilityTime: 3000,
        });
        console.log(
          '🚀 ~ handleChangePassword ~ error:',
          error?.response?.data?.JWTErr?.message,
        );
      } else {
        Toast.show({
          type: 'error',
          text1: 'Change password failed',
          text2: `${error?.response?.data?.message}`,
          visibilityTime: 3000,
        });
      }
    }
  };
  return (
    <View style={styles.body}>
      <View style={styles.appBarStyle}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackIcon></BackIcon>
          </TouchableOpacity>
          <Text style={styles.TitleName}>Change Password</Text>
          <View></View>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.contentText}>Enter your previous password.</Text>
        <InputLabel label="Password" />
        <InputText
          placeholder="Password"
          value={oldPassword}
          onChangeText={handleOldPassword}
          onRightPress={handleOldPasswordVisible}
          secureTextEntry={isOldPasswordHidden}
          addRight={
            isOldPasswordHidden ? <EyeHide></EyeHide> : <EyeShow></EyeShow>
          }
        />

        <Text style={styles.passwordToContinue}>
          Create new password that is easy to remember for you.
        </Text>

        <InputLabel label="Password" />
        <InputText
          placeholder="Password"
          value={password}
          onChangeText={handlePassword}
          onRightPress={handlePasswordVisible}
          secureTextEntry={isPasswordHidden}
          addRight={
            isPasswordHidden ? <EyeHide></EyeHide> : <EyeShow></EyeShow>
          }
        />

        <InputLabel label="Confirm Password" />
        <InputText
          placeholder="Confirm Password"
          onRightPress={handleConfirmPasswordVisible}
          value={confirmPassword}
          onChangeText={handleConfirmPassword}
          secureTextEntry={isConfirmPassHidden}
          addRight={
            isConfirmPassHidden ? <EyeHide></EyeHide> : <EyeShow></EyeShow>
          }
        />

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
      <LoadingModal visible={visible} message={'Please wait...'} />
    </View>
  );
};

export default ChangePasswordScreen;

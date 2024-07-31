import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {BackIcon, EyeHide, EyeShow} from '../../Assets/Svgs';
import InputLabel from '../../Components/InputLabel';
import InputText from '../../Components/InputText';
import CustomButton from '../../Components/CustomButton';
import {PRIMARY, WHITE} from '../../Theme/Colors';

const ChangePasswordScreen = props => {
  const {isRole} = props.route.params;
  const navigation = useNavigation<any>();
  const [oldPassword, setOldPassword] = useState('');
  const [isOldPasswordHidden, setIsOldPasswordHidden] = useState(true);
  const [password, setPassword] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isConfirmPassHidden, setIsConfirmPasswordHidden] = useState(true);

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
    navigation.navigate('PasswordChangedSuccess',{isRole:isRole});
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
    </View>
  );
};

export default ChangePasswordScreen;

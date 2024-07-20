import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import styles from './styles';
import AppBar from '../../../Components/AppBar';
import {BackIcon} from '../../../Assets/Svgs';
import InputLabel from '../../../Components/InputLabel';
import InputText from '../../../Components/InputText';
import CustomButton from '../../../Components/CustomButton';
import {PRIMARY, WHITE} from '../../../Theme/Colors';
import {useNavigation} from '@react-navigation/native';
import LoadingModal from '../../../Components/LoadingModal';
import {forgetPasswordApi} from '../../../Services/apis/authAPIs';

const ForgetPassword = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('');
  const [visible, setVisible] = useState(false);
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleEmailText = (text: string) => {
    setEmail(text);
  };
  const handleContinueButton = async () => {
    if (email === '') {
      Alert.alert('Register error', 'Please enter your email');
      return;
    } else if (!isValidEmail(email)) {
      Alert.alert('Register error', 'Please enter a valid email');
      return;
    } else {
      try {
        setVisible(true);
        const body = {email: email};
        // API call to send OTP for forgot password
        const result = await forgetPasswordApi(body);
        console.log('🚀 ~ handleContinueButton ~ result:', result?.data);
        Alert.alert('Forgot Password', `${result?.data?.message}`);
        setVisible(false);
        navigation.navigate('OTPVerification', {data: result?.data});
      } catch (error) {
        setVisible(false);
        console.log(
          '🚀 ~ handleContinueButton ~ error:',
          error?.response?.data,
        );
        Alert.alert(
          'Forgot Password error',
          `${error?.response?.data?.message}`,
        );
      }
    }
  };
  return (
    <View style={styles.body}>
      <AppBar
        text="Forgot Password"
        leftIcon={<BackIcon></BackIcon>}
        OnLeftPress={() => navigation.goBack()}></AppBar>
      <View style={styles.content}>
        <Text style={styles.enterEmail}>
          Enter email that is associated with this account.
        </Text>
        <InputLabel label="E-mail" extraStyle={{marginTop: 35}} />
        <InputText placeholder="E-mail" onChangeText={handleEmailText} />
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

export default ForgetPassword;

import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import AppBar from '../../../Components/AppBar';
import {BackIcon} from '../../../Assets/Svgs';
import styles from './styles';
import CustomButton from '../../../Components/CustomButton';
import {PRIMARY, WHITE} from '../../../Theme/Colors';
import EnterOTP from '../../../Components/OTP';
import {useNavigation} from '@react-navigation/native';
import {verifyForgotPasswordOTPAPI} from '../../../Services/apis/authAPIs';
import LoadingModal from '../../../Components/LoadingModal';

const OTPVerification = props => {
  const navigation = useNavigation<any>();
  const {data} = props?.route?.params;
  const [otp, setOTP] = useState<string>('');
  console.log('🚀 ~ OTPVerification ~ otp:', otp, otp?.length);
  const [visible, setVisible] = useState<boolean>(false);

  const handleContinueButton = async () => {
    if (otp === '') {
      Alert.alert('OTP error', 'Please enter OTP');
      return;
    } else if (otp?.length !== 4) {
      Alert.alert('OTP error', 'Please enter 4 digits of OTP');
      return;
    } else {
      setVisible(true);
      const payload = {
        otp: otp,
      };
      try {
        const results = await verifyForgotPasswordOTPAPI(payload, data?.userId);
        setVisible(false);
        if (results?.status == 200) {
          Alert.alert('OTP success', `${results?.data?.message}`);
          navigation.navigate('CreatePassword', {
            data: data,
            from: 'ForgotPassword',
          });
          // }
        }
      } catch (error) {
        setVisible(false);
        Alert.alert('OTP error', `${error?.response?.data?.message}`);
        console.log('Error:', error?.response?.data);
      }
    }
  };
  return (
    <View style={styles.body}>
      <AppBar text="Verification Code"></AppBar>
      <View style={styles.content}>
        <Text style={styles.enterEmail}>
          Enter verification code sent on your entered email address.
        </Text>

        <EnterOTP otp={otp} setOTP={setOTP}></EnterOTP>
        <Text style={styles.resendButton}>
          Resend in <Text style={styles.resendButtonSpan}>0:29s</Text>
        </Text>

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

export default OTPVerification;

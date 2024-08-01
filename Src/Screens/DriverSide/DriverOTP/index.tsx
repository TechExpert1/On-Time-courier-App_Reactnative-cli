import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import styles from './styles';
import AppBar from '../../../Components/AppBar';
import EnterOTP from '../../../Components/OTP';
import CustomButton from '../../../Components/CustomButton';
import {PRIMARY, WHITE} from '../../../Theme/Colors';
import {verifyForgotPasswordOTPAPI} from '../../../Services/apis/authAPIs';
import LoadingModal from '../../../Components/LoadingModal';

const DriverOTP = props => {
  const {data} = props?.route?.params;
  console.log('🚀 ~ DriverOTP ~ data:', data);
  const navigation = useNavigation<any>();
  const [otp, setOTP] = useState<string>('');
  const [seconds, setSeconds] = useState(30);
  const [isActive, setIsActive] = useState(false);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (seconds === 0) {
          clearInterval(interval);
        } else {
          setSeconds(30);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);
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
        const results = await verifyForgotPasswordOTPAPI(
          payload,
          data?.userWithoutPassword?._id,
        );
        setVisible(false);
        if (results?.status == 200) {
          Alert.alert('OTP success', `${results?.data?.message}`);
          // navigation.navigate('CreatePassword', {data: data, from: 'DriverOTP'});
          navigation.navigate('DriverProfilePicture');
        }
      } catch (error) {
        setVisible(false);
        Alert.alert('OTP error', `${error?.response?.data?.message}`);
        console.log('Error:', error?.response?.data);
      }
    }
  };
  // const handleContinueButton = () => {
  //   navigation.navigate('DriverProfilePicture');
  // };
  return (
    <View style={styles.body}>
      <AppBar text="Verification Code"></AppBar>
      <View style={styles.content}>
        <Text style={styles.enterEmail}>
          Enter verification code sent on your entered email address.
        </Text>

        <EnterOTP otp={otp} setOTP={setOTP}></EnterOTP>
        <Text style={styles.resendButton}>
          Resend in <Text style={styles.resendButtonSpan}>{seconds}</Text>
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
      <LoadingModal visible={visible} message={'Please wait...'} />
    </View>
  );
};

export default DriverOTP;

import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import styles from './styles';
import AppBar from '../../../Components/AppBar';
import {BackIcon} from '../../../Assets/Svgs';
import EnterOTP from '../../../Components/OTP';
import CustomButton from '../../../Components/CustomButton';
import {PRIMARY, WHITE} from '../../../Theme/Colors';
import LoadingModal from '../../../Components/LoadingModal';
import {verifyOTPAPI} from '../../../Services/apis/authAPIs';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const CustomerOTP = props => {
  const navigation = useNavigation<any>();
  const [otp, setOTP] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);
  const {data} = props?.route?.params;
  console.log('🚀 ~ CustomerOTP ~ data:', data);
  const [seconds, setSeconds] = useState(30);
  const handleContinueButton = async () => {
    if (otp === '') {
      Alert.alert('OTP error', 'Please enter OTP');
      return;
    } else {
      setVisible(true);
      const payload = {
        userId: data?.userWithoutPassword?._id,
        otp: otp,
      };
      try {
        const results = await verifyOTPAPI(payload);
        setVisible(false);
        if (results?.status == 200) {
          Alert.alert('OTP success', `${results?.data?.message}`);
          navigation.navigate('UploadPicture');
        }
      } catch (error) {
        setVisible(false);
        Alert.alert('OTP error', `${error?.response?.data?.message}`);
        console.log('Error:', error?.response?.data);
      }
      navigation.navigate('UploadPicture');
    }
  };

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

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flexGrow: 1}} // Ensures the content expands to the full height
      style={styles.body}
      enableOnAndroid={true}
      extraHeight={100} // Adjust to push content when keyboard appears
    >
      <AppBar text="Verification Code"></AppBar>
      <View style={styles.content}>
        <Text style={styles.enterEmail}>
          Enter verification code sent on your entered email address.
        </Text>

        <EnterOTP otp={otp} setOTP={setOTP}></EnterOTP>
        <Text style={styles.resendButton}>
          Resend in{' '}
          <Text style={styles.resendButtonSpan}>{'0:' + seconds + 's'}</Text>
        </Text>
      </View>
      <View style={styles.footer}>
        <CustomButton
          text="Continue"
          onPress={handleContinueButton}
          TextStyle={{color: WHITE}}
          extraStyle={{
            // marginTop: 200,
            backgroundColor: PRIMARY,
          }}
        />
      </View>
      <LoadingModal message={'Please wait...'} visible={visible} />
    </KeyboardAwareScrollView>
  );
};

export default CustomerOTP;

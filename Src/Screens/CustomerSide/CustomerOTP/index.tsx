import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import styles from './styles';
import AppBar from '../../../Components/AppBar';
import {BackIcon} from '../../../Assets/Svgs';
import EnterOTP from '../../../Components/OTP';
import CustomButton from '../../../Components/CustomButton';
import {PRIMARY, WHITE} from '../../../Theme/Colors';
import LoadingModal from '../../../Components/LoadingModal';
import {verifyOTPAPI} from '../../../Services/apis/authAPIs';

const CustomerOTP = props => {
  const navigation = useNavigation<any>();
  const [otp, setOTP] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);
  const {data} = props?.route?.params;
  console.log('🚀 ~ CustomerOTP ~ data:', data);
  const handleContinueButton = async () => {
    if (otp === '') {
      Alert.alert('OTP error', 'Please enter OTP');
      return;
    } else if (data?.Otp != otp) {
      Alert.alert('OTP error', 'Please enter a valid OTP');
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

export default CustomerOTP;

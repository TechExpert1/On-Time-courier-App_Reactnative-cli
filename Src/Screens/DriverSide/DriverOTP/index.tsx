import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Text, View } from 'react-native';
import styles from './styles';
import AppBar from '../../../Components/AppBar';
import EnterOTP from '../../../Components/OTP';
import CustomButton from '../../../Components/CustomButton';
import { PRIMARY, WHITE } from '../../../Theme/Colors';

const DriverOTP = () => {
    const navigation = useNavigation<any>();
    const [otp, setOTP] = useState<string>('');
  
    const handleContinueButton = () => {
      navigation.navigate('DriverProfilePicture');
    };
    return (
      <View style={styles.body}>
        <AppBar
          text="Verification Code"
          ></AppBar>
        <View style={styles.content}>
          <Text style={styles.enterEmail}>
            Enter verification code sent on your entered email address.
          </Text>
  
          <EnterOTP otp={otp} setOTP={setOTP}></EnterOTP>
          <Text style={styles.resendButton}>Resend in <Text style={styles.resendButtonSpan}>0:29s</Text></Text>
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
}

export default DriverOTP

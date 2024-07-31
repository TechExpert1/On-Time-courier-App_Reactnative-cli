import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native';
import styles from './styles';
import AppBar from '../../../Components/AppBar';
import EnterOTP from '../../../Components/OTP';
import CustomButton from '../../../Components/CustomButton';
import { PRIMARY, WHITE } from '../../../Theme/Colors';

const DriverOTP = () => {
    const navigation = useNavigation<any>();
    const [otp, setOTP] = useState<string>('');
    const [seconds, setSeconds] = useState(30);
    const [isActive, setIsActive] = useState(false);
  
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
          <Text style={styles.resendButton}>Resend in <Text style={styles.resendButtonSpan}>{seconds}</Text></Text>
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

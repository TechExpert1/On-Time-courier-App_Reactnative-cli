import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import AppBar from '../../../Components/AppBar';
import {BackIcon} from '../../../Assets/Svgs';
import InputLabel from '../../../Components/InputLabel';
import InputText from '../../../Components/InputText';
import CustomButton from '../../../Components/CustomButton';
import {PRIMARY, WHITE} from '../../../Theme/Colors';
import {useNavigation} from '@react-navigation/native';

const ForgetPassword = () => {
  const navigation = useNavigation<any>();
  const handleContinueButton = () => {
    navigation.navigate('OTPVerification');
  };
  return (
    <View style={styles.body}>
      <AppBar text="Forgot Password" leftIcon={<BackIcon></BackIcon>} OnLeftPress={()=> navigation.goBack()}></AppBar>
      <View style={styles.content}>
        <Text style={styles.enterEmail}>
          Enter email that is associated with this account.
        </Text>
        <InputLabel label="E-mail" extraStyle={{marginTop: 35}} />
        <InputText placeholder="E-mail" />
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

export default ForgetPassword;

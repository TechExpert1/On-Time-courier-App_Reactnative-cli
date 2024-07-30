import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import InputLabel from '../../../Components/InputLabel';
import InputText from '../../../Components/InputText';
import { EyeHide, EyeShow } from '../../../Assets/Svgs';
import CustomButton from '../../../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { PRIMARY, WHITE } from '../../../Theme/Colors';

const DriverRegister = () => {
    const navigation = useNavigation<any>();

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [addrss, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isConfirmPassHidden, setIsConfirmPasswordHidden] = useState(true);
    const handleContinueButton = () => {
     navigation.navigate('DriverOTP');
    };
    const handleAlreadyHavAccount = () => {
     navigation.navigate('DriverLogin');
    };
    const handleFullName = txt => {
      setFullName(txt);
    };
    const handleEmail = txt => {
      setEmail(txt);
    };
    const handlePhonNumber = txt => {
      setPhoneNumber(txt);
    };
    const handleAddrss = txt => {
      setAddress(txt);
    };
    const handlePassword = txt => {
      setPassword(txt);
    };
    const handleConfirmPassword = txt => {
      setConfirmPassword(txt);
    };
    const handlePasswordVisible = () => {
      setIsPasswordHidden(!isPasswordHidden);
    };
  
    const handleConfirmPasswordVisible = () => {
      setIsConfirmPasswordHidden(!isConfirmPassHidden);
    };
    
  return (
    <View style={styles.body}>
    <Image
      style={styles.headerLogo}
      source={require('../../../Assets/Images/HeaderLogo.png')}></Image>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Text style={styles.choseYourRoleText}>Register</Text>
        <Text style={styles.welcomeText}>
          Welcome to{' '}
          <Text style={styles.welcomeSpanText}>On Time Couriers</Text>
        </Text>
        <InputLabel label="Full Name"  />
        <InputText placeholder="Full Name" onChangeText={handleFullName} value={fullName}/>
        <InputLabel label="E-mail" />
        <InputText placeholder="E-mail" onChangeText={handleEmail} value={email}/>

        <InputLabel label="Phone #" />
        <InputText placeholder="Phone #" type={'numeric'} onChangeText={handlePhonNumber} value={phoneNumber}/>
        <InputLabel label="Address" />
        <InputText placeholder="Address" onChangeText={handleAddrss} value={addrss}/>
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
          text="Register"
          onPress={handleContinueButton}
          TextStyle={{color: WHITE}}
          extraStyle={{
            marginTop: 34,
            backgroundColor: PRIMARY,
          }}
        />
        <TouchableOpacity onPress={handleAlreadyHavAccount}>
          <Text style={styles.alreadyHaveAnAccount}>
            Already have an account?{' '}
            <Text style={styles.alreadyHaveAnAccountSpan}>Log in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </View>
);
}

export default DriverRegister

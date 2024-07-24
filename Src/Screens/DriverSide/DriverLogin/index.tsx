import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import InputLabel from '../../../Components/InputLabel';
import InputText from '../../../Components/InputText';
import { EyeHide } from '../../../Assets/Svgs';
import CheckBox from 'react-native-check-box';
import { PRIMARY, WHITE } from '../../../Theme/Colors';
import CustomButton from '../../../Components/CustomButton';

const DriverLogin = () => {
    const navigation = useNavigation<any>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [isRememberMe, setIsRememberMe] = useState(true);
  
    const handleEmail = txt => {
      setEmail(txt);
    };
    const handlePassword = txt => {
      setPassword(txt);
    };
    const handlePasswordVisible = () => {
      setIsPasswordHidden(!isPasswordHidden);
    };
    const handleContinueButton = () => {
    //   navigation.navigate('BottomTab');
    };
    return (
        <View style={styles.body}>
          <Image
            style={styles.headerLogo}
            source={require('../../../Assets/Images/HeaderLogo.png')}></Image>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
              <Text style={styles.choseYourRoleText}>Log In</Text>
              <Text style={styles.welcomeText}>
                Welcome to{' '}
                <Text style={styles.welcomeSpanText}>On Time Couriers</Text>
              </Text>
              <InputLabel label="E-mail" />
              <InputText
                placeholder="E-mail"
                value={email}
                onChange={handleEmail}
              />
    
              <InputLabel label="Password" />
              <InputText
                placeholder="Password"
                value={password}
                secureTextEntry={isPasswordHidden}
                onRightPress={handlePasswordVisible}
                onChange={handlePassword}
                addRight={
                  isPasswordHidden ? <EyeHide></EyeHide> : <EyeShow></EyeShow>
                }
              />
              <View style={styles.rowStyle}>
                <CheckBox
                  isChecked={isRememberMe}
                  checkedCheckBoxColor={PRIMARY}
                  onClick={() => setIsRememberMe(!isRememberMe)}
                />
    
                <Text style={styles.rememberMe}>Remember me</Text>
              </View>
              <CustomButton
                text="Log in"
                onPress={handleContinueButton}
                TextStyle={{color: WHITE}}
                extraStyle={{
                  marginTop: 50,
                  marginBottom:50,
                  backgroundColor: PRIMARY,
                }}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgetPassword')}><Text style={styles.forgetPassword}>Forgot Password?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('DriverRegister')}>
                <Text style={styles.alreadyHaveAnAccount}>
                  Don’t have an account?{' '}
                  <Text style={styles.alreadyHaveAnAccountSpan}>Register</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      );
}

export default DriverLogin

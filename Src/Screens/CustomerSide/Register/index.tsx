import React, {useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import InputLabel from '../../../Components/InputLabel';
import InputText from '../../../Components/InputText';
import CustomButton from '../../../Components/CustomButton';
import {BG_COLOR, PRIMARY, WHITE} from '../../../Theme/Colors';
import {useNavigation} from '@react-navigation/native';
import {EyeHide, EyeShow} from '../../../Assets/Svgs';
import {signUpApi} from '../../../Services/apis/authAPIs';
import LoadingModal from '../../../Components/LoadingModal';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const CustomerRegister = props => {
  const navigation = useNavigation<any>();
  const {selectedRole} = props?.route?.params;
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [addrss, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isConfirmPassHidden, setIsConfirmPasswordHidden] = useState(true);
  const [visible, setVisible] = useState(false);
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleValidation = () => {
    if (fullName === '') {
      Alert.alert('Register error', 'Please enter your full name');
      return;
    } else if (email === '') {
      Alert.alert('Register error', 'Please enter your email');
      return;
    } else if (!isValidEmail(email)) {
      Alert.alert('Register error', 'Please enter a valid email');
      return;
    } else if (phoneNumber === '') {
      Alert.alert('Register error', 'Please enter your phone number');
      return;
    } else if (addrss === '') {
      Alert.alert('Register error', 'Please enter your address');
      return;
    } else if (password === '') {
      Alert.alert('Register error', 'Please enter your password');
      return;
    } else if (confirmPassword === '') {
      Alert.alert('Register error', 'Please confirm your password');
      return;
    } else if (password !== confirmPassword) {
      Alert.alert('Register error', 'Passwords do not match');
      return;
    } else {
      // const body = {
      //   userName: fullName,
      //   email: email,
      //   phoneNumber: phoneNumber,
      //   password: password,
      //   confirmPass: confirmPassword,
      //   location: {
      //     type: 'Point',
      //     coordinates: [40.7128, -74.006],
      //   },
      //   userType: selectedRole,
      // };
      // handleSignUp(body);
      navigation.navigate('CustomerOTP');
    }
  };

  const handleSignUp = async payload => {
    setVisible(true);
    // Call API to register user
    await signUpApi(payload)
      .then(result => {
        setVisible(false);
        console.log('🚀 ~ handleSignUp ~ result:', result?.data);
        // Navigation to OTP screen
        navigation.navigate('CustomerOTP', {data: result?.data});
      })
      .catch(error => {
        setVisible(false);
        Alert.alert('Register error', `${error?.response?.data?.message}`);
        console.log('Error:', error?.response?.data);
      });
  };
  const handleAlreadyHavAccount = () => {
    navigation.navigate('CustomerLogin');
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
      <KeyboardAwareScrollView
        style={{flexGrow: 1, backgroundColor: BG_COLOR}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.choseYourRoleText}>Register</Text>
          <Text style={styles.welcomeText}>
            Welcome to{' '}
            <Text style={styles.welcomeSpanText}>On Time Couriers</Text>
          </Text>
          <InputLabel label="Full Name" />
          <InputText
            placeholder="Full Name"
            onChangeText={handleFullName}
            value={fullName}
          />
          <InputLabel label="E-mail" />
          <InputText
            placeholder="E-mail"
            onChangeText={handleEmail}
            value={email}
          />

          <InputLabel label="Phone #" />
          <InputText
            placeholder="Phone #"
            type={'numeric'}
            onChangeText={handlePhonNumber}
            value={phoneNumber}
          />
          <InputLabel label="Address" />
          <InputText
            placeholder="Address"
            onChangeText={handleAddrss}
            value={addrss}
          />
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
            onPress={handleValidation}
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
      </KeyboardAwareScrollView>
      <LoadingModal visible={visible} message={'Please wait...'} />
    </View>
  );
};

export default CustomerRegister;

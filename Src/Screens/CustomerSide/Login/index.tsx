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
import {PRIMARY, WHITE} from '../../../Theme/Colors';
import {useNavigation} from '@react-navigation/native';
import {EyeHide, EyeShow} from '../../../Assets/Svgs';
import CheckBox from 'react-native-check-box';
import LoadingModal from '../../../Components/LoadingModal';
import {logInUserApi} from '../../../Services/apis/authAPIs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../../Store/UserSlice';

const CustomerLogin = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isRememberMe, setIsRememberMe] = useState(true);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleValidation = () => {
    if (email === '') {
      Alert.alert('Login error', 'Please enter your email');
      return;
    } else if (!isValidEmail(email)) {
      Alert.alert('Login error', 'Please enter a valid email');
      return;
    } else if (password === '') {
      Alert.alert('Login error', 'Please enter your password');
      return;
    } else {
      const body = {
        email: email,
        password: password,
      };
      handleContinueButton(body);
    }
  };
  const handleEmail = txt => {
    setEmail(txt);
  };
  const handlePassword = txt => {
    setPassword(txt);
  };
  const handlePasswordVisible = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };
  const handleContinueButton = async payload => {
    setVisible(true);
    // API call to login API
    try {
      const result = await logInUserApi(payload);
      console.log('🚀 ~ handleContinueButton ~ result:', result?.data);
      await AsyncStorage.setItem(
        'userToken',
        JSON.stringify(result?.data?.token),
      );
      
      dispatch(updateUser(result?.data?.userInfo));
      setVisible(false);
      navigation.navigate('BottomTab');
    } catch (error) {
      setVisible(false);
      Alert.alert('Login error', `${error?.data?.message}`);
      console.log(
        '🚀 ~ handleContinueButton ~ error:',
        error?.data?.message,
      );
    }
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
            onChangeText={handleEmail}
          />

          <InputLabel label="Password" />
          <InputText
            placeholder="Password"
            value={password}
            secureTextEntry={isPasswordHidden}
            onRightPress={handlePasswordVisible}
            onChangeText={handlePassword}
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
            onPress={handleValidation}
            TextStyle={{color: WHITE}}
            extraStyle={{
              marginTop: 50,
              marginBottom: 50,
              backgroundColor: PRIMARY,
            }}
          />
          <TouchableOpacity
            style={styles.forgetPassword}
            onPress={() => navigation.navigate('ForgetPassword')}>
            <Text style={styles.forgetPassword}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 240,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
            }}
            onPress={() =>
              navigation.navigate('CustomerRegister', {
                selectedRole: 'customer',
              })
            }>
            <Text style={styles.alreadyHaveAnAccount}>
              Don’t have an account?{' '}
              <Text style={styles.alreadyHaveAnAccountSpan}>Register</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <LoadingModal message={'Please wait...'} visible={visible} />
    </View>
  );
};

export default CustomerLogin;

function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}

import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import BottomTab from './BottomTab';
import OnBoardingScreen from '../Screens/Onbaording';
import SelectRole from '../Screens/SelectRole';
import CustomerRegister from '../Screens/CustomerSide/Register';
import CustomerLogin from '../Screens/CustomerSide/Login';
import ForgetPassword from '../Screens/ForgetPasswordFlow/ForgetPassword';
import OTPVerification from '../Screens/ForgetPasswordFlow/OTPVerification';
import CreatePassword from '../Screens/ForgetPasswordFlow/CreatePassword';
import CustomerOTP from '../Screens/CustomerSide/CustomerOTP';
import UploadPicture from '../Screens/CustomerSide/UploadPicture';
import UnableLocation from '../Screens/CustomerSide/UnableLocation';
import CustomerHome from '../Screens/CustomerSide/CustomerHome';
import TrackingParcel from '../Screens/CustomerSide/TrackingParcel';
import ParcelDetail from '../Screens/CustomerSide/ParcelDetail';
import ChatScreen from '../Screens/Chat';
import MyOrderScreeen from '../Screens/OrderScreen';
import ProfileScreen from '../Screens/Profile';
import PasswordRecover from '../Screens/ForgetPasswordFlow/PasswordRecover';
import TrackingParcelDetail from '../Screens/CustomerSide/TrackingParcelDetail';
import RegularDeliverySenderDetail from '../Screens/CustomerSide/RegularyDelivery/SendarDetails';
import RegularDeliveryParcelDetail from '../Screens/CustomerSide/RegularyDelivery/DeliveryParcelDetails';
import Checkout from '../Screens/CustomerSide/RegularyDelivery/CheckOut';
import DeliverySuccess from '../Screens/CustomerSide/RegularyDelivery/DeliverySuccess';

const stack = createNativeStackNavigator();

const Stack = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
      }}>
      <stack.Screen name="Splash" component={Splash} />
      <stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      <stack.Screen name="SelectRole" component={SelectRole} />
      <stack.Screen name="CustomerRegister" component={CustomerRegister} />
      <stack.Screen name="CustomerLogin" component={CustomerLogin} />
      <stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <stack.Screen name="OTPVerification" component={OTPVerification} />
      <stack.Screen name="CreatePassword" component={CreatePassword} />
      <stack.Screen name="CustomerOTP" component={CustomerOTP} />
      <stack.Screen name="UploadPicture" component={UploadPicture} />
      <stack.Screen name="UnableLocation" component={UnableLocation} />
      <stack.Screen name="CustomerHome" component={CustomerHome} />
      <stack.Screen name="TrackingParcel" component={TrackingParcel} />
      <stack.Screen name="ParcelDetail" component={ParcelDetail} />
      <stack.Screen name="ChatScreen" component={ChatScreen} />
      <stack.Screen name="My Orders" component={MyOrderScreeen} />
      <stack.Screen name="Profile" component={ProfileScreen} />
      <stack.Screen name="PasswordRecover" component={PasswordRecover} />
      <stack.Screen name="TrackingParcelDetail" component={TrackingParcelDetail} />
      <stack.Screen name="RegularDeliverySenderDetail" component={RegularDeliverySenderDetail} />
      <stack.Screen name="RegularDeliveryParcelDetail" component={RegularDeliveryParcelDetail} />
      <stack.Screen name="Checkout" component={Checkout} />
      <stack.Screen name="DeliverySuccess" component={DeliverySuccess} />
      <stack.Screen name="BottomTab" component={BottomTab} />
    </stack.Navigator>
  );
};

export default Stack;

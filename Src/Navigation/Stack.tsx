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
import InBoxScreen from '../Screens/InBox/InBox';
import NotificationScreen from '../Screens/Notification';
import EditProfileScreen from '../Screens/EditProfile';
import DeleteAccountScreen from '../Screens/DeleteAccount';
import ChangePasswordScreen from '../Screens/ChangePassword';
import PasswordChangedSuccess from '../Screens/PasswordChangedSuccess';
import PrivacyPolicy from '../Screens/PrivacyPolicy';
import TermsAndCondition from '../Screens/TermsCondition';
import DriverRegister from '../Screens/DriverSide/DriverRegister';
import DriverLogin from '../Screens/DriverSide/DriverLogin';
import DriverOTP from '../Screens/DriverSide/DriverOTP';
import DriverProfilePicture from '../Screens/DriverSide/DriverProfilePicture';
import DriverEnableLocation from '../Screens/DriverSide/EnableLocation';
import DriverProfileSetup from '../Screens/DriverSide/DriverProfileSetup';
import RequestSubmit from '../Screens/DriverSide/RequestSubmit';
import ProfileUnderReview from '../Screens/DriverSide/ProfileUnderReview';
import ProjectRejected from '../Screens/DriverSide/DriverProjectRejected';
import DriverProfileCustomerSide from '../Screens/DriverProfile';
import DriverBottomTab from './DriverBottomTab';
import DriverHome from '../Screens/DriverSide/DriverHome';
import DriverProfile from '../Screens/DriverProfile';
import ParcelDetailDriver from '../Screens/DriverSide/ParcelDetailDriver';
import GoForPickUp from '../Screens/DriverSide/Parcel';
import DriverEditProfile from '../Screens/DriverSide/DriverEditProfile';
import DriverReviews from '../Screens/DriverSide/DriverReviews';
import DriverProfileUnderReview from '../Screens/DriverSide/DriverProfileUnderReivew';




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
      <stack.Screen name="InBoxScreen" component={InBoxScreen} />
      <stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <stack.Screen name="DeleteAccountScreen" component={DeleteAccountScreen} />
      <stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
      <stack.Screen name="PasswordChangedSuccess" component={PasswordChangedSuccess} />
      <stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <stack.Screen name="TermsAndCondition" component={TermsAndCondition} />
      <stack.Screen name="DriverProfileCustomerSide" component={DriverProfileCustomerSide} />



      {/* Driver Side Navigation */}
      <stack.Screen name="DriverRegister" component={DriverRegister} />
      <stack.Screen name="DriverLogin" component={DriverLogin} />
      <stack.Screen name="DriverOTP" component={DriverOTP} />
      <stack.Screen name="DriverProfilePicture" component={DriverProfilePicture} />
      <stack.Screen name="DriverEnableLocation" component={DriverEnableLocation} />
      <stack.Screen name="DriverProfileSetup" component={DriverProfileSetup} />
      <stack.Screen name="RequestSubmit" component={RequestSubmit} />
      <stack.Screen name="ProfileUnderReview" component={ProfileUnderReview} />
      <stack.Screen name="ProjectRejected" component={ProjectRejected} />
      <stack.Screen name="DriverHome" component={DriverHome} />
      <stack.Screen name="DriverProfile" component={DriverProfile} />
      <stack.Screen name="ParcelDetailDriver" component={ParcelDetailDriver} />
      <stack.Screen name="GoForPickUp" component={GoForPickUp} />
      <stack.Screen name="DriverEditProfile" component={DriverEditProfile} />
      <stack.Screen name="DriverReviews" component={DriverReviews} />
      <stack.Screen name="DriverProfileUnderReview" component={DriverProfileUnderReview} />
      <stack.Screen name="BottomTab" component={BottomTab} />

      <stack.Screen name="DriverBottomTab" component={DriverBottomTab} />
    </stack.Navigator>
  );
};

export default Stack;

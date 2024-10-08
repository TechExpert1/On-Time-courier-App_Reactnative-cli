import React, {useCallback, useState} from 'react';
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {MainStyle} from '../../Theme/MainStyle';
import {COLORS} from '../../Theme/Index';
import styles from './styles';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {
  ArrowForward,
  BackIcon,
  ChangePassword,
  DeleteAccount,
  EditProfile,
  EditProfileTab,
  Logout,
  NotificationIcon,
  NotificationUnSelected,
  PrivacyPolicy,
  TermsAndCondition,
} from '../../Assets/Svgs';
import ProfileTab from '../../Components/ProfileTab';
import CustomButton from '../../Components/CustomButton';
import {PRIMARY, WHITE} from '../../Theme/Colors';
import {fonts} from '../../Theme/AppFonts';
import {getUserAPI} from '../../Services/apis/authAPIs';
import {useDispatch, useSelector} from 'react-redux';
import {updateUser} from '../../Store/UserSlice';
import {store} from '../../Store/Store';
import LoadingModal from '../../Components/LoadingModal';

const ProfileScreen = () => {
  const navigation = useNavigation<any>();
  // const userDetails = store.getState().user.userDetails;
  const {userDetails} = useSelector(state => state.user);
  const [logoutPopup, setLogoutPopup] = useState(false);
  const [visible, setVisible] = useState(false);
  const handleContinueButton = () => {
    navigation.navigate('CustomerRegister', {selectedRole: 'customer'});
  };
  const dispatch = useDispatch();
  const getUserData = async () => {
    try {
      const result = await getUserAPI(userDetails.userId); // Need to change this user ID to the dynamic
      dispatch(updateUser(result?.data));
    } catch (error) {
      console.log('🚀 ~ getUserData ~ error:', error);
    }
  };
  useFocusEffect(
    useCallback(() => {
      getUserData();
    }, []),
  );
  return (
    <View style={styles.body}>
      <View style={styles.appBarStyle}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.TitleName}>Me</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('NotificationScreen')}>
            <NotificationIcon></NotificationIcon>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.ProfilePic}>
        <Image source={require('../../Assets/Images/ProfilePic.png')} />
        <View
          style={{
            alignSelf: 'flex-end',
            position: 'absolute',
            justifyContent: 'flex-end',
            bottom: -10,
            right: -10,
          }}>
          <EditProfile></EditProfile>
        </View>
      </View>
      <Text style={styles.userName}>{userDetails?.userName}</Text>
      <Text style={styles.email}>{userDetails?.email}</Text>
      <ScrollView style={styles.content}>
        <ProfileTab
          OnTap={() => navigation.navigate('EditProfileScreen')}
          Title="Edit Profile"
          leftIcon={<EditProfileTab></EditProfileTab>}></ProfileTab>
        <ProfileTab
          OnTap={() =>
            navigation.navigate('ChangePasswordScreen', {isRole: 'customer'})
          }
          Title="Change Password"
          leftIcon={<ChangePassword></ChangePassword>}></ProfileTab>
        <ProfileTab
          OnTap={() => navigation.navigate('PrivacyPolicy')}
          Title="Privacy Policy"
          leftIcon={<PrivacyPolicy></PrivacyPolicy>}></ProfileTab>
        <ProfileTab
          OnTap={() => navigation.navigate('TermsAndCondition')}
          Title="Terms & Conditions"
          leftIcon={<TermsAndCondition></TermsAndCondition>}></ProfileTab>
        <ProfileTab
          OnTap={() => navigation.navigate('DeleteAccountScreen')}
          Title="Delete Account"
          leftIcon={<DeleteAccount></DeleteAccount>}></ProfileTab>
        <ProfileTab
          OnTap={() => setLogoutPopup(true)}
          Title="Log Out"
          leftIcon={<Logout></Logout>}></ProfileTab>
        <View style={{marginBottom: 30}}></View>
      </ScrollView>

      <Modal
        transparent={true}
        visible={logoutPopup}
        animationType="fade"
        onRequestClose={() => setLogoutPopup(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.CanclePopupTitle}>
              {'You are attempting to Log Out.'}
            </Text>
            <Text style={styles.CanclePopupText}>Are you sure?</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                // alignContent: 'space-between',
                alignItems: 'center',
                marginTop: 40,
              }}>
              <TouchableOpacity
                style={{width: '50%'}}
                onPress={() => setLogoutPopup(false)}>
                <Text style={styles.NoText}>Cancel</Text>
              </TouchableOpacity>
              <CustomButton
                text="Log Out"
                onPress={handleContinueButton}
                TextStyle={{
                  color: WHITE,
                  fontSize: 16,
                  fontFamily: fonts.MontserratBold,
                }}
                extraStyle={{
                  width: '50%',
                  marginRight: 30,
                  backgroundColor: PRIMARY,
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
      <LoadingModal visible={visible} message={'Please wait...'} />
    </View>
  );
};

export default ProfileScreen;
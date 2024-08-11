import React, { useEffect, useState } from 'react'
import { Image, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { ChangePassword, DeleteAccount, EditProfile, EditProfileTab, Logout, NotificationIcon, PayrollTab, PrivacyPolicy, Reviews, TermsAndCondition } from '../../../Assets/Svgs';
import ProfileTab from '../../../Components/ProfileTab';
import CustomButton from '../../../Components/CustomButton';
import { PRIMARY, WHITE } from '../../../Theme/Colors';
import { fonts } from '../../../Theme/AppFonts';
import { requestGalleryPermission, requestPermissionsForCamera } from '../../../utils/permission';
import { ImageLibraryOptions, ImagePickerResponse, launchImageLibrary } from 'react-native-image-picker';

const DriverProfile = () => {
  const navigation = useNavigation<any>();
  const [logoutPopup, setLogoutPopup] = useState(false);
  const handleContinueButton = () => {
    navigation.navigate('DriverRegister');
  };

  useEffect(() => {
    requestGalleryPermission();
    requestPermissionsForCamera();
}, []);



  const openImagePicker = () => {
    const options: ImageLibraryOptions = {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 2000,
        maxWidth: 2000,
    };

    launchImageLibrary(options, (response: ImagePickerResponse) => {
        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.errorMessage) {
            console.log('Image picker error');
        } else {
            let imageUri = response.assets?.[0]?.uri;
            if(imageUri){
            // setSelectedImage(imageUri);
            // setModalVisible(!modalVisible)
            }else{
                console.log('image uri is undefined');
            }
        }
    });
};

  return (
    <ScrollView style={styles.body}>
      <View style={styles.appBarStyle}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.TitleName}>Me</Text>
          <TouchableOpacity onPress={()=> navigation.navigate('NotificationScreen')}><NotificationIcon></NotificationIcon></TouchableOpacity>
        </View>
      </View>

      <View style={styles.ProfilePic}>
        <Image source={require('../../../Assets/Images/ProfilePic.png')} />
        <View
          style={{
            alignSelf: 'flex-end',
            position: 'absolute',
            justifyContent: 'flex-end',
            bottom: -10,
            right: -10,
          }}>
         <TouchableOpacity onPress={openImagePicker}><EditProfile></EditProfile></TouchableOpacity>
        </View>
      </View>
      <Text style={styles.userName}>Robert Smith</Text>
      <Text style={styles.email}>useremail@email.com</Text>
      <View style={styles.content}>
        <ProfileTab
          OnTap={() => navigation.navigate('DriverEditProfile')}
          Title="Edit Profile"
          leftIcon={<EditProfileTab></EditProfileTab>}></ProfileTab>
           <ProfileTab
          OnTap={() => navigation.navigate('DriverReviews')}
          Title="Reviews"
          leftIcon={<Reviews></Reviews>}></ProfileTab>
          <ProfileTab
          // OnTap={() => navigation.navigate('')}
          Title="Payroll details"
          leftIcon={<PayrollTab></PayrollTab>}></ProfileTab>
        <ProfileTab
          OnTap={() => navigation.navigate('ChangePasswordScreen',{isRole:'driver'})}
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
        <ProfileTab OnTap={()=> setLogoutPopup(true)} Title="Log Out" leftIcon={<Logout></Logout>}></ProfileTab>
        <View style={{marginBottom:30}}></View>
      </View>

      <Modal
        transparent={true}
        visible={logoutPopup}
        animationType="slide"
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
    </ScrollView>
  )
}

export default DriverProfile

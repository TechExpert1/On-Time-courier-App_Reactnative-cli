import React, {useCallback, useEffect, useRef, useState} from 'react';
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
  CameraIcon,
  ChangePassword,
  DeleteAccount,
  EditProfile,
  EditProfileTab,
  GalleryIcon,
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
import { requestGalleryPermission, requestPermissionsForCamera } from '../../utils/permission';
import { ImageLibraryOptions, launchImageLibrary, ImagePickerResponse, launchCamera } from 'react-native-image-picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const ProfileScreen = () => {
  const navigation = useNavigation<any>();
  // const userDetails = store.getState().user.userDetails;
  const {userDetails} = useSelector(state => state.user);
  const [logoutPopup, setLogoutPopup] = useState(false);
  const [visible, setVisible] = useState(false);
  const [selectImage, setSelectedImage] = useState();
  const picker = useRef<any>(null);
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
        let imageUri = response.assets?.[0];
        if (imageUri) {
          setSelectedImage(imageUri);
          picker.current.close()
          // setModalVisible(!modalVisible)
        } else {
          console.log('image uri is undefined');
        }
      }
    });
  };

  const openCamera = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.errorMessage) {
        console.log('Camera error');
      } else {
        let imageUri = response.assets?.[0]?.uri;
        if (imageUri) {
          setSelectedImage(imageUri);
          picker.current.close()
        } else {
          console.log('image uri is undefined');
        }
      }
    });
  };
  
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
        <TouchableOpacity
        onPress={()=> picker.current.open()}
          style={{
            alignSelf: 'flex-end',
            position: 'absolute',
            justifyContent: 'flex-end',
            bottom: -10,
            right: -10,
          }}>
          <EditProfile></EditProfile>
        </TouchableOpacity>
      </View>
      {/* <Text style={styles.userName}>{userDetails?.userName}</Text>
      <Text style={styles.email}>{userDetails?.email}</Text> */}
       <Text style={styles.userName}>Robert Smith</Text>
       <Text style={styles.email}>useremail@email.com</Text>
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
      <RBSheet
        ref={picker}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          draggableIcon: {
            marginTop: 50,
            width: 83,
          },
          container: {
            height: '20%',
            // maxHeight: '100%',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            paddingHorizontal: 20,
          },
        }}>
          <View style={{flexDirection:'row', padding:30, paddingTop:heightPercentageToDP(5)}}>
            <TouchableOpacity onPress={openCamera} style={{alignItems:'center'}}>
              <CameraIcon />
              <Text style={styles.PickerText}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openImagePicker} style={{alignItems:'center', marginLeft:widthPercentageToDP(20)}}>
              <GalleryIcon />
              <Text style={styles.PickerText}>Gallery</Text>
            </TouchableOpacity>
          </View>
      </RBSheet>
      
      <LoadingModal visible={visible} message={'Please wait...'} />
    </View>
  );
};

export default ProfileScreen;
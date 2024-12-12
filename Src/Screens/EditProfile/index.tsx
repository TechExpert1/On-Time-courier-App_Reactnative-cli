import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {BackIcon, CameraIcon, EditProfile, GalleryIcon} from '../../Assets/Svgs';
import InputLabel from '../../Components/InputLabel';
import InputText from '../../Components/InputText';
import CustomButton from '../../Components/CustomButton';
import {useSelector} from 'react-redux';
import {PRIMARY, WHITE} from '../../Theme/Colors';
import {
  requestGalleryPermission,
  requestPermissionsForCamera,
} from '../../utils/permission';
import {
  ImageLibraryOptions,
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import LoadingModal from '../../Components/LoadingModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RBSheet from 'react-native-raw-bottom-sheet';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const EditProfileScreen = () => {
  const {userDetails} = useSelector(state => state.user);
  const navigation = useNavigation<any>();
  const [fullName, setFullName] = useState(userDetails?.userName);
  const [phoneNumber, setPhoneNumber] = useState(userDetails?.phoneNumber);
  const [addrss, setAddress] = useState(userDetails?.address);
  const [picture, setPicture] = useState(userDetails?.profilepic);
  const [selectImage, setSelectedImage] = useState();
  const [visible, setVisible] = useState(false);
  const picker = useRef<any>(null);

  const handleFullName = txt => {
    setFullName(txt);
  };
  const handlePhonNumber = txt => {
    setPhoneNumber(txt);
  };
  const handleAddrss = txt => {
    setAddress(txt);
  };
  
  const getUserToken = async () => {
    const token = await AsyncStorage.getItem('userToken');
    const userToken = JSON.parse(token);
    return token;
  };


  const handleContinueButton = async () => {
    // if (!selectImage?.uri) {
    //   Alert.alert('Error', `Please Select Image`);
    // } else {
    //   const formData = new FormData();
    //   setVisible(true);
    //   formData.append('userName', fullName);
    //   formData.append('phoneNumber', phoneNumber);
    //   formData.append('address', addrss);
    //   formData.append(
    //     'images',
    //     selectImage?.uri
    //       ? {
    //           uri: selectImage?.uri,
    //           type: selectImage?.type, // Modify the type based on the image type
    //           name: selectImage?.fileName,
    //         }
    //       : null,
    //   );
    //   setVisible(false);
    //   let authToken = getUserToken();
    //   await fetch(
    //     'https://ontimecourier-production.up.railway.app/api/v1/user/editProfile',
    //     {
    //       method: 'PUT',
    //       headers: {
    //         Accept: 'multipart/form-data',
    //         Authorization: authToken
    //       },
    //       body: formData,
    //     },
    //   )
    //     .then(data => {
    //       setVisible(false);
    //       console.log(data, 'Here is');
    //       Alert.alert('Profile Update', `${data?.message}`);
    //       setSelectedImage(null);
         
    //     })
    //     .catch(error => {
    //       if (error.response.status === 401) {
    //         Alert.alert('Profile Error uploaded', `${error}`);
    //       }
    //       setVisible(false);
    //       console.log('🚀 ~ Profile Update ~ error:', error);
    //     });
    // }
    navigation.navigate('BottomTab');
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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackIcon></BackIcon>
          </TouchableOpacity>
          <Text style={styles.TitleName}>Edit Profile</Text>
          <View></View>
        </View>
      </View>

      <View style={styles.ProfilePic}>
        <Image
          style={{width: 95, height: 95, alignSelf: 'center', borderRadius: 20}}
          resizeMode={'cover'}
          source={
            selectImage?.uri
              ? {uri: selectImage?.uri}
              : picture != null
              ? {uri: picture}
              : require('../../Assets/Images/ProfilePic.png')
          }
        />
        <TouchableOpacity
        onPress={()=> picker.current.open()}
          activeOpacity={0.5}
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

      <View style={styles.content}>
        <InputLabel label="Full Name" />
        <InputText
          placeholder="Full Name"
          onChangeText={handleFullName}
          value={fullName}
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
        <CustomButton
          text="Save"
          onPress={handleContinueButton}
          TextStyle={{color: WHITE}}
          extraStyle={{
            marginTop: 180,
            backgroundColor: PRIMARY,
          }}
        />
      </View>
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

export default EditProfileScreen;

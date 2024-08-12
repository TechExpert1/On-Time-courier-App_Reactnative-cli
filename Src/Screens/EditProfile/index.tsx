import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {BackIcon, EditProfile} from '../../Assets/Svgs';
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
  launchImageLibrary,
} from 'react-native-image-picker';
import LoadingModal from '../../Components/LoadingModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfileScreen = () => {
  const {userDetails} = useSelector(state => state.user);
  const navigation = useNavigation<any>();
  const [fullName, setFullName] = useState(userDetails?.userName);
  const [phoneNumber, setPhoneNumber] = useState(userDetails?.phoneNumber);
  const [addrss, setAddress] = useState(userDetails?.address);
  const [picture, setPicture] = useState(userDetails?.profilepic);
  const [selectImage, setSelectedImage] = useState();
  const [visible, setVisible] = useState(false);

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
    if (!selectImage?.uri) {
      Alert.alert('Error', `Please Select Image`);
    } else {
      const formData = new FormData();
      setVisible(true);
      formData.append('userName', fullName);
      formData.append('phoneNumber', phoneNumber);
      formData.append('address', addrss);
      formData.append(
        'images',
        selectImage?.uri
          ? {
              uri: selectImage?.uri,
              type: selectImage?.type, // Modify the type based on the image type
              name: selectImage?.fileName,
            }
          : null,
      );
      setVisible(false);
      let authToken = getUserToken();
      await fetch(
        'https://ontimecourier-production.up.railway.app/api/v1/user/editProfile',
        {
          method: 'PUT',
          headers: {
            Accept: 'multipart/form-data',
            Authorization: authToken
          },
          body: formData,
        },
      )
        .then(data => {
          setVisible(false);
          console.log(data, 'Here is');
          Alert.alert('Profile Update', `${data?.message}`);
          setSelectedImage(null);
          navigation.navigate('BottomTab');
        })
        .catch(error => {
          if (error.response.status === 401) {
            Alert.alert('Profile Error uploaded', `${error}`);
          }
          setVisible(false);
          console.log('🚀 ~ Profile Update ~ error:', error);
        });
    }
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
          // setModalVisible(!modalVisible)
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
        onPress={openImagePicker}
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
      <LoadingModal visible={visible} message={'Please wait...'} />
    </View>
  );
};

export default EditProfileScreen;

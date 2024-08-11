import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
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

const EditProfileScreen = () => {
  const {userDetails} = useSelector(state => state.user);
  const navigation = useNavigation<any>();
  const [fullName, setFullName] = useState(userDetails?.userName);
  const [phoneNumber, setPhoneNumber] = useState(userDetails?.phoneNumber);
  const [addrss, setAddress] = useState('');

  const handleFullName = txt => {
    setFullName(txt);
  };
  const handlePhonNumber = txt => {
    setPhoneNumber(txt);
  };
  const handleAddrss = txt => {
    setAddress(txt);
  };
  const handleContinueButton = () => {
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
        let imageUri = response.assets?.[0]?.uri;
        if (imageUri) {
          // setSelectedImage(imageUri);
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
            <TouchableOpacity onPress={openImagePicker}>
              <EditProfile></EditProfile>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.content}>
          <InputLabel label="Full Name" />
          <InputText
            placeholder="Full Name"
            onChange={handleFullName}
            value={fullName}
          />
          <InputLabel label="Phone #" />
          <InputText
            placeholder="Phone #"
            type={'numeric'}
            onChange={handlePhonNumber}
            value={phoneNumber}
          />
          <InputLabel label="Address" />
          <InputText
            placeholder="Address"
            onChange={handleAddrss}
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
      </View>

      <View style={styles.ProfilePic}>
        <Image source={require('../../Assets/Images/ProfilePic.png')} />
        <TouchableOpacity
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
    </View>
  );
};

export default EditProfileScreen;

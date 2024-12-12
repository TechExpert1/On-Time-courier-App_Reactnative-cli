import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import AppBar from '../../../Components/AppBar';
import styles from './styles';
import {CameraIcon, GalleryIcon, UploadPictureSVG} from '../../../Assets/Svgs';
import CustomButton from '../../../Components/CustomButton';
import {PRIMARY, WHITE} from '../../../Theme/Colors';
import {
  requestGalleryPermission,
  requestPermissionsForCamera,
} from '../../../utils/permission';
import {
  ImageLibraryOptions,
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import RBSheet from 'react-native-raw-bottom-sheet';

const DriverProfilePicture = () => {
  const navigation = useNavigation<any>();
  const [otp, setOTP] = useState<string>('');
  const [selectImage, setSelectedImage] = useState();
  const picker = useRef<any>(null);

  const handleContinueButton = () => {
    navigation.navigate('DriverEnableLocation');
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
      <AppBar text="Profile Picture"></AppBar>
      <View style={styles.content}>
      {selectImage?.uri ? (
          <Image
            style={{
              width: 195,
              height: 195,
              alignSelf: 'center',
              borderRadius: 30,
            }}
            source={{uri: selectImage?.uri}}
            // source={require('../../Assets/Images/user.png')}
          ></Image>
        ) : (
          <View style={styles.uploadSvgStyle}>
            <UploadPictureSVG></UploadPictureSVG>
          </View>
        )}
        <TouchableOpacity onPress={()=> picker.current.open()}>
          <Text style={styles.uploadPicture}>Upload picture</Text>
        </TouchableOpacity>
        <CustomButton
          text="Continue"
          onPress={handleContinueButton}
          TextStyle={{color: WHITE}}
          extraStyle={{
            marginTop: heightPercentageToDP(35),
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
      
    </View>
  );
};

export default DriverProfilePicture;

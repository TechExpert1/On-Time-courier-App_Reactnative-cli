import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import AppBar from '../../../Components/AppBar';
import CustomButton from '../../../Components/CustomButton';
import {PRIMARY, WHITE} from '../../../Theme/Colors';
import {CameraIcon, GalleryIcon, UploadPictureSVG} from '../../../Assets/Svgs';
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
import LoadingModal from '../../../Components/LoadingModal';
import RBSheet from 'react-native-raw-bottom-sheet';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const UploadPicture = () => {
  const navigation = useNavigation<any>();
  const [selectImage, setSelectedImage] = useState();
  const [visible, setVisible] = useState(false);
  const picker = useRef<any>(null);

  const handleContinueButton = async () => {
    if (!selectImage?.uri) {
      Alert.alert('Error', `Please Select Image`);
    } else {
      const formData = new FormData();
      setVisible(true);
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
      await fetch(
        'https://ontimecourier-production.up.railway.app/api/v1/user/editProfile',
        {
          method: 'PUT',
          headers: {
            Accept: 'multipart/form-data',
          },
          body: formData,
        },
      )
        .then(data => {
          setVisible(false);
          console.log(data, "Here is");
          // Alert.alert('Profile Picture uploaded', `${data?.data?.message}`);
          setSelectedImage(null);
          navigation.navigate('UnableLocation');
        })
        .catch(error => {
          if (error.response.status === 401) {
            Alert.alert('Profile Picture uploaded', `${error}`);
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
            marginTop: 200,
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

export default UploadPicture;

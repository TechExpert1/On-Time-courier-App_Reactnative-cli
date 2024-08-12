import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import AppBar from '../../../Components/AppBar';
import CustomButton from '../../../Components/CustomButton';
import {PRIMARY, WHITE} from '../../../Theme/Colors';
import {UploadPictureSVG} from '../../../Assets/Svgs';
import {
  requestGalleryPermission,
  requestPermissionsForCamera,
} from '../../../utils/permission';
import {
  ImageLibraryOptions,
  ImagePickerResponse,
  launchCamera,
} from 'react-native-image-picker';
import LoadingModal from '../../../Components/LoadingModal';

const UploadPicture = () => {
  const navigation = useNavigation<any>();
  const [selectImage, setSelectedImage] = useState();
  const [visible, setVisible] = useState(false);

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
        let imageUri = response.assets?.[0];
        if (imageUri) {
          setSelectedImage(imageUri);
          console.log(imageUri);
          // setModalVisible(!modalVisible)
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

        <TouchableOpacity onPress={openCamera}>
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
      <LoadingModal visible={visible} message={'Please wait...'} />
    </View>
  );
};

export default UploadPicture;

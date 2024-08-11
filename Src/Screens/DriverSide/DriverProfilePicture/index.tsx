import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import AppBar from '../../../Components/AppBar';
import styles from './styles';
import { UploadPictureSVG } from '../../../Assets/Svgs';
import CustomButton from '../../../Components/CustomButton';
import { PRIMARY, WHITE } from '../../../Theme/Colors';
import { requestGalleryPermission, requestPermissionsForCamera } from '../../../utils/permission';
import { ImageLibraryOptions, ImagePickerResponse, launchCamera } from 'react-native-image-picker';

const DriverProfilePicture = () => {
    const navigation = useNavigation<any>();
    const [otp, setOTP] = useState<string>('');
  
    const handleContinueButton = () => {
      navigation.navigate('DriverEnableLocation');
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
        <AppBar text="Profile Picture"></AppBar>
        <View style={styles.content}>
         <View style={styles.uploadSvgStyle}>
         <UploadPictureSVG></UploadPictureSVG>
         
         </View>
         <TouchableOpacity onPress={openCamera}><Text style={styles.uploadPicture}>Upload picture</Text></TouchableOpacity>
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
      </View>
    );
}

export default DriverProfilePicture

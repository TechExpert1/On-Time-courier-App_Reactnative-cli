import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Text, View } from 'react-native';
import AppBar from '../../../Components/AppBar';
import styles from './styles';
import { UploadPictureSVG } from '../../../Assets/Svgs';
import CustomButton from '../../../Components/CustomButton';
import { PRIMARY, WHITE } from '../../../Theme/Colors';

const DriverProfilePicture = () => {
    const navigation = useNavigation<any>();
    const [otp, setOTP] = useState<string>('');
  
    const handleContinueButton = () => {
      navigation.navigate('DriverEnableLocation');
    };
    return (
      <View style={styles.body}>
        <AppBar text="Profile Picture"></AppBar>
        <View style={styles.content}>
         <View style={styles.uploadSvgStyle}>
         <UploadPictureSVG></UploadPictureSVG>
         
         </View>
         <Text style={styles.uploadPicture}>Upload picture</Text>
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

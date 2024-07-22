import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import CustomButton from '../../../Components/CustomButton';

const DriverEnableLocation = () => {
    const navigation = useNavigation<any>();
    const [otp, setOTP] = useState<string>('');
  
    const handleContinueButton = () => {
      navigation.navigate('DriverProfileSetup');
    };
    return (
      <View style={styles.body}>
        
        <View style={styles.content}>
        <Image style={styles.imageStyle} source={require('../../../Assets/Images/LocationImage.png')}></Image>
         <Text style={styles.uploadPicture}>Enable Location</Text>
         <Text style={styles.locationText}><Text style={styles.SpanText}>On Time Couriers</Text> wants to access your location.</Text>
          <CustomButton
            text="Allow"
            onPress={handleContinueButton}
           
            extraStyle={{
              marginTop: 100,
             
            }}
          />
          <TouchableOpacity onPress={handleContinueButton}><Text style={styles.notNowText}>Not Now</Text></TouchableOpacity>
        </View>
      </View>
    );
}

export default DriverEnableLocation

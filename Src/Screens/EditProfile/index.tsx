import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import { BackIcon, EditProfile } from '../../Assets/Svgs';
import InputLabel from '../../Components/InputLabel';
import InputText from '../../Components/InputText';
import CustomButton from '../../Components/CustomButton';
import { PRIMARY, WHITE } from '../../Theme/Colors';

const EditProfileScreen = () => {
    const navigation = useNavigation<any>();
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
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
      

    return (
      <View style={styles.body}>
        <View style={styles.appBarStyle}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={()=> navigation.goBack()}><BackIcon></BackIcon></TouchableOpacity>
            <Text style={styles.TitleName}>Edit Profile</Text>
            <View></View>
          </View>
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
            <EditProfile></EditProfile>
          </View>
          
        </View>

       <View style={styles.content}>
       <InputLabel label="Full Name"  />
       <InputText placeholder="Full Name" onChange={handleFullName} value={fullName}/>
       <InputLabel label="Phone #" />
       <InputText placeholder="Phone #" type={'numeric'} onChange={handlePhonNumber} value={phoneNumber}/>
       <InputLabel label="Address" />
       <InputText placeholder="Address" onChange={handleAddrss} value={addrss}/>
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

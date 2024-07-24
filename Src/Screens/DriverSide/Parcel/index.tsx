import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import AppBar from '../../../Components/AppBar';
import {ArrowNext, BackIcon, CallBox, GONextBox, LocationSearching, MessageBox, OneStar} from '../../../Assets/Svgs';
import InputText from '../../../Components/InputText';
import MapView from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import CustomButton from '../../../Components/CustomButton';
import { PRIMARY, WHITE } from '../../../Theme/Colors';
import { fonts } from '../../../Theme/AppFonts';

const GoForPickUp = () => {
    const navigation = useNavigation<any>();
    return (
      <View style={styles.body}>
        <AppBar text="" leftIcon={<BackIcon></BackIcon>} OnLeftPress={()=> navigation.goBack() }></AppBar>
        <MapView
          style={{width: '100%', height: '100%', marginTop: 20}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}></MapView>
        <View style={styles.InfoBox}>
          <Text style={styles.parcelInformationText}>Parcel Information</Text>
          
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // marginHorizontal: 20,
              alignItems: 'center',
              marginTop: 15,
            }}>
             <View>
            <Text style={styles.dateTextStyle}>May 25, 2024</Text>
            <Text style={styles.cityTextStyle}>California City</Text>
          </View>
            <ArrowNext></ArrowNext>
            <View>
              <Text style={styles.dateTextStyle}>June 5, 2024</Text>
              <Text style={styles.cityTextStyle}>New York City</Text>
            </View>
          </View>
  
         
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 24,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../../Assets/Images/UserProfile.png')}></Image>
              <View style={{marginLeft: 10}}>
                <Text style={styles.cityTextStyle}>Ronald Richard</Text>
                {/* <Text style={styles.deliveryPartnerStyle}>Ronald Richard</Text> */}
                <View style={{flexDirection: 'row'}}>
                  <OneStar></OneStar>
                  <Text style={styles.deliveryPartnerStyle}>4.5</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // width: 90,
              }}>
             <TouchableOpacity onPress={()=> navigation.navigate('InBoxScreen')} style={{marginRight:12}}><MessageBox></MessageBox></TouchableOpacity>
              <CallBox></CallBox>
            </View>
          </View>
          <CustomButton
              text="Go For Pickup"
              // onPress={() => RateBottomRef.current.open()}
              TextStyle={{
                color: WHITE,
                fontSize: 16,
                fontFamily: fonts.MontserratBold,
              }}
              
              extraStyle={{
                marginTop: 35,
             
                backgroundColor: PRIMARY,
              }}
            />
        </View>
      </View>
    );
};

export default GoForPickUp;

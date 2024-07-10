import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import AppBar from '../../../Components/AppBar';
import {
  ArrowNext,
  BackIcon,
  CallBox,
  MessageBox,
  OneStar,
} from '../../../Assets/Svgs';
import MapView, {Polyline} from 'react-native-maps';

const TrackingParcelDetail = () => {
  return (
    <View style={styles.body}>
      <AppBar text="Tracking Parcel" leftIcon={<BackIcon></BackIcon>}></AppBar>
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
        <View style={styles.deliveryDetail}>
          <View>
            <Text style={styles.deliveryPartnerStyle}>Delivery Type</Text>
            <Text style={styles.cityTextStyle}>On Priority</Text>
          </View>
          <View>
            <Text style={styles.deliveryPartnerStyle}>Parcel Weight</Text>
            <Text style={styles.cityTextStyle}>10 lbs</Text>
          </View>
        </View>
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
           <View style={{marginRight:12}}><MessageBox></MessageBox></View>
            <CallBox></CallBox>
          </View>
        </View>

      </View>
    </View>
  );
};

export default TrackingParcelDetail;

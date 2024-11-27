import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import AppBar from '../../../Components/AppBar';
import MapView from 'react-native-maps';
import {
  ArrowNext,
  BackIcon,
  CallBox,
  MessageBox,
  OneStar,
} from '../../../Assets/Svgs';
import styles from './styles';
import CustomButton from '../../../Components/CustomButton';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const LocationScreen = props => {
  const {status} = props.route.params;
  const [pickupStatus, setPickupStatus] = useState(status);
  const navigation = useNavigation<any>();
  return (
    <View style={styles.body}>
      <AppBar
        text=""
        leftIcon={<BackIcon></BackIcon>}
        OnLeftPress={() => navigation.goBack()}></AppBar>
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
          style={
            {
              // flexDirection: 'row',
              // justifyContent: 'space-between',
              // marginHorizontal: 20,
              // alignItems: 'center',
              // marginTop: 15,
            }
          }>
          {pickupStatus === 'Cancel' ? (
            <View>
              <View>
                <Text style={styles.dateTextStyle}>Pickup Location</Text>
                <Text style={styles.cityTextStyle}>California City</Text>
              </View>
            </View>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
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
          )}
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
              {pickupStatus === 'Cancel' ? (
                <View></View>
              ) : (
                <View style={{flexDirection: 'row'}}>
                  <OneStar></OneStar>
                  <Text style={styles.deliveryPartnerStyle}>4.5</Text>
                </View>
              )}
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // width: 90,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('InBoxScreen')}
              style={{marginRight: 12}}>
              <MessageBox></MessageBox>
            </TouchableOpacity>
            <CallBox></CallBox>
          </View>
        </View>
        <CustomButton
          onPress={() => {
            if (pickupStatus === 'New') {
              navigation.navigate('Home');
            } else if (
              pickupStatus === 'Pending' ||
              pickupStatus === 'Accepted'
            ) {
              setPickupStatus('Delivered');
            } else if (pickupStatus === 'Delivered') {
              navigation.navigate('Home');
            } else if (pickupStatus === 'Cancel') {
              navigation.navigate('Home');
            }
          }}
          text={
            pickupStatus === 'New'
              ? 'Accept'
              : pickupStatus === 'Pending' || pickupStatus === 'Accepted'
              ? 'Confirm Pickup'
              : pickupStatus === 'Cancel'
              ? 'Done'
              : 'Delivered'
          }
          extraStyle={{marginTop: heightPercentageToDP(4)}}
        />
      </View>
    </View>
  );
};

export default LocationScreen;

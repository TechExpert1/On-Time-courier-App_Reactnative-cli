import React from 'react';
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  StatusBar,
  Image,
} from 'react-native';
import {
  BLACK,
  BLACK_GREY,
  BORDERCOLOR,
  GREYCOLOR_II,
  LIGHT_GREEN,
  PRIMARY,
  TEXTCOLOR,
  WHITE,
  YELLOW,
} from '../Theme/Colors';
import {fonts} from '../Theme/AppFonts';
import {ArrowNext, ArrowRightBox} from '../Assets/Svgs';
import CustomButton from './CustomButton';

type MyComponentProps = {
  // text: string;
  // leftIcon?: any;
  // rightIcon?: any;
  driver_name?: any;
  delivery_city?: any;
  delivery_date?: any;
  pickup_city?: any;
  pickup_date?: any;
  status?: any;
  isNew?: any;
  onTap?: () => void;
  OnTapDriver?: () => void;
  onMapPress?: () => void;
};

const DriverDeliveryBox: React.FC<MyComponentProps> = props => {
  return (
    <TouchableOpacity >
      <View style={styles.BoxStyle}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.trackingId}>#4589632579</Text>
          {props.isNew != 'New' ? (
            <View
              style={[
                styles.PickUpBox,
                {
                  backgroundColor:
                    props.status === 'Pending'
                      ? BLACK_GREY
                      : props.status === 'Delivered'
                      ? PRIMARY
                      : YELLOW,
                },
              ]}>
              <Text style={styles.PickupStatusColor}>{props.status}</Text>
            </View>
          ) : (
            <View></View>
          )}
        </View>
        <View style={styles.divider}></View>
        <TouchableOpacity onPress={props.onMapPress}><Image
          style={{height: 128, width: '100%', paddingBottom: 10}}
          source={require('../Assets/Images/MapImage.png')}></Image></TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            alignItems: 'center',
            marginTop: 15,
          }}>
          <View>
            <Text style={styles.dateTextStyle}>{props.pickup_date}</Text>
            <Text style={styles.cityTextStyle}>{props.pickup_city}</Text>
          </View>
          <ArrowNext></ArrowNext>
          <View>
            <Text style={styles.dateTextStyle}>{props.delivery_date}</Text>
            <Text style={styles.cityTextStyle}>{props.delivery_city}</Text>
          </View>
        </View>
        <TouchableOpacity
          // onPress={props.OnTapDriver}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image source={require('../Assets/Images/UserProfile.png')}></Image>
            <View style={{marginLeft: 10}}>
              <Text style={styles.cityTextStyle}>{props.driver_name}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={props.onTap}><ArrowRightBox></ArrowRightBox></TouchableOpacity>
        </TouchableOpacity>
        {props.isNew === 'New' ? (
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <CustomButton
              text="Decline"
              // onPress={handleContinueButton}
              TextStyle={{
                color: TEXTCOLOR,
                fontSize: 16,
                fontFamily: fonts.MontserratBold,
              }}
              extraStyle={{
                //   marginTop: 100,
                backgroundColor: LIGHT_GREEN,
                width: '40%',
              }}
            />
            <CustomButton
              text="Go For Pickup"
              // onPress={handleContinueButton}

              extraStyle={{
                //   marginTop: 100,
                marginLeft: 10,
                width: '55%',
              }}
            />
          </View>
        ) : (
          <View></View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  BoxStyle: {
    // height:178,
    width: '100%',
    borderWidth: 1,
    borderColor: BORDERCOLOR,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 13,
    marginTop: 15,
  },
  divider: {
    width: '100%',
    borderWidth: 1,
    borderColor: BORDERCOLOR,
    paddingHorizontal: 20,
    marginTop: 15,
  },
  trackingId: {
    fontSize: 14,
    fontFamily: fonts.MontserratBold,
    color: TEXTCOLOR,
    lineHeight: 17.07,
  },
  PickUpBox: {
    width: 89,
    height: 29,
    borderRadius: 4,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: YELLOW,
  },
  PickupStatusColor: {
    fontSize: 14,
    fontFamily: fonts.PoppinsRegular,
    color: WHITE,
    lineHeight: 17.07,
  },
  dateTextStyle: {
    fontSize: 12,
    fontFamily: fonts.MontserratRegular,
    color: GREYCOLOR_II,
    lineHeight: 17.07,
  },
  cityTextStyle: {
    fontSize: 14,
    fontFamily: fonts.MontserratBold,
    color: TEXTCOLOR,
    lineHeight: 17.07,
    marginTop: 5,
  },
  deliveryPartnerStyle: {
    fontSize: 10,
    fontFamily: fonts.MontserratRegular,
    color: GREYCOLOR_II,
    lineHeight: 17.07,
  },
});
export default DriverDeliveryBox;

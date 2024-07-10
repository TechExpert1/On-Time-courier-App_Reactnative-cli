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
import {BLACK, BORDERCOLOR, GREYCOLOR_II, TEXTCOLOR, WHITE, YELLOW} from '../Theme/Colors';
import {fonts} from '../Theme/AppFonts';
import { ArrowNext, ArrowRightBox } from '../Assets/Svgs';

type MyComponentProps = {
  // text: string;
  // leftIcon?: any;
  // rightIcon?: any;
  // OnLeftPress?: () => void;
  // OnRightpress?: () => void;
  // style?: ViewStyle;
  // textStyle?: TextStyle;
  // rightIconStyle?: any;
  // leftIconStyle?: any;
  onTap?: ()=> void;
};

const DeliveryBox: React.FC<MyComponentProps> = props => {
  return (
    <TouchableOpacity onPress={props.onTap}>
      <View style={styles.BoxStyle}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.trackingId}>#4589632579</Text>
          <View style={styles.PickUpBox}>
            <Text style={styles.PickupStatusColor}>Picked Up</Text>
          </View>
        </View>
        <View style={styles.divider}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
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
            marginTop: 20,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../Assets/Images/UserProfile.png')}></Image>
            <View style={{marginLeft: 10}}>
              <Text style={styles.deliveryPartnerStyle}>Delivery partner</Text>
              <Text style={styles.cityTextStyle}>Ronald Richard</Text>
            </View>
          </View>
          <ArrowRightBox></ArrowRightBox>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  BoxStyle: {
    // height:178,
    width:"100%",
    borderWidth:1,
    borderColor:BORDERCOLOR,
    borderRadius:10,
    paddingHorizontal:10,
    paddingVertical:13,
    marginTop:15
  },
  divider:{
    width:'100%',
    borderWidth:1,
    borderColor:BORDERCOLOR,
    paddingHorizontal:20,
    marginTop:15,
  },
  trackingId:{
    fontSize:14,
    fontFamily:fonts.MontserratBold,
    color:TEXTCOLOR,
    lineHeight:17.07,
  },
  PickUpBox:{
    width:89,
    height:29,
    borderRadius:4,
    alignItems:'center',
    alignContent:'center',
    justifyContent:'center',
    backgroundColor:YELLOW
  },
  PickupStatusColor:{
    fontSize:14,
    fontFamily:fonts.PoppinsRegular,
    color:WHITE,
    lineHeight:17.07,
  },
  dateTextStyle:{
    fontSize:12,
    fontFamily:fonts.MontserratRegular,
    color:GREYCOLOR_II,
    lineHeight:17.07,
  },
  cityTextStyle:{
    fontSize:14,
    fontFamily:fonts.MontserratBold,
    color:TEXTCOLOR,
    lineHeight:17.07,
    marginTop:5,
  },
  deliveryPartnerStyle:{
    fontSize:10,
    fontFamily:fonts.MontserratRegular,
    color:GREYCOLOR_II,
    lineHeight:17.07,
  }
});
export default DeliveryBox;

import {Platform, StyleSheet} from 'react-native';
import {
  BG_COLOR,
  BLACK,
  BORDERCOLOR,
  GREYCOLOR_I,
  GREYCOLOR_II,
  LIGHT_GREEN,
  LIGHT_GREEN_I,
  PRIMARY,
  TEXTCOLOR,
  WHITE,
  YELLOW,
} from '../../../Theme/Colors';
import {fonts} from '../../../Theme/AppFonts';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: BG_COLOR,
    paddingTop: Platform.OS === 'ios' ? 50 : 0,
  },
  appBarStyle:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 10,
  },
  helloText: {
    fontSize: 10,
    fontFamily: fonts.MontserratRegular,
    color: TEXTCOLOR,
    lineHeight: 12.09,
    marginTop:5,
  },
  name: {
    fontSize: 14,
    fontFamily: fonts.MontserratSemiBold,
    color: PRIMARY,
    lineHeight: 17.07,
    marginTop: 10,
  },
  roleBox: {
    height: 166,
    width: 151,
    backgroundColor: LIGHT_GREEN_I,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
  },
  roleImageStyle: {
    width: 100,
    height: 100,
  },
  roleText: {
    fontSize: 16,
    lineHeight: 19.06,
    fontFamily: fonts.MontserratBold,
    color: BLACK,
    marginTop: 10,
  },
  ourService: {
    fontSize: 16,
    fontFamily: fonts.MontserratBold,
    color: BLACK,
    marginTop: 24,
  },
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

export default styles;

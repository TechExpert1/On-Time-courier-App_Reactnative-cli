import {Platform, StyleSheet} from 'react-native';
import {BG_COLOR, GREYCOLOR_II, TEXTCOLOR, WHITE} from '../../../Theme/Colors';
import {fonts} from '../../../Theme/AppFonts';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: BG_COLOR,
    paddingTop: Platform.OS === 'ios' ? 50 : 0,
  },
  InfoBox: {
    height: 272,
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: WHITE,
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 20,
    paddingTop:30
  },
  deliveryDetail: {
    height: 57,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 10,
    backgroundColor: BG_COLOR,
    borderRadius: 12,
    marginTop:14,
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
  deliveryPartnerStyle:{
    fontSize:12,
    fontFamily:fonts.MontserratRegular,
    color:GREYCOLOR_II,
    lineHeight:17.07,
    marginLeft:4,
  },
  parcelInformationText:{
    fontSize:16,
    fontFamily:fonts.MontserratBold,
    color:TEXTCOLOR,
    lineHeight:19.5,
    
  }
});

export default styles;

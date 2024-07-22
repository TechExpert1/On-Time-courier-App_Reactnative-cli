import {StyleSheet} from 'react-native';
import {BG_COLOR, BORDERCOLOR, DARKGREYCOLOR, LIGHT_GREEN_I, TEXTCOLOR, WHITE} from '../../../../Theme/Colors';
import {fonts} from '../../../../Theme/AppFonts';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  content: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  rowCenter: {flexDirection: 'row', alignItems: 'center'},
  InfoBox: {
    marginTop: 24,
    height: 60,
    backgroundColor: LIGHT_GREEN_I,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 22,
  },
  totalCharges: {
    fontSize: 14,
    fontFamily: fonts.MontserratSemiBold,
    lineHeight: 17.07,
    color: TEXTCOLOR,
    marginLeft: 5,
  },
  paymentPrice: {
    fontSize: 14,
    fontFamily: fonts.MontserratBold,
    lineHeight: 17.07,
    color: TEXTCOLOR,
  },
  headingStyle:{
    fontSize:16,
    fontFamily:fonts.MontserratExtraBold,
    lineHeight:19.5,
    color:TEXTCOLOR,

  },
  TIPStyle:{
    fontSize:16,
    fontFamily:fonts.MontserratSemiBold,
    lineHeight:19.5,
    color:TEXTCOLOR,
    
  },
  TitleStyle:{
    fontSize:16,
    fontFamily:fonts.MontserratBold,
    lineHeight:19.5,
    color:TEXTCOLOR,
    
  },
  AvailabilityStyle:{
    fontSize:14,
    fontFamily:fonts.MontserratRegular,
    lineHeight:19.5,
    color:DARKGREYCOLOR,
    
  },
  sorryText:{
    fontSize:16,
    fontFamily:fonts.MontserratMedium,
    lineHeight:19.05,
    color:DARKGREYCOLOR,
    alignSelf:'center',
    textAlign:'center',
    marginHorizontal:20,
  },
  ft:{
    fontSize:14,
    fontFamily:fonts.MontserratRegular,
    lineHeight:17.05,
    color:TEXTCOLOR
  },
  InputTextBox:{
    flexDirection: 'row',
    width: '45%',
    alignItems: 'center',
    justifyContent:'space-between',
    borderRadius: 10,
    backgroundColor: WHITE,
    marginTop: '2%',
    height: 55,
    paddingHorizontal:20,
    borderColor: BORDERCOLOR,
  },

  container: {
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    alignItems: 'center',
  },
  divider: {
    width: '100%',
    borderWidth: 1,
    borderColor: BORDERCOLOR,
    paddingHorizontal: 20,
    marginTop: 15,
  },
  leftTextStyle: {
    fontSize: 14,
    fontFamily: fonts.MontserratMedium,
    color: DARKGREYCOLOR,
    lineHeight: 21.94,
  },
  RightTextStyle: {
    // width: 120,
    fontSize: 14,
    fontFamily: fonts.MontserratBold,
    color: TEXTCOLOR,
    lineHeight: 21.94,
  },

  modalContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
     paddingHorizontal:16,
  },
  modalContent: {
    // height:212,
    width: '100%',
    backgroundColor: WHITE,
    borderRadius: 8,
   paddingHorizontal:12,
   paddingVertical:12,
    
  },

  parcelTypeText:
  {
   fontSize:14,
   fontFamily:fonts.MontserratRegular,
   lineHeight:17.6,
    color:TEXTCOLOR,
    marginBottom:10,
    marginTop:5,
  },
  parcelTypeTextSpan:
  {
   fontSize:14,
   fontFamily:fonts.MontserratRegular,
   lineHeight:17.6,
    color:DARKGREYCOLOR,
    marginBottom:10,
  }
 
});

export default styles;

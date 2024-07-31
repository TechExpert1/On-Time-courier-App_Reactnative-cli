import {Platform, StyleSheet} from 'react-native';
import {BG_COLOR, BLACK_GREY, BORDERCOLOR, GREYCOLOR_II, LIGHT_GREEN, LIGHT_GREEN_I, PRIMARY, TEXTCOLOR, WHITE, YELLOW} from '../../../Theme/Colors';
import { fonts } from '../../../Theme/AppFonts';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: BG_COLOR,
    paddingTop: Platform.OS === 'ios' ? 50 : 0,
  },
  content: {
    width: '100%',
   
    paddingTop: 24,
  },
  content1:{
    paddingHorizontal: 20,
  },
  trackingId: {
    fontSize: 14,
    fontFamily: fonts.MontserratBold,
    color: TEXTCOLOR,
    lineHeight: 17.07,
    marginRight:12
  },
  PickUpBox: {
    // width: 109,
    height: 29,
    borderRadius: 4,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: BLACK_GREY,
    flexDirection:'row',
    paddingHorizontal:10,
  },
  PickedUpBox: {
    // width: 109,
    height: 29,
    borderRadius: 4,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: YELLOW,
    flexDirection:'row',
    paddingHorizontal:10,
  },
  DeliverBox: {
    // width: 109,
    height: 29,
    borderRadius: 4,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: PRIMARY,
    flexDirection:'row',
    paddingHorizontal:10,
    
    
  },
  PickupStatusColor:{
    fontSize:14,
    fontFamily:fonts.PoppinsRegular,
    color:WHITE,
    lineHeight:17.07,
    marginLeft:5
  },
  locationIconStyle:{
    width:16,
    height:16,
    alignSelf:'center',
    marginBottom:5,
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

  CancelOrder:{
    fontSize:14,
    fontFamily:fonts.MontserratBold,
    lineHeight:17.07,
    color:'red'
  },
  titleText:{
    fontSize:14,
    fontFamily:fonts.MontserratBold,
    lineHeight:17.07,
    color: TEXTCOLOR,
    marginTop:24,
  },
  totalCharges:{
    fontSize:14,
    fontFamily:fonts.MontserratSemiBold,
    lineHeight:17.07,
    color: TEXTCOLOR,
    
  },
  paymentPrice:{
    fontSize:14,
    fontFamily:fonts.MontserratBold,
    lineHeight:17.07,
    color: TEXTCOLOR,
  },
  status:{
    fontSize:10,
    fontFamily:fonts.MontserratSemiBold,
    lineHeight:17.07,
    color: PRIMARY,
    textAlign:'right'
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
    height:257,
    width: '100%',
    backgroundColor: WHITE,
    borderRadius: 8,
    alignItems:'center'
 
  //  paddingHorizontal:42,
  //  paddingVertical:36,
    
  },
  CanclePopupTitle:{
    fontSize:14,
    fontFamily:fonts.MontserratBold,
    lineHeight:25,
    color: TEXTCOLOR,
    textAlign:'center',
    marginTop:15,
  },
  CanclePopupText:{
    fontSize:14,
    fontFamily:fonts.MontserratMedium,
    lineHeight:25,
    color: TEXTCOLOR,
    textAlign:'center',
    marginTop:15,
  },
  CanclePopupSpanText:{
    fontSize:14,
    fontFamily:fonts.MontserratBold,
    lineHeight:25,
    color: TEXTCOLOR,
    textAlign:'center',
    marginTop:15,
  },
  NoText:{
    fontSize:16,
    // width:'50%',
    fontFamily:fonts.MontserratBold,
    lineHeight:19.05,
    color: TEXTCOLOR,
    textAlign:'center',
   
  },
  InfoBox:{
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
  StatusStyle:{
    fontSize:12,
    fontFamily:fonts.MontserratSemiBold,
    color:PRIMARY
  },
  filterBottomSheetContainer: {
    flexDirection: 'column',
    // margin: '5%',
    marginHorizontal:10,
  },
  StarIcon:{
    alignSelf:'flex-end',
    // marginTop:7,
  },
  AddReview:{
    fontSize:18,
    // width:'50%',
    fontFamily:fonts.MontserratExtraBold,
    lineHeight:21.05,
    color: PRIMARY,
    alignSelf:'center',
    textAlign:'center',
    marginTop:0,
  },
  StarStyle:{
    alignSelf:'center',
    marginTop:16,
  }
});
export default styles;

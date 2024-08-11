import {StyleSheet} from 'react-native';
import {
  BG_COLOR,
  BLACK_DARK_I,
  BLACK_LIGHT_I,
  BORDERCOLOR,
  DARKGREYCOLOR,
  GREYCOLOR_I,
  GREYCOLOR_II,
  LIGHT_GREEN,
  LIGHT_GREEN_I,
  PRIMARY,
  TEXTCOLOR,
  WHITE,
  WHITE_I,
  WHITE_III,
} from '../../Theme/Colors';
import {fonts} from '../../Theme/AppFonts';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  appBarStyle: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 10,
  },
  content: {
    width: '100%',
    paddingHorizontal: 20,
    // paddingTop: 24,
  },
  TitleName: {
    fontSize: 18,
    fontFamily: fonts.MontserratBold,
    color: TEXTCOLOR,
    lineHeight: 17.07,
    alignSelf: 'center',
  },

  ProfilePic: {
    position: 'relative',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 50,
  },
  userName: {
    fontSize: 22,
    fontFamily: fonts.MontserratBold,
    color: PRIMARY,
    lineHeight: 26.07,
    alignSelf:"center",
   marginRight:10,
    
  },
  email:{
    fontSize: 14,
    fontFamily: fonts.MontserratSemiBold,
    color: DARKGREYCOLOR,
    lineHeight: 17.07,
    alignSelf:"center",
    marginTop:8
  },
  SelectedTab: {
    // height: 50,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 17,
    paddingHorizontal: 20,
    borderRadius: 7,
    backgroundColor: LIGHT_GREEN,
  },
  UnSelectedTab: {
    // height: 50,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 17,
    paddingHorizontal: 20,
    borderRadius: 7,
    backgroundColor: GREYCOLOR_I,
  },
  TabSelectedText: {
    fontSize: 14,
    fontFamily: fonts.MontserratBold,
    lineHeight: 17.6,
    color: TEXTCOLOR,
  },
  TabUnSelectedText: {
    fontSize: 14,
    fontFamily: fonts.MontserratBold,
    lineHeight: 17.6,
    color: GREYCOLOR_II,
  },
  PersonalView:{
    marginTop:20,
  },
  TitleText:{
    fontSize: 12,
    fontFamily: fonts.MontserratSemiBold,
    lineHeight: 14.6,
    color: DARKGREYCOLOR,
  },
  InFoText:{
    fontSize: 14,
    fontFamily: fonts.MontserratBold,
    lineHeight: 17.6,
    color: TEXTCOLOR,
    marginTop:4,
  },
  RatingView:{
    marginTop:20,
    // marginBottom:300,
  },
  RatingBox:{
    flex:1,
    // height:131,
    // width: 335,
    backgroundColor:WHITE,
    borderRadius:10,
    borderColor:BORDERCOLOR,
    borderWidth:1,
    paddingHorizontal:8,
    // paddingVertical:8,
    // marginTop:16,

  },
  imageStyle:{
    width:36,
    height:36,
  },
  NameStyle:{
    fontSize: 14,
    fontFamily: fonts.MontserratBold,
    lineHeight: 17.6,
    color: BLACK_DARK_I,
    marginLeft:10,
  },
  ReviewText:{
    fontSize: 14,
    fontFamily: fonts.MontserratRegular,
    lineHeight: 17.6,
    color: BLACK_DARK_I,
    marginTop:16,
  },
  ReviewTime:{
    fontSize: 10,
    fontFamily: fonts.MontserratRegular,
    lineHeight: 17.6,
    color: BLACK_LIGHT_I,
    marginTop:6,
    
  },
  totalRating:{
    fontSize: 14,
    fontFamily: fonts.MontserratBold,
    lineHeight: 17.6,
    color: BLACK_DARK_I,
  
  },
  ratingText:{
    fontSize: 14,
    fontFamily: fonts.MontserratMedium,
    lineHeight: 17.6,
    color: TEXTCOLOR,
  
  }
});

export default styles;

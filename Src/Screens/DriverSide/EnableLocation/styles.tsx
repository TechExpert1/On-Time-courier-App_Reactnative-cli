import {StyleSheet} from 'react-native';
import {BG_COLOR, DARKGREYCOLOR, PRIMARY, TEXTCOLOR, WHITE} from '../../../Theme/Colors';
import {fonts} from '../../../Theme/AppFonts';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  content: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  enterEmail: {
    fontSize: 14,
    fontFamily: fonts.MontserratRegular,
    lineHeight: 17.05,
    color: TEXTCOLOR,
  },
  imageStyle: {
    marginTop: 10,
    height: 319,
    width: '100%',
    alignSelf: 'center',
  },
  uploadPicture: {
    fontSize: 18,
    fontFamily: fonts.MontserratExtraBold,
    color: TEXTCOLOR,

    alignSelf: 'center',
    lineHeight: 19.05,
    marginTop: 50,
  },
  locationText: {
    fontSize: 14,
    fontFamily: fonts.MontserratRegular,
    color: TEXTCOLOR,
    lineHeight: 17.26,
      marginTop:'5%',
      textAlign:'center'
    
  },
  SpanText: {
    fontSize: 14,
    fontFamily: fonts.MontserratBold,
    color: PRIMARY,
    lineHeight: 17.26,
  
  },
  notNowText:{
    fontSize: 15,
    fontFamily: fonts.MontserratRegular,
    color: DARKGREYCOLOR,
    lineHeight: 17.26,
    alignSelf:'center',
    marginTop:24,
  }
});

export default styles;

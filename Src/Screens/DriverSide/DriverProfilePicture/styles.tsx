import {StyleSheet} from 'react-native';
import {BG_COLOR, PRIMARY, TEXTCOLOR, WHITE} from '../../../Theme/Colors';
import { fonts } from '../../../Theme/AppFonts';

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
  enterEmail:{
    fontSize:14,
    fontFamily:fonts.MontserratRegular,
    lineHeight:17.05,
    color:TEXTCOLOR,
  },
  uploadSvgStyle:{
    marginTop: 100,
    alignSelf:'center'
  },
  uploadPicture:{
    fontSize:16,
    fontFamily:fonts.MontserratRegular,
    color:PRIMARY,
    textDecorationLine:'underline',
    alignSelf:'center',
    lineHeight:19.05,
    marginTop:50,
  }
});

export default styles;

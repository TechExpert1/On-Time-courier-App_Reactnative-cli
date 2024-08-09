import {Platform, StyleSheet} from 'react-native';
import {BG_COLOR, TEXTCOLOR, WHITE} from '../../../Theme/Colors';
import { fonts } from '../../../Theme/AppFonts';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: BG_COLOR,
    //  
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
  }
});

export default styles;

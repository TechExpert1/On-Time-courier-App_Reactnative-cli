import {StyleSheet} from 'react-native';
import {BG_COLOR, PRIMARY, TEXTCOLOR} from '../../../../Theme/Colors';
import { fonts } from '../../../../Theme/AppFonts';

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
  headingStyle:{
    fontSize:16,
    fontFamily:fonts.MontserratExtraBold,
    lineHeight:19.5,
    color:TEXTCOLOR,
    
  },
  TimeBox:{
    width:28,
    height:26,
    borderRadius:4,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:PRIMARY
  }
});

export default styles;

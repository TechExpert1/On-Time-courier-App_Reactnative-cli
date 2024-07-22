import {Platform, StyleSheet} from 'react-native';
import {BG_COLOR, DARKGREYCOLOR, PRIMARY, TEXTCOLOR, WHITE} from '../../../../Theme/Colors';
import { fonts } from '../../../../Theme/AppFonts';



const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: BG_COLOR,
    paddingTop: Platform.OS === 'ios' ? 50 : 0,
  },
  imageStyle:{
    flex:1,
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  content: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  PasswordRecover:{
    fontSize:20,
    fontFamily:fonts.MontserratExtraBold,
    lineHeight:27,
    color:WHITE,
    marginTop:50
  },
  NormalTextStyle:{
    fontSize:14,
    fontFamily: fonts.MontserratMedium,
    color: DARKGREYCOLOR,
    lineHeight:22,
    marginTop:12,
    textAlign:'center',
    alignSelf:'center',
    marginHorizontal:10
  },
  
  RecoverImageStyle:{
    width:166,
    height:166,
    alignSelf:'center',
    justifyContent:'center'
  }
});

export default styles;

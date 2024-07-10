import {StyleSheet} from 'react-native';
import {BG_COLOR, GREYCOLOR, GREYCOLOR_I, GREYCOLOR_II, PRIMARY, WHITE} from '../../Theme/Colors';
import {fonts} from '../../Theme/AppFonts';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  headerLogo: {
    height: 192,
    width: '100%',
  },
  content: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  choseYourRoleText: {
    fontSize: 24,
    fontFamily: fonts.MontserratExtraBold,
    color: PRIMARY,
    lineHeight: 29.26,
  },
  welcomeText: {
    fontSize: 14,
    fontFamily: fonts.MontserratRegular,
    color: GREYCOLOR,
    lineHeight: 17.26,
    marginTop:'5%'
  },
  welcomeSpanText: {
    fontSize: 14,
    fontFamily: fonts.MontserratBold,
    color: PRIMARY,
    lineHeight: 17.26,
  },
  roleBox:{
    height:166,
    width:151,
    backgroundColor:GREYCOLOR_I,
    borderRadius:10,
    alignItems:'center',
   justifyContent:'center',
   marginTop:60,
  },
  roleImageStyle:{
    width:100,
    height:100,
  },
  roleText:{
    fontSize:16,
    lineHeight:19.06,
    fontFamily:fonts.MontserratBold,
    color: GREYCOLOR_II,
  }
});

export default styles;

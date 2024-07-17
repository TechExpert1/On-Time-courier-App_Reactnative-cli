import {Platform, StyleSheet} from 'react-native';
import {
  BG_COLOR,
  DARKGREYCOLOR,
  GREYCOLOR,
  PRIMARY,
  TEXTCOLOR,
  WHITE,
} from '../../../Theme/Colors';
import {fonts} from '../../../Theme/AppFonts';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: BG_COLOR,
    paddingTop: Platform.OS === 'ios' ? 50 : 0,
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
    marginTop: '5%',
  },
  welcomeSpanText: {
    fontSize: 14,
    fontFamily: fonts.MontserratBold,
    color: PRIMARY,
    lineHeight: 17.26,
  },
  alreadyHaveAnAccount: {
    fontSize: 14,
    fontFamily: fonts.MontserratRegular,
    lineHeight: 17.07,
    paddingTop: 30,
    color: DARKGREYCOLOR,
    alignSelf: 'center',
    paddingBottom: 40,
  },
  alreadyHaveAnAccountSpan: {
    fontSize: 14,
    fontFamily: fonts.MontserratSemiBold,
    color: PRIMARY,
    lineHeight: 17.07,
    paddingTop: 30,
    alignSelf: 'center',
    paddingBottom: 40,
  },
  rememberMe: {
    fontSize: 14,
    fontFamily: fonts.MontserratRegular,
    lineHeight: 17.07,
    color: TEXTCOLOR,
    textAlign:'center',
    marginLeft:6,
  },
  forgetPassword: {
    fontSize: 16,
    fontFamily: fonts.MontserratBold,
    lineHeight: 19.07,
    color: PRIMARY,
    paddingTop: 50,
    alignSelf: 'center',
  },
  rowStyle: {
    flexDirection: 'row',
    alignItems:'center',
    paddingTop: 20,
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import {
  BG_COLOR,
  DARKGREYCOLOR,
  GREYCOLOR,
  PRIMARY,
  WHITE,
} from '../../../Theme/Colors';
import {fonts} from '../../../Theme/AppFonts';

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
    fontWeight: '600',
    fontFamily: fonts.MontserratBold,
    color: PRIMARY,
    lineHeight: 17.07,
    paddingTop: 30,
    alignSelf: 'center',
    paddingBottom: 40,
  },
});

export default styles;

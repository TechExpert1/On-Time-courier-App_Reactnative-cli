import {Platform, StyleSheet} from 'react-native';
import {
  BG_COLOR,
  DARKGREYCOLOR,
  PRIMARY,
  TEXTCOLOR,
  WHITE,
} from '../../../Theme/Colors';
import {fonts} from '../../../Theme/AppFonts';
import {heightPercentageToDP} from 'react-native-responsive-screen';

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
  resendButton: {
    fontSize: 14,
    fontFamily: fonts.MontserratRegular,
    color: DARKGREYCOLOR,
    lineHeight: 17.05,
    marginTop: 20,
    alignSelf: 'center',
  },
  resendButtonSpan: {
    fontSize: 14,
    fontFamily: fonts.MontserratBold,
    color: PRIMARY,
    lineHeight: 17.05,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: heightPercentageToDP(20),
    paddingBottom: 50,
    paddingHorizontal: 20,
  },
});

export default styles;

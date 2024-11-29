import {StyleSheet} from 'react-native';
import {COLORS} from '../../../Theme/Index';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {fonts} from '../../../Theme/AppFonts';
import {BORDERCOLOR} from '../../../Theme/Colors';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.BG_COLOR,
  },
  content: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: heightPercentageToDP(4),
  },
  accountText: {
    fontSize: 14,
    fontFamily: fonts.MontserratExtraBold,
    color: COLORS.TEXTCOLOR,
    lineHeight: 17.6,
  },
  AccountNumber: {
    fontSize: 22,
    fontFamily: fonts.MontserratExtraBold,
    color: COLORS.PRIMARY,
    letterSpacing: 2,
    lineHeight: 27,
    marginTop: heightPercentageToDP(1),
  },
  RemoveStrip: {
    backgroundColor: 'rgba(241, 222, 222, 1)',
    paddingVertical: heightPercentageToDP(1),
    borderRadius: 4,
    alignItems: 'center',
    width: 110,
    alignSelf: 'center',
    marginTop: heightPercentageToDP(1.5),
  },
  removeText: {
    fontSize: 12,
    fontFamily: fonts.MontserratSemiBold,
    color: COLORS.REDCOLORI,
    lineHeight: 14,
  },
  divider: {
    width: '100%',
    borderWidth: 1,
    borderColor: BORDERCOLOR,
    marginTop: 15,
  },
  normalText: {
    fontSize: 12,
    fontFamily: fonts.MontserratRegular,
    color: COLORS.DARKGREYCOLOR,
    lineHeight: 14,
  },
  heading: {
    fontSize: 14,
    fontFamily: fonts.MontserratBold,
    color: COLORS.TEXTCOLOR,
    lineHeight: 17.6,
  },
  subheading: {
    fontSize: 14,
    fontFamily: fonts.MontserratMedium,
    color: COLORS.TEXTCOLOR,
    lineHeight: 17.6,
    marginTop: heightPercentageToDP(1),
  },
  footer: {
    // flex: 1,
    // justifyContent: 'flex-end',
    marginTop: heightPercentageToDP(40),
    paddingBottom: 50,
  },
});
export default styles;

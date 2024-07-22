import {StyleSheet} from 'react-native';
import {
  BG_COLOR,
  BORDERCOLOR,
  DARKGREYCOLOR,
  GREYCOLOR_II,
  LIGHT_GREEN_I,
  PRIMARY,
  TEXTCOLOR,
  WHITE,
  WHITE_I,
  WHITE_III,
} from '../../Theme/Colors';
import {fonts} from '../../Theme/AppFonts';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  appBarStyle: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 10,
  },
  content: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  TitleName: {
    fontSize: 18,
    fontFamily: fonts.MontserratBold,
    color: TEXTCOLOR,
    lineHeight: 17.07,
    alignSelf: 'center',
  },
  ProfilePic: {
    position: 'relative',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 26,
  },
 
  userName: {
    fontSize: 22,
    fontFamily: fonts.MontserratBold,
    color: PRIMARY,
    lineHeight: 26.07,
    alignSelf: 'center',
    marginTop: 14,
  },
  email: {
    fontSize: 14,
    fontFamily: fonts.MontserratSemiBold,
    color: DARKGREYCOLOR,
    lineHeight: 17.07,
    alignSelf: 'center',
    marginTop: 8,
  },
});

export default styles;

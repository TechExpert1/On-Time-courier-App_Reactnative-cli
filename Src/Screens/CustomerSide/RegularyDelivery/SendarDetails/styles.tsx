import {Platform, StyleSheet} from 'react-native';
import {
  BG_COLOR,
  BORDERCOLOR,
  DARKGREYCOLOR,
  PRIMARY,
  TEXTCOLOR,
  WHITE,
} from '../../../../Theme/Colors';
import {fonts} from '../../../../Theme/AppFonts';

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
  headingStyle: {
    fontSize: 16,
    fontFamily: fonts.MontserratExtraBold,
    lineHeight: 19.5,
    color: TEXTCOLOR,
  },
  TimeBox: {
    width: 28,
    height: 26,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PRIMARY,
  },
  modalContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 16,
    // borderRadius:20,
  },
  dashboardView1: {
    height: 20,
    backgroundColor: WHITE,

    alignItems: 'center',
    marginBottom: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  InputTextBox: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: WHITE,
    marginTop: '2%',
    height: 55,
    paddingHorizontal: 20,
    borderColor: BORDERCOLOR,
  },
  SelectedTime: {
    height: 28,
    width: 28,
    backgroundColor: PRIMARY,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  UnSelectedTime: {
    height: 28,
    width: 28,
    backgroundColor: WHITE,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  SelectedTimeText: {
    fontSize: 12,
    fontFamily: fonts.MontserratRegular,
    lineHeight: 14.63,
    color: WHITE,
  },
  UnSelectedTimeText: {
    fontSize: 12,
    fontFamily: fonts.MontserratRegular,
    lineHeight: 14.63,
    color: DARKGREYCOLOR,
  },
});

export default styles;

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
} from '../../../Theme/Colors';
import {fonts} from '../../../Theme/AppFonts';

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
    marginBottom:20,
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
  modalContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 16,
  },
  modalContent: {
    // height:212,
    width: '100%',
    backgroundColor: WHITE,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  imageStyles: {
    height: 44,
    width: 66,
    marginVertical: 18,
    marginRight: 10,
  },
  parcelTypeText: {
    fontSize: 14,
    fontFamily: fonts.MontserratSemiBold,
    lineHeight: 17.6,
    color: TEXTCOLOR,
    marginBottom: 10,
    marginTop: 5,
  },
  divider: {
    width: '100%',
    borderWidth: 1,
    borderColor: BORDERCOLOR,
    paddingHorizontal: 20,
    // marginTop: 15,
  },
  IdContainer: {
    width: '48%',
    height: 127,
    backgroundColor: WHITE,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: BORDERCOLOR,
    marginVertical: 10,
    // alignItems:'center'
  },
  idCardImageStyle: {
    width: 120,
    height: 77,
    marginTop: 11,
    alignSelf: 'center',
  },
  FrontBack: {
    fontSize: 14,
    fontFamily: fonts.MontserratRegular,
    lineHeight: 17.6,
    color: DARKGREYCOLOR,
    alignSelf: 'center',
    // marginRight:30,
  },
  InfoBox: {
    height: 92,
    backgroundColor: 'rgba(232, 232, 232, 1)',
    flexDirection: 'row',
    paddingHorizontal: 6,
    borderRadius:10,
    paddingVertical:10,
  },
});

export default styles;

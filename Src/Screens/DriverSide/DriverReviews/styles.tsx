import {StyleSheet} from 'react-native';
import {
  BG_COLOR,
  BLACK_DARK_I,
  BLACK_LIGHT_I,
  BORDERCOLOR,
  TEXTCOLOR,
  WHITE,
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
    // paddingTop: 24,
  },
  TitleName: {
    fontSize: 18,
    fontFamily: fonts.MontserratBold,
    color: TEXTCOLOR,
    lineHeight: 17.07,
    alignSelf: 'center',
  },
  RatingView: {
    marginTop: 20,
    // paddingBottom:300,
  },
  RatingBox: {
    // height:131,
    // width: 335,
    backgroundColor: WHITE,
    borderRadius: 10,
    borderColor: BORDERCOLOR,
    borderWidth: 1,
    paddingHorizontal: 8,
    // paddingVertical:8,
    marginTop: 16,
  },
  imageStyle: {
    width: 36,
    height: 36,
  },
  NameStyle: {
    fontSize: 14,
    fontFamily: fonts.MontserratBold,
    lineHeight: 17.6,
    color: BLACK_DARK_I,
    marginLeft: 10,
  },
  ReviewText: {
    fontSize: 14,
    fontFamily: fonts.MontserratRegular,
    lineHeight: 17.6,
    color: BLACK_DARK_I,
    marginTop: 16,
  },
  ReviewTime: {
    fontSize: 10,
    fontFamily: fonts.MontserratRegular,
    lineHeight: 17.6,
    color: BLACK_LIGHT_I,
    marginTop: 6,
  },
  totalRating: {
    fontSize: 14,
    fontFamily: fonts.MontserratBold,
    lineHeight: 17.6,
    color: BLACK_DARK_I,
  },
  ratingText: {
    fontSize: 14,
    fontFamily: fonts.MontserratRegular,
    lineHeight: 17.6,
    color: BLACK_DARK_I,
  },
});

export default styles;

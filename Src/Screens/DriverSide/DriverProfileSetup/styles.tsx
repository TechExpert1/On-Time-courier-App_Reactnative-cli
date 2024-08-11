import {StyleSheet} from 'react-native';
import {
  BG_COLOR,
  BORDERCOLOR,
  DARKGREYCOLOR,
  PRIMARY,
  TEXTCOLOR,
  WHITE,
} from '../../../Theme/Colors';
import {fonts} from '../../../Theme/AppFonts';

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
  uploadSvgStyle: {
    marginTop: 100,
    alignSelf: 'center',
  },
  uploadPicture: {
    fontSize: 16,
    fontFamily: fonts.MontserratRegular,
    color: PRIMARY,
    textDecorationLine: 'underline',
    alignSelf: 'center',
    lineHeight: 19.05,
    marginTop: 50,
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
  imageStyles: {
    height: 44,
    width: 66,
    marginVertical: 18,
    marginRight: 10,
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
    alignSelf:'center'
  },
  FrontBack: {
    fontSize: 14,
    fontFamily: fonts.MontserratRegular,
    lineHeight: 17.6,
    color: DARKGREYCOLOR,
    alignSelf: 'center',
    // marginRight:30,
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: WHITE,
    marginTop: '2%',
    height: 55,
    borderColor: BORDERCOLOR,
    // justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});

export default styles;

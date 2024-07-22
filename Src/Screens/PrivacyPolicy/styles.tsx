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
  
  contentText: {
    fontSize: 14,
    fontFamily: fonts.MontserratRegular,
    color: TEXTCOLOR,
    lineHeight: 17.07,
    marginTop: 20,
  },
  ImageStyle:{
    width:118,
    height:100,
    alignSelf:'center',
    marginTop:35
  }
});

export default styles;

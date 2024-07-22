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
    alignSelf: 'center',
    marginTop:40,
  },

  passwordToContinue: {
    fontSize: 14,
    fontFamily: fonts.MontserratRegular,
    color: TEXTCOLOR,
    lineHeight: 17.07,
  
    marginTop:40,
  },
  modalContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal:16,
  },
  modalContent: {
    height:192,
    width: '100%',
    backgroundColor: WHITE,
    borderRadius: 8,
    alignItems:'center'
    
  },
  CanclePopupText:{
    fontSize:14,
    fontFamily:fonts.MontserratMedium,
    lineHeight:25,
    color: TEXTCOLOR,
    textAlign:'center',
    marginTop:15,
  },
  CanclePopupTitle:{
    fontSize:14,
    fontFamily:fonts.MontserratBold,
    lineHeight:25,
    color: TEXTCOLOR,
    textAlign:'center',
    marginTop:15,
  },
  NoText:{
    fontSize:16,
    // width:'50%',
    fontFamily:fonts.MontserratBold,
    lineHeight:19.05,
    color: TEXTCOLOR,
    textAlign:'center',
   
  },

});

export default styles;

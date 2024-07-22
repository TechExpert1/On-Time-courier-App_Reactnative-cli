import {StyleSheet} from 'react-native';
import {
  BG_COLOR,
  BLACK,
  BORDERCOLOR,
  DARKGREYCOLOR,
  GREYCOLOR_I,
  GREYCOLOR_II,
  LIGHT_GREEN,
  LIGHT_GREEN_I,
  PRIMARY,
  TEXTCOLOR,
  WHITE,
  YELLOW,
} from '../../Theme/Colors';
import {fonts} from '../../Theme/AppFonts';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  appBarStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 10,
  },
 
  ScreeName: {
    fontSize: 18,
    fontFamily: fonts.MontserratExtraBold,
    color: PRIMARY,
    lineHeight: 17.07,
    marginTop: 10,
  },

  userName: {
    fontSize: 14,
    fontFamily: fonts.MontserratBold,
    color: TEXTCOLOR,
    lineHeight: 17.07,
    
  },
  ImageStyle:{width: 50, height: 50},

  MessageText: {
    fontSize: 12,
    fontFamily: fonts.MontserratRegular,
    lineHeight: 17.6,
    color: DARKGREYCOLOR,
  },
  TimeText: {
    fontSize: 11,
    fontFamily: fonts.MontserratRegular,
    lineHeight: 13,
    color: GREYCOLOR_II,
  },
  ChatBox:{
    height: 70,
    borderRadius: 10,
    borderColor: BORDERCOLOR,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical:10,
    paddingHorizontal:5,
    marginTop:14
  },
  MessageContentContainer:{
    flex:1,
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
   }
});

export default styles;

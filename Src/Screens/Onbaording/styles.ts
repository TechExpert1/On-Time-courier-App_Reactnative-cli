import {StyleSheet} from 'react-native';
import {GREYCOLOR, TEXTCOLOR, WHITE} from '../../Theme/Colors';
import {fonts} from '../../Theme/AppFonts';

export const styles = StyleSheet.create({
  container: {
    // ...commonStyles.mainContainer,
    flex: 1,
    width: '100%',
  },
  Slide: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    height: '72%',
    width: '100%',
  },
  Image: {
    height: '100%',
    width: '100%',
    borderWidth: 1,
  },
  BottomCardContainer: {
    height: '40%',
    backgroundColor: TEXTCOLOR,
    width: '100%',
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    
  },
  TitleText: {
    fontSize: 22,
    textAlign: 'center',
    fontFamily: fonts.MontserratBold,
    marginTop: '8%',
    color: WHITE,
    paddingHorizontal:40,
  },
  Description: {
    fontSize: 14,
    lineHeight: 17.07,
    textAlign: 'center',
    marginTop: '5%',
    fontFamily: fonts.MontserratSemiBold,
    color: GREYCOLOR,
    paddingHorizontal:29,
  },

  // PaginationContainer: {
  //     flexDirection: 'row',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     marginTop: 4,
  // },
  // PaginationDot: {
  //     width: 6,
  //     height: 6,
  //     borderRadius: 6 / 2,
  //     backgroundColor: theme.colors.lightgrey,
  //     marginHorizontal: 2,
  //     margin:10
  // },
  // ActivePaginationDot: {
  //     backgroundColor: theme.colors.blue,
  //     width: 22,
  //     height: 8,
  //     borderRadius: 8 / 2,
  // },
  Button: {
    width: '92%',
    marginTop: 3,
  },
  LastButton: {
    width: '92%',
    marginTop: 5.5,
  },
  ButtonLabel: {
    fontSize: 18,
  },
  // ContinueContainer:{
  //     color: theme.colors.black,
  //     width:'90%',
  //     height:54,
  //     alignItems:'center',
  //     justifyContent:'center',
  //     backgroundColor: '#00CCFF',
  //     borderRadius:16,
  //     marginTop:10
  // },
  // ContinueText:{
  //     fontSize:18,
  //     fontWeight:'600',
  //     color: theme.colors.white
  // },
  Skip: {
    color: TEXTCOLOR,
    fontSize: 16,
    fontFamily: fonts.PoppinsRegular,
    lineHeight: 24,
    paddingTop: 20,
    right: 20,
    position: 'absolute',
  },
});

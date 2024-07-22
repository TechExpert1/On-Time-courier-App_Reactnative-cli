import { StyleSheet } from "react-native";
import { BG_COLOR, DARKGREYCOLOR, PRIMARY, TEXTCOLOR } from "../../../Theme/Colors";
import { fonts } from "../../../Theme/AppFonts";

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: BG_COLOR,
        paddingHorizontal: 20,
      },
      appBarStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginHorizontal: 10,
      },
      helloText: {
        fontSize: 10,
        fontFamily: fonts.MontserratRegular,
        color: TEXTCOLOR,
        lineHeight: 12.09,
        marginTop:5,
      },
      name: {
        fontSize: 14,
        fontFamily: fonts.MontserratSemiBold,
        color: PRIMARY,
        lineHeight: 17.07,
        marginTop: 10,
      },
      imageStyle:{
        width:170,
        height:170,
        marginBottom:35
      },
      ONTIMECOURIER:{
        fontSize:16,
        fontFamily:fonts.MontserratExtraBold,
        color:PRIMARY,
        lineHeight:23,
      },
      contentText:{
        fontSize:14,
        fontFamily:fonts.MontserratRegular,
        color:DARKGREYCOLOR,
        lineHeight:23,
        textAlign:"center",
        marginHorizontal:23,
      }
})

export default styles;
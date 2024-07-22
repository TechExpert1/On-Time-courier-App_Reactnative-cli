import { StyleSheet } from "react-native";
import { BG_COLOR, DARKGREYCOLOR, GREYCOLOR_I, GREYCOLOR_II, LIGHT_GREEN, LIGHT_GREEN_I, PRIMARY, TEXTCOLOR } from "../../../Theme/Colors";
import { fonts } from "../../../Theme/AppFonts";

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: BG_COLOR,
        // paddingHorizontal: 20,
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
      SelectedTab: {
        // height: 50,
        // width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 17,
        paddingHorizontal: 20,
        borderRadius: 7,
        backgroundColor: LIGHT_GREEN,
      },
      UnSelectedTab: {
        // height: 50,
        // width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 17,
        paddingHorizontal: 20,
        borderRadius: 7,
        backgroundColor: GREYCOLOR_I,
      },
      TabSelectedText: {
        fontSize: 14,
        fontFamily: fonts.MontserratSemiBold,
        lineHeight: 17.6,
        color: TEXTCOLOR,
      },
      TabUnSelectedText: {
        fontSize: 14,
        fontFamily: fonts.MontserratSemiBold,
        lineHeight: 17.6,
        color: GREYCOLOR_II,
      },
})

export default styles;
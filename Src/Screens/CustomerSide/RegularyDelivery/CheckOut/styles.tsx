import { StyleSheet } from "react-native";
import { BG_COLOR, BORDERCOLOR, DARKGREYCOLOR, TEXTCOLOR, WHITE } from "../../../../Theme/Colors";
import { fonts } from "../../../../Theme/AppFonts";


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
      headingStyle:{
        fontSize:16,
        fontFamily:fonts.MontserratExtraBold,
        lineHeight:19.5,
        color:TEXTCOLOR,
    
      },
      heading1Style:{
        fontSize:14,
        fontFamily:fonts.MontserratBold,
        lineHeight:19.5,
        color:TEXTCOLOR,
    
      },
      headingSemiStyle:{
        fontSize:14,
        fontFamily:fonts.MontserratSemiBold,
        lineHeight:19.5,
        color:DARKGREYCOLOR,
    
      },
      divider: {
        width: '100%',
        borderWidth: 1,
        borderColor: BORDERCOLOR,
        paddingHorizontal: 20,
        marginTop: 15,
      },
      FromTo:{
        fontSize:14,
        fontFamily:fonts.MontserratRegular,
        lineHeight:19.5,
        color:DARKGREYCOLOR,
        marginBottom:10
      },
      AddressInfo:{
        fontSize:14,
        fontFamily:fonts.MontserratRegular,
        lineHeight:19.5,
        color:TEXTCOLOR,
        marginBottom:10
      },
      UserDetailBox:{
        // height: 198,
        paddingHorizontal: 12,
        paddingVertical: 12,
        marginVertical:20,
        backgroundColor: WHITE,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: BORDERCOLOR,
      },
      TotalCharges:{
        fontSize:14,
        fontFamily:fonts.MontserratSemiBold,
        lineHeight:19.5,
        color:DARKGREYCOLOR,
        
      },
      TotalChargesPayment:{
        fontSize:14,
        fontFamily:fonts.MontserratBold,
        lineHeight:19.5,
        color:TEXTCOLOR,
        
      },
})


export default styles;
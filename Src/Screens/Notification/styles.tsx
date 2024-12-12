import { StyleSheet } from "react-native";
import { BG_COLOR, BORDERCOLOR, DARKGREYCOLOR, GREYCOLOR_II, LIGHT_GREEN_I, PRIMARY, TEXTCOLOR, WHITE, WHITE_I, WHITE_III } from "../../Theme/Colors";
import { fonts } from "../../Theme/AppFonts";



const styles = StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: BG_COLOR,
        
    },
    appBarStyle: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        paddingTop: 20,
        marginHorizontal: 10,
      
      },
      TitleName: {
       
        fontSize: 18,
        fontFamily: fonts.MontserratBold,
        color: TEXTCOLOR,
        lineHeight: 21.94,
        alignSelf:"center",
        
      },

      NotifictionSelected:{
        height: 64,
        borderRadius: 10,
        borderColor: PRIMARY,
        borderWidth: 1,
        backgroundColor:LIGHT_GREEN_I,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical:12,
        paddingHorizontal:15,
        marginTop:14
      },

      NotifictionUnSelected:{
        height: 64,
        borderRadius: 10,
        borderColor: BORDERCOLOR,
        borderWidth: 1,
        backgroundColor:WHITE_I,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical:12,
        paddingHorizontal:15,
        marginTop:14
      },


      MessageContentContainer:{
        flex:1,
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center',
       },
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
      NotificationTitle: {
        fontSize: 14,
        fontFamily: fonts.MontserratBold,
        color: TEXTCOLOR,
        lineHeight: 17.07,
        
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
        // height:257,
        width: '100%',
        backgroundColor: WHITE,
        borderRadius: 8,
        alignItems:'center',
        paddingVertical:20,
      //  paddingHorizontal:42,
   
        
      },
      CanclePopupTitle:{
        fontSize:14,
        fontFamily:fonts.MontserratBold,
        lineHeight:25,
        color: TEXTCOLOR,
        textAlign:'center',
        marginTop:15,
      },
      CanclePopupText:{
        width:'80%',
        fontSize:14,
        fontFamily:fonts.MontserratMedium,
        lineHeight:25,
        color: TEXTCOLOR,
        textAlign:'center',
        marginTop:15,
        marginBottom:10,
      },
      CanclePopupSpanText:{
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


})

export default styles
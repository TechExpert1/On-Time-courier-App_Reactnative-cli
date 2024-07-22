import { StyleSheet } from "react-native";
import { BG_COLOR, BORDERCOLOR, DARKGREYCOLOR, DARKGRYCOLOR_I, PRIMARY, TEXTCOLOR, WHITE, WHITE_III } from "../../Theme/Colors";
import { fonts } from "../../Theme/AppFonts";



const styles = StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: BG_COLOR,
        
    },
    appBarStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginHorizontal: 10,
      },
      userName: {
        fontSize: 14,
        fontFamily: fonts.MontserratBold,
        color: TEXTCOLOR,
        lineHeight: 17.07,
        
      },
      ImageStyle:{width:40, height:40, marginHorizontal: 12},
      UserInfoContainer:{marginLeft: 10, flexDirection:'row', alignContent:'center', alignItems:'center'},
      content: {
        flex:1,
        flexDirection: "column",
        position: 'relative',
    },
    messageSendBox: {
        alignContent: "center",
        alignSelf: "flex-end",
        backgroundColor: PRIMARY,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderTopRightRadius: 32,
        marginRight:24,
        marginTop:20,
    },
    messageText: {
        fontSize:14,
        // alignItems: "center",
        // textAlign: "center",
        color: WHITE,
        fontFamily: fonts.MontserratSemiBold,
        // marginTop:20,
        paddingVertical:10,
        paddingHorizontal: 12
    },
    messageTime: {
        alignContent: "center",
        alignSelf: "flex-end",
        // paddingTop: hpToDp("1%"),
        // paddingBottom: hpToDp("1%"),
        // marginRight:wpToDp("5%"),
        marginRight:10,
        color: WHITE_III
    },
    InputTextBox:{
        flexDirection: 'row',
        width: '80%',
        alignItems: 'center',
        justifyContent:'space-between',
        borderRadius: 10,
        backgroundColor: WHITE,
        borderWidth:1,
        // marginTop: '2%',
        height: 50,
        paddingHorizontal:10,
        marginBottom:30,
        // marginLeft:20,
        borderColor: BORDERCOLOR,
      },
      TodayText: {
        fontSize:14,
        
        color: DARKGRYCOLOR_I,
        fontFamily: fonts.PoppinsRegular,
        marginTop:20,
       alignSelf:"center"
    },
    text: {
        fontSize: 16,
        fontWeight: '400',
      
        color: TEXTCOLOR,
        // borderWidth:1
      },
})

export default styles
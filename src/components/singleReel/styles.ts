import { StyleSheet,Platform } from "react-native";
import { vh, vw, SCREEN_WIDTH, SCREEN_HEIGHT } from "../../theme/dimensions";
import { colors } from "../../theme";


const styles = StyleSheet.create({
    mainContainer: {
    height: SCREEN_HEIGHT,
    bottom:vh(55),
    },
    container: {
      width: SCREEN_WIDTH,
      height: '85%',
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: Platform.OS === "android" ? vh(120):vh(150), 
    },
    reelContainer: {
      width: '100%',
      height: '100%',
      position: 'absolute',
    },
    reels: {
      width: '100%',
      height: '100%',
      position: 'absolute',

    },
    back:{
      height: vh(15),
      width: vh(15 ),
      tintColor: colors.white,
    },
    details: {
      position: 'absolute',
      alignItems: 'center',
      flexDirection:'row',
      zIndex:1,
      top:Platform.OS === "android" ? vh(10) :vh(40),
      paddingHorizontal:vh(20),
      gap:vh(10)
    },
    userDetails: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    profileImg: {
      width: vw(40),
      height: vw(40),
      borderRadius: 50,
      backgroundColor: 'white',
      margin: vw(10),
    },
    img: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      borderRadius: 50,
    
    },
    followbutton:{
      borderWidth:1, borderRadius:5, borderColor:colors.white, paddingHorizontal:vh(10), paddingVertical:vh(5)
    },
    userName: {
      color: 'white',
      fontSize: vh(12),
      fontWeight: '600',
      marginBottom:vh(2)
    },
    followers: {
      color: 'white',
      fontSize: vh(10),
      fontWeight: '400',
    },
    sound: {
      position: 'absolute',
      left: 0,
      bottom: vh(175),
      marginHorizontal: vw(10),
      borderRadius: 20,
      padding: vh(5),
      backgroundColor: colors.transparent,
      borderColor: colors.transparent,
    },
    soundimg: {
      height: vw(20),
      width: vw(20),
      resizeMode: 'contain',
      tintColor: colors.white,
    },
    iconsContainer: {
      position: 'absolute',
      bottom: vh(180),
      right: 0,
      paddingHorizontal: vh(5),
    },
    iconview: {
      marginHorizontal: vw(10),
      borderRadius: 20,
      padding: vh(5),
      backgroundColor: colors.transparent,
      borderColor: colors.transparent,
      marginTop: vh(10),
      alignItems: 'center',
      justifyContent: 'center',
    },
    likeImg: {
      height: vw(20),
      width: vw(20),
      tintColor: colors.white,
    },
    likeCounts: {
      color: 'white',
      paddingHorizontal: vh(10),
    },
  });
 
export default styles;
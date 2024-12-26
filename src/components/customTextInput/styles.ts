import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import { vh, SCREEN_WIDTH } from '../../theme/dimensions';



const styles = StyleSheet.create({
   space:{
      flex:1
    },
    input: {
      height: vh(50),
      borderColor: colors.platinum,
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: vh(10),
      color: colors.black,
      backgroundColor: colors.white,
      flexDirection: 'row',
      alignItems: 'center',
      marginTop:vh(10),
    },
    error: {
      color: colors.zeptored,
      fontSize:vh(14),
      height: vh(18),
    },
    noerror:{
      height:SCREEN_WIDTH/25
    },
    clock: {
      height: vh(30),
      width: vh(25),
      resizeMode: 'contain',
      marginHorizontal: vh(5),
      tintColor: colors.grey,
      marginRight:vh(10)
    },
  });

  export default styles

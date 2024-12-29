import { StyleSheet } from "react-native";
import {colors} from '../../theme';
import { vh } from '../../theme/dimensions';

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.textGrey,
      borderRadius: 30,
      paddingHorizontal: vh(10),
       margin:vh(10),
       paddingVertical:vh(6), 
   
    },
    input: {
      flex: 1,
      fontSize: vh(15),
      color: colors.black,
    },
    icon: {
      height: vh(20),
      width: vh(20),
      tintColor: colors.textGrey,
    },
    rightIcon: {
      height: vh(20),
      width: vh(20),
      tintColor: colors.textGrey,
      marginRight:vh(10)
    },
  });

export default styles;
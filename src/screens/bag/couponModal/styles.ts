import { StyleSheet } from "react-native";
import { colors } from "../../../theme";
import { vh } from "../../../theme/dimensions";

const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: colors.transparent,
    },
    modalContainer: {
      backgroundColor: colors.white,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: vh(15),
      position: 'absolute',
      bottom: 0,
      width: '100%',
    },
    title: {
      fontSize: vh(18),
      fontWeight: '600',
      marginBottom:vh(10),
      textAlign: 'center',
    },
    couponItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: vh(10),
      borderBottomWidth: 1,
      borderColor: colors.platinum,
    },
    couponCode: {
      fontSize: vh(14),
      fontWeight: '500',
    },
    couponDescription: {
      fontSize: vh(12),
      color: colors.charcol
    },
    couponButton: {
      paddingVertical: 5,
      width:vh(100)
     
    },
    couponButtonText: {
      fontSize: vh(14),
      fontWeight: '600',
    },
   
  });
  
export default styles;
  
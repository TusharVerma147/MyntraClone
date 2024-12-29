import { StyleSheet } from "react-native";
import { colors } from "../../theme";
import { vh } from "../../theme/dimensions";

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: vh(20),
      paddingHorizontal: 16,
    },
    step: {
      height: vh(8),
      flex: 1,
      borderRadius: 4,
      backgroundColor: colors.greyish,
      marginHorizontal: 5,
    },
    activeStep: {
      backgroundColor: colors.zeptored,
    },
    stepText: {
      marginLeft: 10,
      fontSize: 12,
      color:colors.textGrey,
    },
  });


 export default styles; 
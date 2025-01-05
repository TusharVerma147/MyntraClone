import { StyleSheet } from "react-native";
import { colors } from "../../theme";
import { vh } from "../../theme/dimensions";

const styles = StyleSheet.create({
    orderItem: {
      backgroundColor: colors.white,
      padding: vh(15),
      marginBottom: vh(10),
      borderRadius: 8,
      shadowColor: colors.zeptored,
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      marginHorizontal:vh(20),
      borderColor:colors.zeptored,
      borderWidth:1
    },
    idText:{
      color:colors.zeptored
    },
  orderId:{
      fontSize:vh(18),
      fontWeight:'500',
      marginBottom: vh(5),
      color:colors.charcol
  },
    orderDate: {
      fontSize: vh(16),
      marginBottom: vh(5),
      fontWeight:'600',
      color:colors.charcol,
      letterSpacing:1
    },
    activity:{
      marginTop:vh(20)
    },
    noOrderText:{
      textAlign: 'center', fontSize: vh(18), marginTop: vh(20),
      
    }
  });
  
  export default styles;
  
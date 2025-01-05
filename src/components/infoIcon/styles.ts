import { StyleSheet } from "react-native";
import { vh } from "../../theme/dimensions";
import { colors } from "../../theme";


const styles = StyleSheet.create({
   
      iconview: {
        alignItems: 'center',
        maxWidth: '20%', 
      },
      icon: {
        height: vh(40),
        width: vh(40),
       backgroundColor:colors.orange,
       padding:vh(3),
       borderRadius:8
      },
      infotext: {
        fontSize: vh(10),
        textAlign: 'center',  
        flexWrap: 'wrap',     
        lineHeight: vh(14),  
        fontWeight:'500' 
      },

})


export default styles;
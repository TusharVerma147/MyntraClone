import { StyleSheet } from "react-native";
import { vh } from "../../theme/dimensions";
import { colors } from "../../theme";


const styles = StyleSheet.create({
  
    subcont:{
        paddingHorizontal:vh(20)
    },
    terms:{
        fontSize:vh(18),
        color:colors.charcol,
        letterSpacing:0.5,
        marginVertical:vh(20),
    },
    termsText:{
        color:colors.textGrey,
        letterSpacing:0.2,
        paddingVertical:vh(10)
    }

});


export default styles;
import { StyleSheet } from "react-native";
import { SCREEN_WIDTH, vh } from '../../theme/dimensions';


const styles = StyleSheet.create({

    banner:{
        width: SCREEN_WIDTH - 50,
        backgroundColor: 'blue',
        resizeMode: 'stretch',
        height: vh(170),
        alignSelf: 'center',
        borderRadius: 20,
        marginVertical: vh(15),
      }
})

export default styles;
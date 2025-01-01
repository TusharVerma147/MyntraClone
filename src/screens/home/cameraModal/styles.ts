import { StyleSheet} from 'react-native';
import { colors } from '../../../theme';
import { vh } from '../../../theme/dimensions';



const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    container: {
      width: '95%',
      backgroundColor: colors.white,
      borderRadius: 10,
      paddingHorizontal: vh(20),
      paddingVertical:vh(10)
    },
    title: {
      fontSize: vh(15),
      color:colors.textGrey,  
    },
    option: {
      width: '100%',
      paddingVertical: vh(10),
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: colors.platinum,
      flexDirection:'row',
      marginTop:vh(10)
    },
    backicon: {height: vh(20), width: vh(20), tintColor:colors.textinput,},
    optionText: {
      fontSize: vh(16),
      color: colors.textinput,
      marginHorizontal:vh(5),
      fontWeight:'700'   
    },
    optionSubText: {
      fontSize: vh(14),
      color: colors.textGrey,
      marginHorizontal:vh(5)   
    },
  });


export default styles
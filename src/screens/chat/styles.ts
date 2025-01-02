import {  StyleSheet,  } from 'react-native';
import colors from '../../theme/colors';
import { vh } from '../../theme/dimensions';

const styles = StyleSheet.create({
    
    cont:{
        padding:vh(20)
    },
    scrollViewContent: {
      paddingBottom: 20, 
    },
    messageContainer: {
      marginVertical: 5,
      maxWidth: '80%', 
      padding: vh(10),
      borderRadius: 12,
    },
    sender: {
      alignSelf: 'flex-end', 
      backgroundColor: colors.textGrey, 
    },
    receiver: {
      alignSelf: 'flex-start', 
      backgroundColor: colors.greyish 
    },
    message: {
      fontSize: vh(14),
      color: colors.black, 
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: vh(10),
      padding:vh(10),
    },
    textInput: {
      flex: 1,
      paddingVertical:vh(10),
      borderRadius: 25,
      borderWidth: 1,
      borderColor: colors.textGrey,
      paddingLeft: 15,
      marginRight: 10,
    },
  });

  export default styles;
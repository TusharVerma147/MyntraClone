import {StyleSheet} from 'react-native';
import { vh, SCREEN_WIDTH } from '../../theme/dimensions';
import { colors } from '../../theme';


const styles = StyleSheet.create({
    productview: {
      flexDirection: 'row',
      width: SCREEN_WIDTH,
      justifyContent: 'space-between',
      paddingHorizontal: vh(20),
      marginTop: vh(10),
      paddingVertical: vh(10),
      backgroundColor: colors.white,
      alignItems:'center'
    },
    producttext: {
      fontSize: vh(18),
      fontWeight: '600',
      color:colors.charcol
    },
    desview: {
      width: SCREEN_WIDTH,
      paddingHorizontal: vh(20),
      backgroundColor: colors.white,
      paddingVertical: vh(10),
    },

    questionDescription: {
      color:colors.charcol,
      fontSize: vh(17),
      fontWeight: '500',
      letterSpacing:0.5
    },

  answerDescription: {
      color:colors.textGrey,
      fontSize: vh(16),
      fontWeight: '500',
      letterSpacing:0.5
    },
    clock: {
      height: vh(20),  
      width: vh(20),
    },

  });

  export default styles;
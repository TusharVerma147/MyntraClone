import { StyleSheet} from 'react-native';
import {vh, SCREEN_WIDTH} from '../../theme/dimensions';
import { colors } from '../../theme';


const styles = StyleSheet.create({
    cardContainer: {
      flexDirection: 'row',
      borderWidth: 1,
      borderRadius: 20,
      width: SCREEN_WIDTH/3.2, 
      marginHorizontal: vh(2),
      justifyContent: 'center',
      alignItems: 'center',
      borderColor:colors.charcol
    },
    imageContainer: {},
    image: {
      height: vh(40),
      width: vh(40),    
    },
    textContainer: {
      justifyContent: 'center',
    },
    text: {
      fontSize: vh(15),
      fontWeight: '700',
    },
  });

export default styles;
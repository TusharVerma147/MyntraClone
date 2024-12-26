import {  StyleSheet,  } from 'react-native';
import { vh, SCREEN_WIDTH } from '../../theme/dimensions';
import { colors } from '../../theme';


const styles = StyleSheet.create({
    sliderImage: {
      width: SCREEN_WIDTH,
      height: SCREEN_WIDTH/1.2,
      resizeMode: 'stretch',
    },
    pagination: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: vh(10),
    },
    dot: {
      width: vh(6), 
      height: vh(6),
      borderRadius: vh(3),
      marginHorizontal: vh(3),
    },
    activeDot: {
      backgroundColor: colors.charcol,
    },
    inactiveDot: {
      backgroundColor: colors.platinum,
    },
  });

export default styles;
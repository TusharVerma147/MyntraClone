import {StyleSheet,} from 'react-native';
import {colors} from '../../theme';
import {vh, SCREEN_WIDTH} from '../../theme/dimensions';


const styles = StyleSheet.create({
    listContainer: {
      paddingHorizontal: vh(5),
      justifyContent: 'center',
    },
    itemContainer: {
      justifyContent: 'center',
      marginHorizontal: vh(8),
    },
    image: {
      width: vh(60),
      height: vh(80),
      borderRadius: 50,
      resizeMode: 'contain',
      borderWidth: 2,
      borderColor: colors.crown,
      alignSelf: 'center',
    },
    title: {
      fontSize: 13,
      fontWeight: '600',
      textAlign: 'center',
    },
  });

  export default styles;
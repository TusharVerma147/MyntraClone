import {StyleSheet,} from 'react-native';
import { colors } from '../../theme';
import {vh} from '../../theme/dimensions';


const styles = StyleSheet.create({
    listContainer: {
      paddingHorizontal: vh(5),
      justifyContent: 'center',
    },
    itemContainer: {
      justifyContent: 'center',
      marginHorizontal: vh(5),
    },
    image: {
      width: vh(80),
      height: vh(80),
      borderRadius: 50,
      resizeMode: 'cover',
      borderWidth: 2,
      borderColor: colors.crown,
      alignSelf: 'center',
    },
    title: {
      fontSize: vh(13),
      fontWeight: '600',
      textAlign: 'center',
    },
  });

  export default styles;
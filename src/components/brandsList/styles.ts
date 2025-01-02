import {StyleSheet,} from 'react-native';
import { vh, vw } from '../../theme/dimensions';



const styles = StyleSheet.create({
  container: {
    marginVertical: vh(10),
  },

  card: {
    alignItems: 'center',
    marginHorizontal: vh(5),

  },
  image: {
    width: vw(160),
    height: vh(220),
    borderRadius: 5,
    resizeMode: 'stretch',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  subtitle: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
  },
});

  export default styles
import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../theme/colors';
import { vh } from '../../theme/dimensions';


const styles =  StyleSheet.create({
  button: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: vh(15),
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  icon: {
    height: 20,
    width: 20,
  },
  buttonText: {
    fontWeight: '700',
    fontSize: 12,
  },
}
);

export default styles;
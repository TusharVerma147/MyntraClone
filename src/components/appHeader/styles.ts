import { StyleSheet, Platform } from 'react-native';
import colors from '../../theme/colors';
import { vh} from '../../theme/dimensions';

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 10,
    paddingTop: Platform.OS === 'android' ? vh(5) : vh(5),
    paddingBottom: 20,
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center', 
  },
  backContainer: {
    marginRight: vh(10),
    marginTop: vh(0),
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
   flex: 1, 
  },
  rightIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto', 
  },
  rightIcon: {
    marginLeft: 15, 
  },
  icon: {
    tintColor: colors.black, 
    marginHorizontal:vh(5)
  },
  categoryText: {
    fontWeight: '600',
  },
  subtitleText: {
    fontSize: vh(12), 
    fontWeight: '400',
    color: colors.textGrey,
  },
});

export default styles;

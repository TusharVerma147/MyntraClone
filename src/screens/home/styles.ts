import {StyleSheet} from 'react-native';
import {colors} from '../../theme';
import {vh} from '../../theme/dimensions';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingVertical: vh(10),
    paddingLeft: vh(10),
    justifyContent: 'space-between',
  },
  row: {flexDirection: 'row'},
  myntraview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backyellow,
    paddingHorizontal: vh(5),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.crown,
  },
  rightview: {flexDirection: 'row', marginTop: vh(10)},
  righticon: {
    height: 25,
    width: 25,
    marginRight: vh(10),
  },
  bottom: {
    height: vh(20),
    width: vh(20),
    marginLeft: vh(1),
    marginTop: vh(2),
    tintColor: colors.zeptored,
  },
  inside: {color: colors.crown, fontWeight: '700'},
  forward: {
    height: vh(10),
    width: vh(10),
    marginLeft: 2,
    marginTop: 4,
    tintColor: colors.crown,
  },
  myntra: {fontSize: 15, fontWeight: '600'},
  crown: {
    height: 40,
    width: 40,
    marginLeft: 2,
  },
});

export default styles;

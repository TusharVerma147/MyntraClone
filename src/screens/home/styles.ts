import {StyleSheet} from 'react-native';
import { colors } from '../../theme';
import {vh, SCREEN_WIDTH} from '../../theme/dimensions';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingVertical: vh(10),
    paddingLeft: vh(10),
    justifyContent: 'space-between',
    alignItems: 'center',
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
  myntra: {fontSize: vh(15), fontWeight: '600'},
  crown: {
    height: 40,
    width: 40,
    marginLeft: 2,
  },
  category:{flexDirection: 'row', marginVertical: vh(5), marginHorizontal:vh(5)},
  categorylist:{marginVertical: vh(10), marginHorizontal: vh(5)},
  banner:{width:SCREEN_WIDTH,resizeMode:'contain', height:SCREEN_WIDTH/5 },
  newbanner:{width:SCREEN_WIDTH,resizeMode:'cover', height:SCREEN_WIDTH/3 },
 winter:{width:SCREEN_WIDTH,resizeMode:'cover', height:SCREEN_WIDTH/2},
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingHorizontal: 10,
    height: 40,
    marginHorizontal:20
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  placeholder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hiddenInput: {
    color: 'transparent',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },

});

export default styles;

import {StyleSheet, Dimensions} from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH, vh,vw } from '../../theme/dimensions';

export const styles = StyleSheet.create({
  mainContainer: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    position: 'relative',
    backgroundColor: 'black',
  },
  header: {
    height: 80,
    width: SCREEN_WIDTH,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 1,
    paddingHorizontal: 20,
    alignItems: 'flex-end',
  },
  reelsText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
  },
  cameraImg: {
    width: vw(30),
    height: vw(30),
    tintColor: 'white',
    resizeMode: 'contain',
  },
});
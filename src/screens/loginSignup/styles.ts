import {StyleSheet} from 'react-native';
import {colors} from '../../theme';
import {vh, vw} from '../../theme/dimensions';

const styles = StyleSheet.create({
topview:{backgroundColor: colors.charcol, height: vh(100)},
lowerview:{height: vh(80), backgroundColor: colors.white},
profileview:{
   height: vh(120),
   width: vh(120),
   backgroundColor: colors.offwhite,
   borderWidth: 2,
   borderRadius: 5,
   borderColor: colors.platinum,
   position: 'absolute',
   top: vh(-63),
   left: vh(20),
   justifyContent: 'center',
   alignItems: 'center',
 },

  profile: {
    height: vh(50),
    width: vh(50),
  },
  loginview: {
   //  flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginRight: vh(10),
    paddingVertical:10,
    alignItems:'center'
  },
});

export default styles;

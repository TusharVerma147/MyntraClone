import {StyleSheet} from 'react-native';
import {vh} from '../../theme/dimensions';
import {colors} from '../../theme';

const styles = StyleSheet.create({

  backicon: {height: vh(20), width: vh(20), tintColor: colors.charcol},
  photoText:{fontSize: vh(15), marginHorizontal:vh(20), marginTop:vh(30), fontWeight:'500', color:colors.textGrey},
  photoButton: {
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: vh(10), 
    borderWidth: 1.5,
    borderColor: colors.charcol,
    borderRadius: vh(5),
  },
  buttonText: {
    fontSize: vh(15),
    fontWeight: '600',
    color: colors.charcol,
  },
  photoButtonLeft: {
    marginRight: vh(10), 
  },
 

});

export default styles;

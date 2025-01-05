import {StyleSheet, } from 'react-native';
import colors from '../../theme/colors';
import { vh } from '../../theme/dimensions';


const styles = StyleSheet.create({

    icon:{ width: 40, height: 30, resizeMode: 'contain' },
    countview:{
        position: 'absolute',
        top: vh(5),
        right: 40,
        backgroundColor: colors.zeptored,
        width: vh(18),
        height: vh(20),
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      countText:{
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
      }

})

export default styles
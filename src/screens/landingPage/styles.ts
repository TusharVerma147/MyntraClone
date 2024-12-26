import {StyleSheet} from 'react-native';
import { colors } from '../../theme';
import { vh,vw } from '../../theme/dimensions';


const styles = StyleSheet.create({

    splashicon: {
        width: vw(50),
        height: vh(50),
        alignSelf:'center',
        marginTop:vh(40),
        marginBottom:vh(5)
      },
    select:{
        fontSize:vh(20),
        alignSelf:'center',
        color:colors.textGrey
    }
   
  });

  export default styles;
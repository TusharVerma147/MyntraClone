import {StyleSheet,} from 'react-native';
import {SCREEN_WIDTH, vh} from '../../theme/dimensions';
import { colors } from '../../theme';
 

const styles = StyleSheet.create({
  

    trendsView:{justifyContent:'center',alignItems:'center',marginVertical:vh(10) },
    
    trendsText:{backgroundColor:colors.charcol,paddingVertical:vh(8), paddingHorizontal:vh(40), color:colors.white, fontSize:vh(15), fontWeight:'600',borderRadius:30 },
});


export default styles
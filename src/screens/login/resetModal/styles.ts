import {StyleSheet} from 'react-native';
import { colors } from '../../../theme';
import { vh, SCREEN_WIDTH } from '../../../theme/dimensions';

const styles = StyleSheet.create({


    
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        width: '80%',
        backgroundColor: colors.screengrey,
        borderRadius: 10,
        paddingHorizontal: 20,
        height: SCREEN_WIDTH/ 1.2,
        paddingVertical: 20,
      },
      modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
      },
      custombutton:{
        marginTop:5,
        padding:vh(10)
      },
      modalText: {
        fontSize: 15,
        marginVertical: 10,
        fontWeight: '400',
        color: colors.black,
      },
      modalInput: {
        height: vh(50),
        borderColor: colors.grey,
        borderWidth: 1,
        width: '100%',
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
      },
      modalButtons: {
        marginVertical: 10,
        width: '48%',
        alignSelf: 'center',
      },
      modalButtonText: { fontWeight: '500' },

      buttontext:
        {fontWeight: '700', fontSize:20},
      custombuttonview:
        {marginTop:10}
      
});

export default styles;

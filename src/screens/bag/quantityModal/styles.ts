import { StyleSheet} from 'react-native';
import { vh } from '../../../theme/dimensions';
import { colors } from '../../../theme';


const styles = StyleSheet.create({
    
    cross: {height: vh(15), width: vh(15), tintColor: colors.textGrey},
    
    modalOverlay: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: colors.transparent,
    },
    modalContent: {
      backgroundColor: colors.white,
      borderRadius: 10,
      width: '100%',
    },
    modalTitle: {
      fontSize: vh(15),
      fontWeight: '600',
      marginBottom: vh(5),
    },
    qtyCircle: {
        width: vh(40),
        height: vh(40),
        borderRadius: vh(20),
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: vh(5),
        borderWidth: 1,
        borderColor: colors.charcol,
      },
      selectedQty: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.zeptored,
      },
      qtyText: {
        fontSize: vh(16),
        fontWeight: '700',
        color: colors.charcol,
      },
      selectedqtyText: {
        fontSize: vh(16),
        fontWeight: '700',
        color: colors.zeptored,
      },
   buttontext:{fontSize: vh(15), marginBottom: vh(5)},
   qtyview:{
    padding: vh(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  }

  });

  

export default styles;

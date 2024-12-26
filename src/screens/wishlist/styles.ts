import { StyleSheet} from 'react-native';
import { colors } from '../../theme';
import { vh,vw } from '../../theme/dimensions';

const styles = StyleSheet.create({



    emptyContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: vh(20),
        flex:0.5
      },
    emptyMessage: {
        fontSize: vh(20),
        fontWeight: '600',
        color: colors.charcol,
        textAlign: 'center',
      },
      emptysubMessage: {
        fontSize: vh(18),
        fontWeight: '500',
        color: colors.textGrey,
        textAlign: 'center',
        marginVertical:vh(10)
      },

})


export default styles;
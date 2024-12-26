import { StyleSheet } from 'react-native';
import { vh } from '../../theme/dimensions';
import { colors } from '../../theme';


const styles = StyleSheet.create({
    menuItem: {
        width: '45%',
        marginVertical: 5,
        backgroundColor: colors.white,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.platinum,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      menuText: {
        fontSize: vh(14),
        fontWeight: '600',
        color: colors.charcol,
        marginHorizontal: vh(5),
      },
      menuIcon: {
        height: vh(20),
        width: vh(20),
        tintColor: colors.charcol,
        resizeMode: 'contain',
      },
      forward: {
        height: vh(12),
        width: vh(10),
        tintColor: colors.charcol,
      },
      splashview: {
        flexDirection: 'row',
      },

})

export default styles;
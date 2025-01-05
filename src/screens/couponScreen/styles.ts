import { StyleSheet } from "react-native";
import { colors } from "../../theme";
import { vh } from '../../theme/dimensions';

const styles = StyleSheet.create({
    couponItem: {
      padding: vh(15),
      borderBottomWidth: 1,
      borderColor: colors.platinum,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: vh(5),
      backgroundColor: colors.white,
    },
    couponCode: { fontSize: vh(18), fontWeight: '600' },
    couponDescription: { fontSize: 14, color: colors.textGrey },
    couponbutton: { paddingVertical: vh(5) },
    viewcoupon: { fontSize: vh(15), fontWeight: '600', color: colors.zeptored, },
  });

export default styles;
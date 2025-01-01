import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH, vh } from '../../theme/dimensions';
import { colors } from '../../theme';



const styles = StyleSheet.create({
    productmain: {
        padding: vh(15),
        width: SCREEN_WIDTH,
        backgroundColor: colors.white,
        marginBottom:vh(10)
      },
      productHeading: {
        fontSize: vh(18),
        fontWeight: '700',
        paddingBottom: vh(10),
      },
      productSub: {flexDirection: 'row', width: '100%', gap: vh(10)},
      productSmall: {flex: 1, gap: vh(8)},
      productSubSmall: {flexDirection: 'row', gap: vh(8)},
      productButton: {
        flex: 1,
        backgroundColor: colors.platinum,
        borderRadius: 10,
      },
      prizeview: {
        position: 'absolute',
        flexDirection: 'row',
        gap: vh(2),
        alignItems: 'center',
        bottom: 0,
        left: vh(10),
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1.0,
        shadowRadius: 20,
        elevation: 10,
      },
      priceCutText: {
        fontSize: vh(10),
        textDecorationLine: 'line-through',
        color: colors.screengrey,
      },
      priceText: {
        fontSize: vh(12),
        color: colors.white,
        fontWeight: '600',
      },
      productLarge: {
        flex: 1,
      },
      productImage: {
        width: '100%',
        height: vh(130),
        resizeMode: 'cover',
        borderRadius: 10,
      },
      productLargeImage: {
        width: '100%',
        height: vh(270),
        resizeMode: 'cover',
        borderRadius: 10,
      },
    
      button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        marginTop: vh(10),
        paddingVertical: vh(10),
        borderRadius: 10,
        flexDirection: 'row',
        gap: vh(10),
        borderColor: colors.screengrey,
        backgroundColor: colors.screengrey,
      },
      buttonText: {
        fontSize: vh(15),
        fontWeight: '600',
      },
      forwardIcon: {height: vh(10), width: vh(10)},
    });

export default styles;
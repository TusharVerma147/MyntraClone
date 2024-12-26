import {StyleSheet} from 'react-native';
import { vh, SCREEN_WIDTH } from '../../theme/dimensions';
import { colors } from '../../theme';


const styles = StyleSheet.create({
    ratingview: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: vh(30),
      right: vh(5),
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: vh(20),
      paddingVertical: vh(8),
      backgroundColor: colors.screengrey,
      gap: vh(10),
    },
    star: {
      height: vh(10),
      width: vh(10),
      tintColor: colors.green,
    },
    reviewtext: {
      borderLeftWidth: 1,
      borderColor: colors.charcol,
      paddingHorizontal: vh(5),
    },
    image:{
      width: SCREEN_WIDTH,
      height: vh(500),
      resizeMode: 'contain',
      backgroundColor: colors.platinum,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30
    },
    detailview:{ marginHorizontal: vh(15) },
    brandview: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: vh(5),
    },
    name: {
      marginRight: vh(5),
      fontWeight: '700',
      color: colors.charcol,
      fontSize: vh(15),
    },
    type: {
      color: colors.grey,
      fontSize: vh(14),
    },
    priceview: { flexDirection: 'row' },
    price: {
      color: colors.grey,
      textDecorationLine: 'line-through',
      fontSize: vh(13),
    },
    discount: {
      color: colors.charcol,
      fontSize: vh(15),
      fontWeight: '700',
      marginLeft: vh(5),
    },
    off: {
      marginHorizontal: vh(5),
      color: colors.zeptored,
      fontSize: vh(12),
      fontWeight: '700'
    },
  
  
    footer: {
      // position: 'absolute',
      // left: 0,
      // right: 0,
      // bottom:0,
      backgroundColor: colors.white,
      alignItems:'center',
      // backgroundColor:'red',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      paddingVertical: vh(10),
      shadowColor: colors.black,
      shadowOffset: { width: 0, height: -4 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      backgroundColor: colors.charcol,
      paddingVertical: vh(10),
      paddingHorizontal: vh(25),
      borderRadius: vh(5),
      justifyContent: 'center',
      alignItems: 'center',
    },
    custombutton:{
      paddingVertical: vh(10),
      // marginHorizontal: vh(40),
    },
    buttontitle:{
      fontSize: vh(14),
      fontWeight: '700',
    },
    buttonText: {
      color: colors.white,
      fontSize: vh(14),
      fontWeight: '700',
    },
    scrollViewContent: {
      paddingBottom: vh(100), 
    },
    wishlist:{height: vh(25), width: vh(25), tintColor:colors.zeptored},

    productview: {
      flexDirection: 'row',
      width: SCREEN_WIDTH,
      justifyContent: 'space-between',
      paddingHorizontal: vh(20),
      marginTop: vh(10),
      paddingVertical: vh(10),
      backgroundColor: colors.white,
      alignItems:'center'
    },
    producttext: {
      fontSize: vh(18),
      fontWeight: '600',
      color:colors.charcol
    },
    desview: {
      width: SCREEN_WIDTH,
      paddingHorizontal: vh(20),
      backgroundColor: colors.white,
      paddingVertical: vh(10),
    },
    productDescription: {
      color:colors.textGrey,
      fontSize: vh(15),
      fontWeight: '300',
      letterSpacing:0.5
    
    },
    clock: {
      height: vh(20),  
      width: vh(20),
    },
  });

  export default styles;
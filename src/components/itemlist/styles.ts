import { StyleSheet } from "react-native";
import {colors} from '../../theme';
import {SCREEN_WIDTH, vh,vw} from '../../theme/dimensions';


const styles = StyleSheet.create({
    row: {
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    itemContainer: {
      marginHorizontal: vh(5),
      paddingHorizontal: vh(3),
      borderRadius: 5,
    },
    image: {
      width: SCREEN_WIDTH / 2.2,
      height: vh(230),
      borderRadius: 5,
      resizeMode: 'contain',
      backgroundColor: colors.platinum,
    },
    brandview:{flexDirection:'row', alignItems:'center',justifyContent:'space-between'},
    name: {
      marginTop: vh(5),
      fontWeight: '700',
      color: colors.charcol,
      fontSize: vh(15),
    },
    type: {
      color: colors.grey,
      fontSize: vh(12),
    },
      priceview:{flexDirection: 'row'},
    price: {
      color: colors.grey,
      textDecorationLine: 'line-through',
      fontSize:vh(12)
    },
    discount: {
      color: colors.charcol,
      fontSize: vh(12),
      fontWeight: '700',
      marginHorizontal: vh(5),
    },
    off:{
      color:colors.zeptored,
      marginHorizontal:vh(10),
      fontSize:vh(12) 
    },
    ratingview:{
      flexDirection:'row', position:'absolute', bottom:vh(5), left:vw(5), borderRadius:20, justifyContent:'center', alignItems:'center', padding:vh(5),backgroundColor:colors.screengrey, gap:5
    },
    crossview:{
       position:'absolute', bottom:vh(205), left:vw(145), borderRadius:20, justifyContent:'center', alignItems:'center', padding:vh(5),backgroundColor:colors.screengrey, borderColor:colors.textGrey
    },
    star:{height:vh(10), width:vh(10), tintColor:colors.green},
    reviewtext:{
      borderLeftWidth:1, borderColor:colors.charcol, paddingHorizontal:vh(5)
    
    },
    custombutton:{marginTop:vh(10)},
    buttontext:{fontSize:vh(14), fontWeight:'500'},
    wishlist:{ height: vh(18), width: vh(18) },
    cross:{ height: vh(10), width: vh(10), tintColor:colors.textGrey}
  
  });

export default styles;
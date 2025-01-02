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
      backgroundColor: colors.white,
      alignItems:'center',
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
      paddingBottom: vh(10), 
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
      fontWeight: '400',
      letterSpacing:0.5
    },
    questionDescription: {
      color:colors.charcol,
      fontSize: vh(17),
      fontWeight: '500',
      letterSpacing:0.5
    },

  answerDescription: {
      color:colors.textGrey,
      fontSize: vh(16),
      fontWeight: '500',
      letterSpacing:0.5
    },
    clock: {
      height: vh(20),  
      width: vh(20),
    },
    deliveryview:{flexDirection:'row', alignItems:'center'},
    location:{width:vh(20),height:vh(20), tintColor:colors.textGrey},
    changeText:{color:colors.zeptored, fontWeight:'600'},
    addresText:{

    },
     daysview: {
      flexDirection: 'row',
      backgroundColor:colors.palepurple,
      paddingHorizontal: vh(10),
      paddingVertical:vh(5),
      marginVertical:vh(5),
      marginHorizontal:vh(10),
      borderRadius:8,
      alignItems:'center'
    },
    daysText:{
    fontWeight:'500',
    color:colors.black,
    marginHorizontal:vh(5)
    },
    infoview: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: vh(20),
    },
    iconview: {
      alignItems: 'center',
      maxWidth: '20%', 
    },
    icon: {
      height: vh(40),
      width: vh(40),
      // tintColor: colors.zeptored,
     backgroundColor:colors.palepurple,
     padding:vh(3),
     borderRadius:8
    },
    infotext: {
      fontSize: vh(10),
      textAlign: 'center',  
      flexWrap: 'wrap',     
      lineHeight: vh(14),   
    },
    fwd:{
      width: SCREEN_WIDTH - 20,
      backgroundColor: 'blue',
      resizeMode: 'stretch',
      height: vh(100),
      alignSelf: 'center',
      borderRadius: 20,
      marginVertical: vh(15),
    },
   

  });

  export default styles;
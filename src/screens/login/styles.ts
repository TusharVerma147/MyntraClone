import {StyleSheet} from 'react-native';
import {colors} from '../../theme';
import {vh, SCREEN_WIDTH} from '../../theme/dimensions';

const styles = StyleSheet.create({


    keyboard:{
        flex:1
      },
      header: {
        flex: 0.5,
      },
      scroll:{
        flexGrow:1
      },
      splashimg:{height:vh(40), width:vh(42) ,marginHorizontal:vh(20)},
   banner: {
        width: SCREEN_WIDTH,
        height: vh(150),
        resizeMode:'stretch',
        backgroundColor:'red'
      },
      bottom: {
        flex: 0.8,
        marginHorizontal:20
      },
      footer: {
        marginTop: vh(40),
      },
      bytext: {
        color: colors.zeptored,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
      },
      termstext: {
        color: colors.zeptored,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
      },
      logintext: {
        color: colors.zeptored,
        fontSize: vh(20),
        textAlign: 'center',
        fontWeight: '700',
        letterSpacing: 1.8,
        marginBottom: vh(10),
      },
      divideview: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: vh(10),
        marginBottom: vh(30),
      },
      orview: {
        height: 1,
        width:SCREEN_WIDTH / 2.5,
        backgroundColor: colors.zeptored,
        marginHorizontal: vh(5),
      },
      ortext: {
        fontSize: vh(15),
        color: colors.zeptored,
      },
      forgot: {
        color: colors.zeptored,
        fontWeight: '700',
        fontSize: 15,
        textAlign: 'right',
        marginTop: vh(5),
        paddingRight:vh(10)
      },
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
      buttontext:
        {fontWeight: '700', fontSize:20},
      custombuttonview:
        {marginTop:10}
      
});

export default styles;

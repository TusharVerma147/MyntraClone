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
   banner: {
        width: SCREEN_WIDTH,
        height: vh(120),
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
        marginVertical: vh(30),
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
});

export default styles;

import {StyleSheet} from 'react-native';
import {colors} from '../../theme';
import {SCREEN_WIDTH, vh, vw} from '../../theme/dimensions';

const styles = StyleSheet.create({
  topview: {backgroundColor: colors.charcol, height: vh(100)},
  lowerview: {height: vh(80), backgroundColor: colors.white},
  profileview: {
    height: vh(120),
    width: vh(120),
    backgroundColor: colors.offwhite,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: colors.platinum,
    position: 'absolute',
    top: vh(-63),
    left: vh(20),
    justifyContent: 'center',
    alignItems: 'center',
  },

  profile: {
    height: vh(50),
    width: vh(50),
  },
  loginview: {
    //  flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginRight: vh(10),
    paddingVertical: 10,
    alignItems: 'center',
  },
  userInfo: {
    padding: vh(20),
    height: SCREEN_WIDTH / 3,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    overflow: 'hidden',
    backgroundColor:colors.white
  },
  userIcon: {
   backgroundColor:colors.charcol,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderColor:colors.zeptored,
    borderWidth:4
  },
  user:{
    position: 'absolute',
    backgroundColor: colors.usergreen,
    width: '99%',
    height: '69%',
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    alignItems: 'center',
    bottom: 16,
  },
  userInitial: {
    fontSize: vh(22),
    color: colors.green,
    top:10,
  },
  userRole: {
    fontSize: vh(10),
    color: colors.white,
    fontWeight:'500'
  },
  userName: {
    fontSize: vh(22),
    fontWeight: 'bold',
    color: colors.white,
  },
  admin:{
    position: 'absolute',
    bottom: 3,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  adminUser:{
    bottom: vh(10),
    color: colors.charcol,
    fontWeight: '700',
    marginHorizontal: vh(8),
  },
  eliteview: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius:10,
    borderColor: colors.backyellow,
    marginVertical: vh(10),
    marginRight:vw(180),
    alignItems:'center',
    justifyContent:'center'
  },
  elite: {
    fontSize: vh(18),
    color: colors.backyellow,
    fontWeight: '700',
  },
  shoppingSection: {
    paddingVertical: vh(15),
    paddingHorizontal:vh(10),
    backgroundColor: colors.white,
  },
  sectionTitle: {
    fontSize: vh(18),
    fontWeight: 'bold',
    marginBottom: vh(10),
    color:colors.charcol
  },

  shoppingOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  option: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  optionText: {
    fontSize: 14,
    color: '#333',
  },
  adBanner: {
    width: '100%',
    height: vh(100),
    marginVertical: vh(10),
    resizeMode:'contain', 
    backgroundColor:colors.white
   },
  menu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: colors.white,
    padding: 10,
  },
  menuItem: {
    width: '45%',
    marginVertical: 5,
    backgroundColor: colors.white,
    padding: 10,
    borderWidth:1,
    borderColor:colors.platinum,
    borderRadius: 5,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  menuText: {
    fontSize: vh(14),
    fontWeight:'600',
    color: colors.charcol,
    marginHorizontal:vh(5)
  },
  menuIcon:{
    height: vh(20),
    width: vh(20),
    tintColor: colors.charcol,
    resizeMode: 'contain',
  },
  forward:{height: vh(12), width: vh(10), tintColor: colors.charcol},
  splashview:{
    flexDirection:'row'
  },
  splash:{height: vh(15), width: vh(20)},
  insider:{height: vh(15), width: vh(60), resizeMode: 'contain'},
  crown:{height: vh(30), width: vh(30)},
  button:{margin:20}
   
});

export default styles;

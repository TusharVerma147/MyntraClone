import {StyleSheet, Platform} from 'react-native';
import {vh} from '../../theme/dimensions';
import {colors} from '../../theme';

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? vh(150):vh(200) 

  },
  nearbyPlacesContainer: {
    width: '95%', 
    backgroundColor: colors.white,
    borderRadius: 10,
    overflow: 'hidden',
    maxHeight: vh(300),
    borderWidth: 1,
    borderColor: colors.charcol,
    elevation: 5, 
    shadowColor: colors.black, 
    shadowOffset: {width: 0, height: 2}, 
    shadowOpacity: 0.25, 
    shadowRadius: 3.84,
  },
  nearbyPlaceItem: {
    padding:vh(10),
    borderBottomWidth: 1,
    borderBottomColor: colors.charcol,
    flexDirection: 'row',
  },
  listheader: {
    paddingVertical: vh(10),
    paddingHorizontal: vh(30),
    borderBottomWidth: 1,
    borderBottomColor: colors.charcol,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nearbyPlaceText: {
    fontSize: vh(18),
    color: colors.black,
    fontWeight: '600',
    marginLeft: vh(10), 
  },
  clock: {
    height: vh(30),
    width: vh(30),
    resizeMode: 'contain',
  },
  addressview: {
    marginTop: vh(20),
    backgroundColor: colors.white,
    padding: vh(20),
  },
  addressSelectText: {
    fontSize: vh(18),
    color: colors.charcol,
    fontWeight: '600',
  },
  addressText: {fontSize: vh(16), color: colors.textGrey, fontWeight: '400'},
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  buttonaddress:{ paddingVertical: vh(10), marginHorizontal:vh(10) },
  buttonaddressText:{ fontSize: vh(18), color: colors.charcol },
  buttontext: {fontSize: vh(16)},

  button: { position: 'absolute',   left: vh(10),
    right: vh(10), bottom:vh(35) },
  
});

export default styles;

import {StyleSheet, Platform} from 'react-native';
import {vh} from '../../theme/dimensions';
import { colors } from '../../theme';



const styles = StyleSheet.create({
    bottomSheetOverlay: {
      flex: 1,
      backgroundColor: colors.transparent,
      justifyContent: 'flex-end', 
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: colors.transparent,
      alignItems: 'center',
      marginTop: Platform.OS === 'android' ? vh(150) : vh(200),
    },
    bottomSheetContainer: {
      width: '100%',
      backgroundColor: colors.white,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      overflow: 'hidden',
      maxHeight: vh(500),
      paddingBottom: vh(10),
      borderWidth: 1,
      borderColor: colors.charcol,
      elevation: 5,
      shadowColor: colors.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    container: {
      width: '95%',
      backgroundColor: colors.white,
      borderRadius: 10,
      overflow: 'hidden',
      maxHeight: vh(300),
      borderWidth: 1,
      borderColor: colors.charcol,
      elevation: 5,
      shadowColor: colors.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    nearbyPlaceItem: {
      padding: vh(10),
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
  });
  
export default styles;

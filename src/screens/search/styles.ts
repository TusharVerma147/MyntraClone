import {StyleSheet} from 'react-native';
import {vh, SCREEN_WIDTH} from '../../theme/dimensions';
import {colors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    marginHorizontal:vh(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  input: {
    flex: 1,
    fontSize: vh(15),
    color: colors.black,
    marginHorizontal: vh(20),
  },
  backicon: {height: vh(20), width: vh(20), tintColor: colors.charcol},
  photoText:{fontSize: vh(15), marginHorizontal:vh(20), marginTop:vh(30), fontWeight:'500', color:colors.textGrey},

photoSearchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: vh(20), 
    marginTop: vh(10),
  },
  photoButton: {
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: vh(10), 
    borderWidth: 1.5,
    borderColor: colors.charcol,
    borderRadius: vh(5),
  },
  buttonText: {
    fontSize: vh(15),
    fontWeight: '600',
    color: colors.charcol,
  },
  photoButtonLeft: {
    marginRight: vh(10), 
  },
  recentText:{
    fontSize: vh(16),marginTop:vh(30), fontWeight:'600', color:colors.charcol
  },
  editText:{
    fontSize: vh(16),marginTop:vh(30), fontWeight:'600', color:colors.zeptored
  },
  searchResultsContainer: {
    marginTop: vh(20),
    // backgroundColor:'red',
    // borderWidth:1,
    paddingHorizontal:vh(20)
  },
  itemResult: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: vh(10),
    borderBottomWidth: 1,
    borderColor: colors.textGrey,
  },
  itemImage: {
    height: vh(60),
    width: vh(60),
    marginRight: vh(10),
    resizeMode:'contain'
  },
  itemText: {
    fontSize: vh(16),
    color: colors.charcol,
    fontWeight:'600'
  },

  // Styling for "No items found"
  noItemsFoundContainer: {
    marginTop: vh(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  noItemsFoundText: {
    fontSize: vh(16),
    color: colors.textGrey,
  },
});

export default styles;

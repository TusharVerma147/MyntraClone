import {StyleSheet} from 'react-native';
import {vh} from '../../theme/dimensions';
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
    paddingHorizontal:vh(20)
  },
  itemResult: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: vh(10),
    borderBottomWidth: 1,
    borderColor: colors.platinum,
  },
  itemImage: {
    height: vh(60),
    width: vh(60),
    marginRight: vh(10),
    resizeMode:'contain',
  },
  itemText: {
    fontSize: vh(16),
    color: colors.charcol,
    fontWeight:'600'
  },


  noItemsFoundContainer: {
    marginTop: vh(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  noItemsFoundText: {
    fontSize: vh(16),
    color: colors.textGrey,
  },
  recentItem: {
   marginHorizontal:vh(10),
   marginVertical:vh(20),
  },
recentItemImage:{
   height:vh(50),
   width:vh(50),
   resizeMode:'cover',
   borderRadius:50,
   borderWidth:1,
   alignSelf:'center',
   borderColor:colors.textinput
 
},
  recentItemText: {
    fontSize: vh(12),  
    fontWeight: '300',  
    color: colors.charcol,  
    textAlign: 'center',
    flexWrap: 'wrap',   
    width:vh(55),  
  },
  crossIconContainer: {
    position: 'absolute',
    top:vh(20),
    left:vh(10),
    backgroundColor:colors.charcol,
    borderRadius:20,
    padding:vh(3)
  },
  crossIcon: {
    width: vh(8),
    height: vh(8),
    tintColor:colors.white
  },

});

export default styles;

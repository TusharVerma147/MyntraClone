import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import Toast from 'react-native-simple-toast';
import { useDispatch } from 'react-redux';
import { addToWishlist, removeFromWishlist,  } from '../redux/slice/wishListSlice';
import { addToBag } from '../redux/slice/bagSlice';



export const checkLoginStatus = async (): Promise<boolean> => {
  try {
    const isUserLoggedIn = await AsyncStorage.getItem('key');
    const currentUser = auth().currentUser;

    return isUserLoggedIn === 'true' && currentUser !== null;
  } catch (err) {
    console.error("Error checking login status: ", err);
    return false;
  }
};

export const navigateIfLoggedIn = async (
    navigation: NavigationProp<any>,
    targetScreen: string
  ) => {
    const isLoggedIn = await checkLoginStatus();
    if (isLoggedIn) {
      navigation.navigate(targetScreen);
    } else {
      Alert.alert("Login Required", "Please log in to access this feature.");
    }
  };


  export const handleWishlistPress = async (
    navigation: NavigationProp<any>
  ) => {
    const isLoggedIn = await checkLoginStatus();
    if (isLoggedIn) {
      navigation.navigate('Wishlist'); 
    } else {
      Toast.show('Please log in to access Wishlist', Toast.SHORT); 
    }
  };


  export const handleAddToWishlist = async (
    item: any,
    wishlistItems: any[],
    dispatch: ReturnType<typeof useDispatch>,
    // navigation: NavigationProp<any>
  ) => {
    const isLoggedIn = await checkLoginStatus();
    if (!isLoggedIn) {
      Alert.alert("Login Required", "Please log in to add items to your wishlist.");
    //   navigation.navigate('Login');
      return;
    }
  
    const isInWishlist = wishlistItems.some(
      (wishlistItem: any) => wishlistItem.id === item.id
    );
  
    if (isInWishlist) {
      dispatch(removeFromWishlist(item.id));
    } else {
      dispatch(addToWishlist(item));
    }
  };


  export const handleAddToBag = async (
    item: any,
    bagItems: any[],
    dispatch: ReturnType<typeof useDispatch>,
    navigation: NavigationProp<any>
  ) => {
    const isLoggedIn = await checkLoginStatus();
    if (!isLoggedIn) {
      Alert.alert("Login Required", "Please log in to add items to your bag.");
      return;
    }
  
    const isInBag = bagItems.some((bagItem: any) => bagItem.id === item.id);
  
    if (isInBag) {
      navigation.navigate('Bag');  // Navigate to the Bag screen if item is already in the bag
    } else {
      dispatch(addToBag(item));  // Add item to the bag if not already there
    }
  };

 
// export  const WishlistPress = ()=>{

//   handleWishlistPress(navigation)
// }  

export const WishlistPress =  (navigation: NavigationProp<any>) => {
  // const isLoggedIn = await checkLoginStatus();

  handleWishlistPress(navigation) // Navigate to the search screen
 
};


export const handleSearch =  (navigation: NavigationProp<any>) => {
  // const isLoggedIn = await checkLoginStatus();

    navigation.navigate('Search');  // Navigate to the search screen
 
};



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
      Toast.show('Please log in to access  this feature.', Toast.SHORT);
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
  ) => {
    const isLoggedIn = await checkLoginStatus();
    if (!isLoggedIn) {
      Toast.show('Please log in to add items to your wishlist.', Toast.SHORT); 
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
      Toast.show('Please log in to add items to your  bag.', Toast.SHORT); 
      return;
    }
  
    const isInBag = bagItems.some((bagItem: any) => bagItem.id === item.id);
  
    if (isInBag) {
      navigation.navigate('Bag');  
    } else {
      dispatch(addToBag(item));  
    }
  };

 



import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import {NavigationProp} from '@react-navigation/native';
import Toast from 'react-native-simple-toast';
import {useDispatch} from 'react-redux';
import {addToWishlist, removeFromWishlist} from '../redux/slice/wishListSlice';
import firestore from '@react-native-firebase/firestore';
import { addToBag, clearCart, removeFromBag } from '../redux/slice/bagSlice';



export const checkLoginStatus = async (): Promise<boolean> => {
  try {
    const isUserLoggedIn = await AsyncStorage.getItem('key');
    const currentUser = auth().currentUser;

    return isUserLoggedIn === 'true' && currentUser !== null;
  } catch (err) {
    return false;
  }
};

export const navigateIfLoggedIn = async (
  navigation: NavigationProp<any>,
  targetScreen: string,
) => {
  const isLoggedIn = await checkLoginStatus();
  if (isLoggedIn) {
    navigation.navigate(targetScreen);
  } else {
    Toast.show('Please log in to access  this feature.', Toast.SHORT);
  }
};

export const handleWishlistPress = async (navigation: NavigationProp<any>) => {
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
  try {
    const isLoggedIn = await checkLoginStatus();
    if (!isLoggedIn) {
      Toast.show('Please log in to add items to your wishlist.', Toast.SHORT);
      return;
    }

    const userId = auth().currentUser?.uid;
    if (!userId) {
      Toast.show('User is not found. Ensure the user is logged in.',Toast.SHORT);
      return;
    }

    const wishlistRef = firestore()
      .collection('users')
      .doc(userId)
      .collection('wishlist')
      .doc(item.id);

    const isInWishlist = wishlistItems.some(
      (wishlistItem: any) => wishlistItem.id === item.id,
    );

    if (isInWishlist) {
      dispatch(removeFromWishlist(item.id));
      await wishlistRef.delete();
      Toast.show('Item removed from your wishlist.', Toast.SHORT);
      // console.log(`Item with ID ${item.id} removed from Firestore.`);
    } else {
      dispatch(addToWishlist(item));
      await wishlistRef.set({
        id: item.id,
        brand: item.brand,
        type: item.type,
        Price: item.Price,
        DiscountedPrice: item.DiscountedPrice,
        rating: item.rating,
        reviews: item.reviews,
        image: item.image,
        off: item.off,
      });
      Toast.show('Item added to your wishlist.', Toast.SHORT);
      // console.log(`Item with ID ${item.id} added to Firestore.`);
    }
  } catch (error) {
    // console.error('Error handling wishlist operation:', error);
    Toast.show('An error occurred while updating your wishlist.', Toast.SHORT);
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
    firestore()
      .collection('users')
      .doc(auth().currentUser?.uid)
      .collection('cart')
      .doc(item.id)
      .set({
        id: item.id,
        brand: item.brand,
        type: item.type,
        Price: item.Price,
        DiscountedPrice: item.DiscountedPrice,
        rating: item.rating,
        reviews: item.reviews,
        image: item.image,
       off :item.off,
      });  
  }
};


  export const handleDelete = async (
    dispatch: ReturnType<typeof useDispatch>,
  ) => {
    const uid = auth().currentUser?.uid;
    try {
      const cartCollection = firestore()
        .collection('users')
        .doc(uid)
        .collection('cart');
      const cartSnapshot = await cartCollection.get();
  
      const batch = firestore().batch();
      cartSnapshot.forEach(doc => {
        batch.delete(doc.ref);
      });
      await batch.commit();
      dispatch(clearCart());
      Toast.show('Cart cleared successfully', Toast.SHORT);
    } catch (error) {
      Toast.show('Failed to clear cart', Toast.SHORT);
    }
  };

  export const handleCross = async (
    item: any, 
    dispatch: ReturnType<typeof useDispatch>
  ) => {
    const uid = auth().currentUser?.uid;
    try {
      await firestore()
      .collection('users')
      .doc(uid)
      .collection('cart')
      .doc(item)
      .delete(item.id);
      dispatch(removeFromBag(item));
      Toast.show('Item removed from the cart.', Toast.SHORT);
    } catch (error) {
      Toast.show('Failed to remove item.', Toast.SHORT);
    }
  };
  


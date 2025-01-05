import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { addToBag } from '../redux/slice/bagSlice';
import { addToWishlist } from '../redux/slice/wishListSlice';
import Toast from 'react-native-simple-toast';

const useCartAndWishlist = () => {
  const dispatch = useDispatch();
  const bagItems = useSelector((state: any) => state.bag.items);
  const wishlistItems = useSelector((state: any) => state.wishlist.items);

  useEffect(() => {
    const fetchCartAndWishlist = async () => {
      const uid = auth().currentUser?.uid;


      try {
        const cartSnapshot = await firestore()
          .collection('users')
          .doc(uid)
          .collection('cart')
          .get();


          
        const cartItems = cartSnapshot.docs.map(doc => doc.data());
        cartItems.forEach(item => {
          const alreadyExist = bagItems.some((existingItem: { id: any }) => existingItem.id === item.id);
          if (!alreadyExist) {
            dispatch(addToBag(item)); 
          }
        });

   
        const wishlistSnapshot = await firestore()
          .collection('users')
          .doc(uid)
          .collection('wishlist')
          .get();

        const wishlistItemsData = wishlistSnapshot.docs.map(doc => doc.data());
        wishlistItemsData.forEach(item => {
          const alreadyExist = wishlistItems.some((existingItem: { id: any }) => existingItem.id === item.id);
          if (!alreadyExist) {
            dispatch(addToWishlist(item));
          }
        });
      } catch (error) {
        console.error("Error fetching cart and wishlist:", error);
        Toast.show('Failed to fetch data', Toast.SHORT);
      }
    };

    fetchCartAndWishlist();

    
  }, [dispatch, bagItems, wishlistItems]);
};

export default useCartAndWishlist;

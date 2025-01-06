import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {   shirts, jeans, shoes, watches, products, OversizedHoodies, RelaxedFitJeans, SloganTees, PyjamaTrouser, OversizedShirts, kurtas, tops, sarees, makeup, skincare, fragrances, grooming,appliances, decor, bedlinen, cookware, dinnerware, storage  } from '../utils/mockdata';

export const saveSearchToFirestore = async (term: string, type: any) => {
  try {
    const userId = auth().currentUser?.uid;
    if (!userId) return;

    const searchRef = firestore()
      .collection('users')
      .doc(userId)
      .collection('recentSearches');

    const existingSearch = await searchRef.where('term', '==', term).get();
    if (!existingSearch.empty) {
      console.log('Search term already exists',term);
      return;
    }

    const allItems = [
      ...shirts, ...jeans, ...shoes, ...watches, ...products,
      ...OversizedShirts, ...OversizedHoodies, ...RelaxedFitJeans, ...SloganTees, ...PyjamaTrouser, ...kurtas, ...makeup, ...skincare, ...fragrances, ...grooming,...appliances,...decor,...bedlinen,...cookware,...dinnerware,...storage,...sarees,...tops
    ];

    const item = allItems.find(
      item =>
        item.brand.toLowerCase().includes(term.toLowerCase()) ||
        item.type.toLowerCase().includes(term.toLowerCase()),
    );

    const image = item ? item.image : null;

    await searchRef.add({
      term,
      type,
      image,
      timestamp: firestore.FieldValue.serverTimestamp(),
    });
  console.log('term', term)
  } catch (error) {
    console.error('Error saving search term:', error);
  }
};


export const fetchRecentSearches = async () => {
  try {
    const userId = auth().currentUser?.uid;

    const searchRef = firestore()
      .collection('users')
      .doc(userId)
      .collection('recentSearches')
      .orderBy('timestamp', 'desc');

    const snapshot = await searchRef.get();
    const searches = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return searches;
  } catch (error) {
    console.error('Error fetching recent searches:', error);
    return [];
  }
};

export const deleteRecentSearch = async (id: string | undefined) => {
  try {
    const userId = auth().currentUser?.uid;

    await firestore()
      .collection('users')
      .doc(userId)
      .collection('recentSearches')
      .doc(id)
      .delete();
  } catch (error) {
    console.error('Error deleting recent search:', error);
  }
};

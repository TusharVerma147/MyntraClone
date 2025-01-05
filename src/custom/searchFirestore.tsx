import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { shirts, jeans, shoes, watches, products, kurtas, OversizedHoodies, RelaxedFitJeans, SloganTees, PyjamaTrouser, OversizedShirts, skincare, fragrances } from '../utils/mockdata';

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
      ...shirts,
      ...jeans,
      ...shoes,
      ...watches,
      ...products,
      ...kurtas,
      ...OversizedHoodies,
      ...RelaxedFitJeans,
      ...SloganTees,
      ...PyjamaTrouser,
      ...OversizedShirts,
      ...skincare,
      ...fragrances,
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

    console.log('Search term saved to Firestore');
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

    if (!userId) {
      console.error('User is not logged in');
      return;
    }

    await firestore()
      .collection('users')
      .doc(userId)
      .collection('recentSearches')
      .doc(id)
      .delete();

    console.log('Search deleted');
  } catch (error) {
    console.error('Error deleting recent search:', error);
  }
};

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';



export const saveSearchToFirestore = async (itemId: string) => {
  try {
    const userId = auth().currentUser?.uid;
    if (!userId) return;

    const searchRef = firestore()
      .collection('users')
      .doc(userId)
      .collection('recentSearches');


    const existingSearch = await searchRef.where('itemId', '==', itemId).get();
    if (!existingSearch.empty) {
      console.log('Search already exists for item with id:', itemId);
      return;
    }


    await searchRef.add({
      itemId,
      timestamp: firestore.FieldValue.serverTimestamp(),
    });

    console.log('Search saved with itemId:', itemId);
  } catch (error) {
    console.error('Error saving search item:', error);
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
      itemId: doc.data().itemId,
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

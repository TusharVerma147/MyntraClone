import { View, ActivityIndicator ,LogBox} from 'react-native';
import React, { useState, useEffect } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import RootNavigator from './src/navigator';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';

const App = () => {
  LogBox.ignoreAllLogs()
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user: FirebaseAuthTypes.User | null) => {
      setUser(user);
      if (initializing) setInitializing(false);
    });

    return unsubscribe;
  }, [initializing]);

 


  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;

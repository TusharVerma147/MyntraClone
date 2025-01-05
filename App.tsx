import { LogBox} from 'react-native';
import React, {} from 'react';
import RootNavigator from './src/navigator';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';

const App = () => {
  LogBox.ignoreAllLogs()
 


  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;

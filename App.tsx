import {View, Text} from 'react-native';
import React from 'react';
import AppStack from './Src/Navigation/AppStack';
import {Provider} from 'react-redux';
import {store} from './Src/Store/Store';

const App = () => {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};

export default App;

import {View, Text, Platform} from 'react-native';
import React from 'react';
import AppStack from './Src/Navigation/AppStack';
import {Provider} from 'react-redux';
import {store} from './Src/Store/Store';
import Toast from 'react-native-toast-message';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BG_COLOR} from './Src/Theme/Colors';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: BG_COLOR,
          paddingTop: Platform.OS === 'ios' ? 50 : 0,
        }}>
        <AppStack />
        <Toast />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

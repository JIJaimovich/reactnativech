import React from 'react';
import { ActivityIndicator } from 'react-native';
import Root from "./src/index";
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
  const [loaded] = useFonts({
    'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-Light': require('./assets/fonts/OpenSans-Light.ttf'),
  })

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import Routes from './src/routes/routes';
import {navigationRef} from './src/shared/nav.services';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from '@redux';
import {persistor} from './src/shared/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Splash} from '@screens';

const App = () => {
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
      console.log('splash');
    }, 3000);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer ref={navigationRef}>
            {isSplash ? <Splash /> : <Routes />}
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

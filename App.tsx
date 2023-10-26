import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import Routes from './src/routes/routes';
import {navigationRef} from '@services';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from '@redux';
import {persistor} from './src/shared/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Splash} from '@screens';
import {useColorScheme} from 'react-native';
import {defaultTheme, darkThemeStyle} from '@theme';

const App = () => {
  const [isSplash, setIsSplash] = useState(true);
  const [isDarkEnabled, setIsDarkEnabled] = useState(false);
  const [active, setActive] = useState(true);
  let appTheme = isDarkEnabled ? darkThemeStyle : defaultTheme;

  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
      console.log('splash');
    }, 3000);
  }, []);

  // useEffect(() => {
  //   let listener = EventRegister.addEventListener('appThemeChange', data => {
  //     setIsEnabledOne(data);
  //   });
  //   return () => {
  //     EventRegister.removeEventListener(listener as any);
  //   };
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     let isEnabled = await getDataFromUserDefaults('THEME_KEY');

  //     if (
  //       (isEnabled !== undefined && isEnabled === 'true') ||
  //       (isEnabled === undefined && colorScheme === 'dark')
  //     ) {
  //       setIsEnabledOne(true);
  //       setIsDarkModeEnabled(true);
  //       appTheme = darkThemeStyle;
  //       console.log('dark_mode');
  //     } else {
  //       console.log('light_mode');
  //     }
  //   })();
  // }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer ref={navigationRef} theme={appTheme as any}>
            {isSplash ? <Splash /> : <Routes />}
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

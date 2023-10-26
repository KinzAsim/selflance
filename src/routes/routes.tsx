import React from 'react';
import AuthStack from './stacks/authStacks';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import MainTabs from './tabs/mainTabs';

const Routes = () => {
  const {isLoggedIn} = useSelector((state: any) => state.root.user);

  return <>{isLoggedIn ? <MainTabs /> : <AuthStack />}</>;
};

export default Routes;

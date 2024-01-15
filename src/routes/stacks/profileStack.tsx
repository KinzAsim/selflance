import React from 'react';
import {Profile, UpgradeAccount} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const ProfileStack = ({route}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="UpgradeAccount" component={UpgradeAccount} />
    </Stack.Navigator>
  );
};

export default ProfileStack;

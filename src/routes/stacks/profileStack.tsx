import React from 'react';
import {
  AddPortfolio,
  CreateWorkspace,
  MyProfile,
  Portfolio,
  Profile,
  WorkSpace,
} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const ProfileStack = ({route}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="WorkSpace" component={WorkSpace} />
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="Portfolio" component={Portfolio} />
      <Stack.Screen name="AddPortfolio" component={AddPortfolio} />
      <Stack.Screen name="CreateWorkspace" component={CreateWorkspace} />
    </Stack.Navigator>
  );
};

export default ProfileStack;

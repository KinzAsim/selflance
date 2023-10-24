import React from 'react';
import {Home, AllCategories} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeStack = ({route, navigation}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AllCategories" component={AllCategories} />
    </Stack.Navigator>
  );
};

export default HomeStack;

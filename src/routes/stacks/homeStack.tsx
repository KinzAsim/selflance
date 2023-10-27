import React from 'react';
import {
  Home,
  AllCategories,
  CategoryItemDetail,
  CategoryDetails,
} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeStack = ({route, navigation}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AllCategories" component={AllCategories} />
      <Stack.Screen name="CategoryItemDetail" component={CategoryItemDetail} />
      <Stack.Screen name="CategoryDetails" component={CategoryDetails} />
    </Stack.Navigator>
  );
};

export default HomeStack;

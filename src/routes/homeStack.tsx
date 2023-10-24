import React from 'react';
import {GraphicAndDesign, Home} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeStack = ({route}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="GraphicAndDesign" component={GraphicAndDesign} />
    </Stack.Navigator>
  );
};

export default HomeStack;

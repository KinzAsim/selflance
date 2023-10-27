import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ForgetPassword, Login, SignUp, GraphicAndDesign} from '@screens';

const Stack = createStackNavigator();

const AuthStack = ({route}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="GraphicAndDesign" component={GraphicAndDesign} />
    </Stack.Navigator>
  );
};

export default AuthStack;

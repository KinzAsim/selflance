import React from 'react';
import {
  ChatScreen,
  ForgetPassword,
  GraphicAndDesign,
  Home,
  Login,
  MessagesScreen,
  SignUp,
  Splash,
} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

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

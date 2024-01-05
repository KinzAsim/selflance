import React from 'react';
import {
  ForgetPassword,
  GraphicAndDesign,
  Login,
  OnBoardScreen,
  SignUp,
  Splash,
} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AuthStack = ({route}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />

      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="GraphicAndDesign" component={GraphicAndDesign} />
    </Stack.Navigator>
  );
};

export default AuthStack;

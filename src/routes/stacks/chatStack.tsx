import React from 'react';
import {Agreement, Chat, ChatPage, CreateOffer} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const ChatStack = ({route}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="ChatPage" component={ChatPage} />
      <Stack.Screen name="CreateOffer" component={CreateOffer} />
      <Stack.Screen name="Agreement" component={Agreement} />
    </Stack.Navigator>
  );
};

export default ChatStack;

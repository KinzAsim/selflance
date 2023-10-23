import {navigate} from '@services';
import React, {useState} from 'react';
import {RF, WHITE, tab_gray} from '@theme';
import HomeStack from '../stacks/homeStack';
import ChatStack from '../stacks/chatStack';
import OrderStack from '../stacks/orderStack';
import ProfileStack from '../stacks/profileStack';
import {useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {calendar, chat, home, profile} from '@assets';
import {View, Image, Pressable, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MainTabs = ({navigation}: any) => {
  const theme: any = useTheme();
  const dispatch = useDispatch();
  const styles = useStyles(theme.colors);
  const [activeStack, setActiveStack] = useState('HomeStack');

  return (
    <Tab.Navigator
      screenOptions={({route: {name}}) => ({
        headerShown: false,
        // keyboardHidesTabBar: true,
        // tabBarStyle: styles.tabBarStyle,
        // tabBarIconStyle: styles.tabIcon,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({tintColor, color, focused}: any) => (
            <TabBarIcon
              source={home}
              color={color}
              styles={styles}
              focused={focused}
              stack={'HomeStack'}
              activeStack={activeStack}
              setActiveStack={setActiveStack}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={ChatStack}
        options={{
          // headerShown: false,
          tabBarIcon: ({tintColor, color, focused}: any) => (
            <TabBarIcon
              source={chat}
              color={color}
              styles={styles}
              focused={focused}
              stack={'ChatStack'}
              activeStack={activeStack}
              setActiveStack={setActiveStack}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrderStack}
        options={{
          // headerShown: false,
          tabBarIcon: ({tintColor, color, focused}: any) => (
            <TabBarIcon
              source={calendar}
              color={color}
              styles={styles}
              focused={focused}
              stack={'OrderStack'}
              activeStack={activeStack}
              setActiveStack={setActiveStack}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          // headerShown: false,
          tabBarIcon: ({tintColor, color, focused}: any) => (
            <TabBarIcon
              source={profile}
              color={color}
              styles={styles}
              focused={focused}
              stack={'ProfileStack'}
              activeStack={activeStack}
              setActiveStack={setActiveStack}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const onPressTab = (
  stack: any,
  activeStack: any,
  setActiveStack: any,
  handleCaptureFlag: any,
) => {
  navigate(stack);
  setActiveStack(stack);
  if (stack == 'ScanStack' && activeStack == 'ScanStack') {
    handleCaptureFlag();
  }
};

const TabBarIcon = ({
  color,
  source,
  styles,
  focused,
  colorCode,
  stack,
  activeStack,
  setActiveStack,
  handleCaptureFlag,
}: {
  source: any;
  styles?: any;
  color: string;
  focused?: any;
  colorCode?: any;
  stack: any;
  activeStack?: any;
  setActiveStack?: any;
  handleCaptureFlag?: any;
}) => {
  return (
    <Pressable
      onPress={() =>
        onPressTab(stack, activeStack, setActiveStack, handleCaptureFlag)
      }>
      <Image
        source={source}
        style={[
          styles.image,
          {
            tintColor: color,
          },
        ]}
        resizeMode={'contain'}
      />
    </Pressable>
  );
};

const useStyles = (colors: any) =>
  StyleSheet.create({
    image: {width: RF(18), height: RF(18), opacity: 100, tintColor: '#fffff'},
    img: {},
    tabIcon: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabBarStyle: {
      width: '100%',
      backgroundColor: 'red',
      // marginTop: -20,
      paddingBottom: 10,
    },
  });

export default MainTabs;

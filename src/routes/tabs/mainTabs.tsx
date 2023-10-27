import {navigate} from '@services';
import React, {useState} from 'react';
import HomeStack from '../stacks/homeStack';
import ChatStack from '../stacks/chatStack';
import OrderStack from '../stacks/orderStack';
import {useDispatch} from 'react-redux';
import ProfileStack from '../stacks/profileStack';
import {useTheme} from '@react-navigation/native';
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
        keyboardHidesTabBar: true,
        // tabBarStyle: styles.tabBarStyle,
        // tabBarIconStyle: styles.tabIcon,
        // keyboardHidesTabBar: true,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: '#00538F',
        tabBarInactiveTintColor: '#949494',
        tabBarIconStyle: styles.tabIcon,
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
              stack={'Home'}
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
              stack={'Chats'}
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
              stack={'Orders'}
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
              stack={'Profile'}
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
  navigate(stack, {});
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
      style={{
        height: 8,
        // width: 30,
        // alignItems: 'center',
        // justifyContent: 'center',
      }}
      onPress={() => {
        onPressTab(stack, activeStack, setActiveStack, handleCaptureFlag);
      }}>
      <Image
        source={source}
        style={[
          styles.image,
          {
            tintColor: focused ? '#00538F' : '#949494',
          },
        ]}
        resizeMode={'contain'}
      />
    </Pressable>
  );
};

const useStyles = (colors: any) =>
  StyleSheet.create({
    image: {width: 24, height: 24, opacity: 100},
    img: {},
    tabIcon: {
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    tabBarStyle: {
      height: 75,
      backgroundColor: '#fff',
      paddingBottom: 15.5,
    },
  });

export default MainTabs;

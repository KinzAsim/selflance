import {calendar, chat, home, profile} from '@assets';
import {navigate} from '@services';
import React, {useState} from 'react';
import {RF, WHITE, tab_gray} from '@theme';
import {getIsDarkModeEnabled} from '@utils';
import HomeStack from '../stacks/homeStack';
import ChatStack from '../stacks/chatStack';
import OrderStack from '../stacks/orderStack';
import ProfileStack from '../stacks/profileStack';

import {useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {View, Image, Pressable, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MainTabs = ({navigation}: any) => {
  const theme: any = useTheme();
  const dispatch = useDispatch();
  const styles = useStyles(theme.colors);
  const [activeStack, setActiveStack] = useState('HomeStack');
  const {colorCode, captureFlag} = useSelector((state: any) => state.root.user);

  return (
    <Tab.Navigator screenOptions={({route: {name}}) => ({})}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({tintColor, color, focused}: any) => (
            <TabBarIcon
              source={home}
              color={color}
              activeStack={activeStack}
              setActiveStack={setActiveStack}
              styles={styles}
              focused={focused}
              stack={'HomeStack'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={ChatStack}
        options={{
          headerShown: false,

          tabBarIcon: ({tintColor, color, focused}: any) => (
            <TabBarIcon
              source={chat}
              color={color}
              activeStack={activeStack}
              setActiveStack={setActiveStack}
              styles={styles}
              focused={focused}
              stack={'ChatStack'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrderStack}
        options={{
          headerShown: false,

          tabBarIcon: ({tintColor, color, focused}: any) => (
            <TabBarIcon
              source={calendar}
              color={color}
              activeStack={activeStack}
              setActiveStack={setActiveStack}
              styles={styles}
              focused={focused}
              stack={'OrderStack'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          headerShown: false,

          tabBarIcon: ({tintColor, color, focused}: any) => (
            <TabBarIcon
              source={profile}
              color={color}
              activeStack={activeStack}
              setActiveStack={setActiveStack}
              styles={styles}
              focused={focused}
              stack={'ProfileStack'}
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
      <View
        style={{
          width: RF(50),
          height: RF(50),
          alignItems: 'center',
          borderRadius: RF(50),
          justifyContent: 'center',
        }}>
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
      </View>
    </Pressable>
  );
};

const useStyles = (colors: any) =>
  StyleSheet.create({
    image: {width: RF(18), height: RF(18), opacity: 100, tintColor: '#fffff'},
    img: {},
    tabIcon: {
      marginTop: RF(10),
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabBarStyle: {
      width: '90%',
      height: '8%',
      borderWidth: 0,
      borderTopWidth: 0,
      paddingBottom: RF(10),
      backgroundColor: WHITE,
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: RF(100),
      position: 'absolute',
      bottom: 15,
      left: 20,
      right: 20,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 0.5},
      shadowOpacity: 0.5,
      shadowRadius: 1,
    },
  });

export default MainTabs;

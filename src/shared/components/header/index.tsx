import React from 'react';
import Text from '../text';
import {notification, user} from '@assets';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {RF} from '@theme';

const Header = (props: any) => {
  const {handleLogOut, title} = props;
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        {/* <Pressable onPress={handleLogOut}>
          <Image source={user} style={styles.userImg} />
        </Pressable> */}
        <View>
          {/* <Text style={[styles.fs14, styles.fw400]}>Welcome!</Text> */}
          <Text style={[styles.fs20]} semiBold color={'#434343'}>
            {title}
          </Text>
        </View>
      </View>
      <View>
        <Image source={notification} style={styles.notificationImg} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 16,
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  userImg: {
    height: 46,
    width: 46,
    marginRight: 12,
  },
  notificationImg: {
    height: 24,
    width: 24,
  },
  textDark: {
    color: '#434343',
  },
  fs14: {
    fontSize: 14,
  },
  fs16: {
    fontSize: 16,
  },
  fs8: {
    fontSize: RF(18),
  },
  fs20: {
    fontSize: RF(20),
  },

  fw400: {
    fontWeight: '400',
  },
  fw600: {
    fontWeight: '600',
  },
});

export default Header;

import React from 'react';
import Text from '../text';
import {notification, user} from '@assets';
import {Image, Pressable, StyleSheet, View} from 'react-native';

const Header = (props: any) => {
  const {handleLogOut} = props;
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        <Pressable onPress={handleLogOut}>
          <Image source={user} style={styles.userImg} />
        </Pressable>
        <View>
          <Text style={[styles.fs14, styles.fw400]}>Welcome!</Text>
          <Text style={[styles.fs16, styles.fw600, styles.textDark]}>
            Hammad Khan
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
  fw400: {
    fontWeight: '400',
  },
  fw600: {
    fontWeight: '600',
  },
});

export default Header;

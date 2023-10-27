import React from 'react';
import {user} from '@assets';
import {Line, Text} from '@components';
import {Image, StyleSheet, View} from 'react-native';
import {RF, WHITE, dull_orange, mustard, txt_gray} from '@theme';

const ChatBox = ({
  name,
  message,
  time,
  count,
  unread,
}: {
  name?: any;
  message?: any;
  time?: any;
  count?: any;
  unread?: any;
}) => {
  return (
    <View style={{marginTop: RF(20)}}>
      <View style={styles.main}>
        <Image source={user} style={styles.img} />
        <View style={styles.msg}>
          <View style={styles.name}>
            <Text semiBold>{name}</Text>
            <Text medium color={txt_gray} style={{marginTop: RF(2)}}>
              {message}
            </Text>
          </View>
          <View>
            <Text color={txt_gray}>{time}</Text>
            {unread && (
              <View style={styles.count}>
                <Text color={WHITE}>{count}</Text>
              </View>
            )}
          </View>
        </View>
      </View>
      <Line />
    </View>
  );
};

const styles = StyleSheet.create({
  msg: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '85%',
  },
  count: {
    backgroundColor: dull_orange,
    borderRadius: RF(100),
    width: RF(20),
    height: RF(20),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: RF(14),
    marginTop: RF(7),
  },
  name: {
    marginLeft: RF(15),
  },
  main: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: RF(48),
    height: RF(48),
    borderWidth: 1,
    borderColor: mustard,
    borderRadius: RF(100),
  },
});

export default ChatBox;

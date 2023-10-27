import {RF} from '@theme';
import React from 'react';
import {back, heart} from '@assets';
import {Image, StyleSheet, View} from 'react-native';

const BackHeader = () => {
  return (
    <View style={styles.view}>
      <View style={styles.v_img}>
        <Image source={back} style={styles.img} />
      </View>

      <View style={styles.v_img}>
        <Image source={heart} style={styles.heart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: RF(20),
    marginTop: RF(55),
  },
  heart: {
    width: RF(17),
    height: RF(16),
    resizeMode: 'contain',
  },
  v_img: {
    width: RF(32),
    height: RF(32),
    borderRadius: RF(10),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  img: {
    width: RF(6),
    height: RF(13),
    resizeMode: 'contain',
  },
});

export default BackHeader;

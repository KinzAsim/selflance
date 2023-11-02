import React from 'react';
import {RF} from '@theme';
import {Text} from '@components';
import {star, user} from '@assets';
import {Image, StyleSheet, View} from 'react-native';

const ProfileText = ({ratings}: {ratings?: any}) => {
  return (
    <View style={styles.v2}>
      <View style={styles.imgV}>
        <Image source={user} style={styles.img} />
      </View>
      <View style={styles.v4}>
        <Text size={10}>Cc__creative</Text>
        <View style={styles.rating}>
          <Text size={10} regular>
            {ratings}
          </Text>
          <Image source={star} style={styles.star} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  v4: {marginLeft: RF(10)},
  v2: {flexDirection: 'row'},
  v3: {marginTop: RF(15), marginRight: RF(20)},

  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  star: {
    width: RF(10),
    height: RF(8),
    resizeMode: 'contain',
  },
  imgV: {
    width: RF(32),
    height: RF(32),
    borderRadius: RF(100),
    padding: 1,
  },
  img: {
    width: RF(31),
    height: RF(30),
    resizeMode: 'contain',
  },
});

export default ProfileText;

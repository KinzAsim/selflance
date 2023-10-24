import React from 'react';
import {RF} from '@theme';
import {Text} from '@components';
import {rightArrow} from '@assets';
import {Image, Pressable, StyleSheet, View} from 'react-native';

const SeeAll = ({
  title,
  source,
  onPress,
}: {
  title?: any;
  source?: any;
  onPress?: any;
}) => {
  return (
    <View style={styles.view}>
      <View style={styles.row}>
        <Image source={source} style={styles.img} />
        <Text size={15} semiBold>
          {title}
        </Text>
      </View>
      <Pressable style={styles.pressable} onPress={onPress}>
        <Text size={12} regular color={'#00538F'}>
          View All
        </Text>
        <Image source={rightArrow} style={styles.rightArrow} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: RF(22),
    height: RF(22),
    resizeMode: 'contain',
  },
  pressable: {flexDirection: 'row', alignItems: 'center'},
  rightArrow: {
    width: RF(5),
    height: RF(10),
    marginLeft: 5,
    resizeMode: 'contain',
  },
  textDark: {
    color: '#434343',
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: RF(16),
    justifyContent: 'space-between',
    paddingHorizontal: RF(16),
  },
});

export default SeeAll;

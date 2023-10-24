import React from 'react';
import {RF} from '@theme';
import {Text} from '@components';
import {rightArrow} from '@assets';
import {Image, StyleSheet, View} from 'react-native';

const ClickableBox = ({title, source}: {title?: any; source?: any}) => {
  return (
    <View style={styles.view}>
      <View style={styles.imgV}>
        <Image source={source} style={styles.img} />
        <Text size={14} style={styles.txt}>
          {title}
        </Text>
      </View>
      <Image source={rightArrow} style={styles.next} />
    </View>
  );
};

const styles = StyleSheet.create({
  txt: {
    marginLeft: RF(10),
  },
  imgV: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  next: {
    width: RF(15),
    height: RF(12),
    resizeMode: 'contain',
    marginRight: RF(10),
  },
  img: {
    width: RF(42),
    height: RF(42),
    resizeMode: 'contain',
  },
  view: {
    borderRadius: RF(30),
    borderWidth: 0.5,
    width: '100%',
    height: RF(58),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: RF(10),
    borderColor: '#CAC8C8',
    marginBottom: RF(10),
  },
});

export default ClickableBox;

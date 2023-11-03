import {RF} from '@theme';
import React from 'react';
import {back, heart} from '@assets';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';

interface Props {
  navigation: any;
  route: RouteProp<{
    params: {
      data?: any;
    };
  }>;
}
const BackHeader = (props: Partial<Props>) => {
  const {navigation} = props;
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.view}>
      <Pressable style={styles.v_img} onPress={handleBack}>
        <Image source={back} style={styles.img} />
      </Pressable>

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
    marginHorizontal: RF(20),
    marginTop: RF(55),
    width: '90%',
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

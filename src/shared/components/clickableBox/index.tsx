import React from 'react';
import {RF} from '@theme';
import {Text} from '@components';
import {rightArrow} from '@assets';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import {RouteProp} from '@react-navigation/native';

interface Props {
  source: any;
  title: string;
  onClick: any;
  navigation: any;
  route: RouteProp<{
    params: {
      data?: any;
    };
  }>;
}
const ClickableBox = (props: Partial<Props>) => {
  const {source, title, onClick} = props;
  return (
    <TouchableOpacity style={styles.view} onPress={onClick}>
      <View style={styles.imgV}>
        <Image source={source} style={styles.img} />
        <Text size={14} style={styles.txt}>
          {title}
        </Text>
      </View>
      <Image source={rightArrow} style={styles.next} />
    </TouchableOpacity>
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

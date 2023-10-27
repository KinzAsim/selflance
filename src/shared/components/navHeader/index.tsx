import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacityProps,
  Pressable,
} from 'react-native';
import React from 'react';
import {grayButton, RF} from '@theme';
import CloseButton from '../closeButton';
import {back} from '@assets';

interface Props extends TouchableOpacityProps {
  onPress?: any;
  navigteOnClose?: any;
  cancelCrossButton?: any;
}

const NavHeader = ({navigation}: any, props: Props) => {
  return (
    <View
      style={{
        height: RF(45),
        width: '100%',
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={{
          height: RF(32),
          width: RF(32),
          backgroundColor: grayButton,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image style={{height: RF(12), width: RF(10)}} source={back} />
      </Pressable>
      <CloseButton />
    </View>
  );
};

export default NavHeader;

const styles = StyleSheet.create({});

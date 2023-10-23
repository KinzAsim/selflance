import {StyleSheet, Pressable, Image} from 'react-native';
import React from 'react';
import {grayButton, RF} from '@theme';
import {close} from '@assets';

const CloseButton = () => {
  return (
    <Pressable
      // onPress={navigteOnClose}
      style={{
        height: RF(32),
        width: RF(32),
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -12,
        backgroundColor: grayButton,
      }}>
      <Image source={close} style={styles.close_Icon} resizeMode={'contain'} />
    </Pressable>
  );
};

export default CloseButton;

const styles = StyleSheet.create({
  close_Icon: {height: RF(32), width: RF(32)},
});

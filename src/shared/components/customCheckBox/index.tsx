import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {primary, RF} from '@theme';
import {checkbox} from '@assets';

const CustomCheckBox = () => {
  const [check, setCheck] = useState(false);
  const handlePress = () => {
    setCheck(!check);
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{height: RF(20), width: RF(20), marginTop: RF(2)}}>
      <Image
        source={checkbox}
        style={{
          height: '100%',
          width: '100%',
          tintColor: check ? primary : 'transparent',
          borderWidth: check ? 0 : 1,
          borderColor: primary,
          borderRadius: 5,
        }}
      />
    </TouchableOpacity>
  );
};

export default CustomCheckBox;

const styles = StyleSheet.create({});

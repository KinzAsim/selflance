import {StyleSheet, View} from 'react-native';
import React from 'react';
import {RF} from '@theme';
interface Props {
  children?: any;
  bgColor?: any;
  radius?: any;
  vertical?: any;
  containerStyle?: any;
}
const CustomCard = ({
  children,
  bgColor,
  radius,
  vertical,
  containerStyle,
}: Props) => {
  return (
    <View
      style={[
        {
          width: '100%',
          backgroundColor: bgColor ? bgColor : 'rgba(248, 248, 248, 1)',
          paddingHorizontal: RF(20),
          borderRadius: radius,
          paddingVertical: vertical ? vertical : RF(24),
          marginTop: RF(16),
        },
        containerStyle,
      ]}>
      {children}
    </View>
  );
};

export default CustomCard;

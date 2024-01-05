import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import {primary, RF, textColor, WHITE} from '@theme';

interface Props extends TouchableOpacityProps {
  onPress?: any;
  title?: any;
  height?: any;
  width?: any;
  disabled?: any;
  grayColor?: any;
  color?: any;
  f_Size?: any;
  buttonStyle?: any;
}
const CustomButton = (props: Props) => {
  const {height, disabled, grayColor, color, f_Size, buttonStyle} = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.button,
        buttonStyle,
        {
          height: height ? height : RF(55),
          backgroundColor: color ? color : primary,
        },
      ]}
      onPress={props?.onPress}>
      <Text
        style={[
          styles.medium,
          {
            color: grayColor ? grayColor : WHITE,
            fontSize: f_Size ? f_Size : RF(16),
          },
        ]}>
        {props?.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  medium: {color: '#fff', fontWeight: '600'},
});

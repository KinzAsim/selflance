import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import {primary, RF, textColor} from '@theme';

interface Props extends TouchableOpacityProps {
  onPress?: any;
  title?: any;
  height?: any;
  disabled?: any;
  grayColor?: any;
  color?: any;
}
const CustomButton = (props: Props) => {
  const height = props?.height;
  const disabled = props?.disabled;
  const grayColor = props?.grayColor;
  const color = props.color;
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.button,
        {
          height: height ? height : RF(55),
          backgroundColor: color ? color : primary,
        },
      ]}
      onPress={props?.onPress}>
      <Text style={[styles.medium, {color: grayColor}]}>{props?.title}</Text>
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
  medium: {fontSize: RF(16), color: '#fff', fontWeight: '600'},
});

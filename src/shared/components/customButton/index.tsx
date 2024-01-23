import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import {primary, RF, textColor, WHITE} from '@theme';
import {Image} from 'react-native-svg';
import Text from '../text';

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
  renderIcon?: any;
}
const CustomButton = (props: Props) => {
  const {height, disabled, renderIcon, grayColor, color, f_Size, buttonStyle} =
    props;
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.button,

        {
          height: height ? height : RF(55),
          backgroundColor: color ? color : primary,
        },
        buttonStyle,
      ]}
      onPress={props?.onPress}>
      <Text
        regular
        style={[
          styles.medium,
          {
            color: grayColor ? grayColor : WHITE,
            fontSize: f_Size ? f_Size : RF(16),
          },
        ]}>
        {props?.title}
      </Text>
      {renderIcon && <View>{renderIcon()}</View>}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: primary,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
  },
  medium: {color: '#fff', fontWeight: '600'},
});

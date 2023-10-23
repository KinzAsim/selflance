import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import {primary, RF} from '@theme';

interface Props extends TouchableOpacityProps {
  onPress?: any;
  title?: any;
}
const CustomButton = (props: Props) => {
  return (
    <TouchableOpacity style={[styles.button]} onPress={props?.onPress}>
      <Text style={styles.medium}>{props?.title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    height: RF(55),
    width: '100%',
    backgroundColor: primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  medium: {fontSize: RF(16), color: '#fff', fontWeight: '600'},
});

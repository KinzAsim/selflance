import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  TextProps,
} from 'react-native';
import React, {useState} from 'react';
import {lightText, primary, RF, textColor} from '@theme';
import {checkbox} from '@assets';
import Text from '../text';

interface Props extends TextProps {
  label?: any;
  isTop?: any;
}

const CustomCheckBox = (props: Props) => {
  const [check, setCheck] = useState(false);
  const {label, isTop} = props;
  const handlePress = () => {
    setCheck(!check);
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        // width: '100%',
        alignItems: 'center',
        marginTop: isTop ? isTop : 0,
      }}>
      <TouchableOpacity
        onPress={handlePress}
        style={{
          height: RF(20),
          width: RF(20),
        }}>
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
      <Text
        regular
        color={check ? primary : lightText}
        size={12}
        style={{marginLeft: 5}}>
        {label}
      </Text>
    </View>
  );
};

export default CustomCheckBox;

const styles = StyleSheet.create({});

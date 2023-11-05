import {Image, StyleSheet, TouchableOpacityProps, View} from 'react-native';
import React from 'react';
import Text from '../text';
import {medium_Gray, RF, textColor} from '@theme';
import {rating} from '@assets';

interface Props extends TouchableOpacityProps {
  title?: any;
  rate?: any;
}

const RatingSection = (props: Props) => {
  const {title, rate} = props;
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: RF(5),
        justifyContent: 'space-between',
      }}>
      <Text size={14} regular color={textColor}>
        {title}
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text color={medium_Gray} regular size={12}>
          {rate}
        </Text>
        <Image
          source={rating}
          style={{
            height: RF(9),
            width: RF(9),
            resizeMode: 'contain',
            marginLeft: 5,
          }}
        />
      </View>
    </View>
  );
};

export default RatingSection;

const styles = StyleSheet.create({});

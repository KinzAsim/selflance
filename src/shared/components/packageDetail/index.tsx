import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {gray, RF} from '@theme';
import {tick} from '@assets';
import Text from '../text';
import {TouchableOpacityProps} from 'react-native';

interface Props extends TouchableOpacityProps {
  title?: any;
  tintColor?: any;
}

const PackageDetail = (props: Props) => {
  const {title, tintColor} = props;
  return (
    <View style={{alignItems: 'center', flexDirection: 'row'}}>
      <Image
        source={tick}
        style={{
          height: RF(16),
          width: RF(16),
          resizeMode: 'contain',
          marginRight: RF(10),
          tintColor: tintColor,
        }}
      />
      <Text color={gray} size={14} regular>
        {title}
      </Text>
    </View>
  );
};

export default PackageDetail;

const styles = StyleSheet.create({});

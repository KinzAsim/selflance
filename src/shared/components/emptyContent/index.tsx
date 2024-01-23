import {StyleSheet, View} from 'react-native';
import React from 'react';
import Text from '../text';
import {extraLight, textColor} from '@theme';

const EmptyContent = ({title}: {title?: any}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text regular color={textColor}>
        {title}
      </Text>
    </View>
  );
};

export default EmptyContent;

const styles = StyleSheet.create({});

import {RF} from '@theme';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const Line = ({mh, mt}: {mh?: any; mt?: any}) => {
  return (
    <View
      style={[
        styles.line,
        {marginHorizontal: mh ? RF(20) : 0, marginTop: mt ? mt : RF(20)},
      ]}
    />
  );
};

export default Line;

const styles = StyleSheet.create({
  line: {
    height: RF(1),
    backgroundColor: '#000000',
    opacity: 0.2,
  },
});

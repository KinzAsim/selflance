import {RF} from '@theme';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const Line = ({mh}: {mh?: any}) => {
  return <View style={[styles.line, {marginHorizontal: mh ? RF(20) : 0}]} />;
};

export default Line;

const styles = StyleSheet.create({
  line: {
    height: RF(1),
    backgroundColor: '#000000',
    opacity: 0.2,
    marginTop: RF(20),
  },
});

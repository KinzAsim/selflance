import React from 'react';
import {RF} from '@theme';
import GigCard from '../gigCard';
import {ScrollView, StyleSheet, View} from 'react-native';

const DetailBox = ({data}: {data?: any}) => {
  return (
    <View style={styles.view}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((d: any, index: any) => (
          <GigCard data={d} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {height: RF(247.14), paddingLeft: RF(16), marginBottom: RF(24)},
});

export default DetailBox;

import {RF} from '@theme';
import React from 'react';
import {CategoryCard} from '@components';
import {View, ScrollView, StyleSheet} from 'react-native';

const HorizontalList = ({data}: {data?: any}) => {
  return (
    <View style={styles.category}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((d: any, index: any) => (
          <CategoryCard data={d} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  category: {height: RF(60.7), marginBottom: RF(24)},
});

export default HorizontalList;

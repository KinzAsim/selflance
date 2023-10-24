import {RF} from '@theme';
import {categoryData} from '@utils';
import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {CategoryCard} from '@components';

const HorizontalList = () => {
  return (
    <View style={styles.category}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categoryData.map((d: any, index: any) => (
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

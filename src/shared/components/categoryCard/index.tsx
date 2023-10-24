import React from 'react';
import {RF} from '@theme';
import Text from '../text';
import {View, Image, StyleSheet} from 'react-native';

const CategoryCard = (props: any) => {
  const {data, index} = props;
  return (
    <View
      style={[
        styles.categoryCardContainer,
        styles.row,
        {marginLeft: index === 0 ? RF(15) : 0},
      ]}>
      <Image source={data.img} style={styles.categoryImg} />
      <Text size={14}>{data.title}</Text>
      {/* <Text >{data.subTitle}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {flexDirection: 'row', alignItems: 'center'},
  categoryCardContainer: {
    height: RF(60.7),
    paddingRight: RF(15),
    // width: RF(190),
    borderRadius: 39,
    padding: RF(8),
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    marginRight: 8,
  },
  categoryImg: {
    width: 44.7,
    height: 44.7,
    marginRight: 8,
  },
});

export default CategoryCard;

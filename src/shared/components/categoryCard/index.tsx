import React from 'react';
import Text from '../text';
import {View, Image, StyleSheet} from 'react-native';

const CategoryCard = (props: any) => {
  const {data} = props;
  return (
    <View style={[styles.categoryCardContainer, styles.row]}>
      <Image source={data.img} style={styles.categoryImg} />
      <View>
        <Text size={14}>{data.title}</Text>
        {/* <Text >{data.subTitle}</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {flexDirection: 'row', alignItems: 'center'},
  categoryCardContainer: {
    height: 60.7,
    width: 177.7,
    borderRadius: 39,
    padding: 8,
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

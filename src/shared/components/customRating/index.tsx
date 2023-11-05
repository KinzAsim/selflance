import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  View,
  TouchableOpacityProps,
} from 'react-native';
import React, {useState} from 'react';
import {unselectStar, rating} from '@assets'; // Import the selected star image as well
import {BLACK, medium_Gray, RF} from '@theme';
import {star} from '@utils';
import Text from '../text';
import RatingSection from '../ratingSection';

interface Props extends TouchableOpacityProps {
  selectedStarIndex?: any;
  size?: any;
  norate?: any;
  onPress: (index: any) => void;
  sectionTrue?: any;
  isTop?: any;
}

const CustomRating = (props: Props) => {
  const {selectedStarIndex, onPress, size, sectionTrue, isTop, norate} = props;

  return (
    <>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginTop: isTop}}>
        {star.map((d, index) => (
          <Pressable key={index} onPress={() => onPress(index)}>
            <Image
              source={index <= selectedStarIndex ? rating : unselectStar}
              style={{
                height: size,
                width: size,
                resizeMode: 'contain',
                marginRight: 5,
              }}
            />
          </Pressable>
        ))}
        {!norate && (
          <Text
            size={20}
            semiBold
            color={BLACK}
            style={{marginLeft: 5, top: 3}}>
            5.0
          </Text>
        )}
      </View>
      <>
        {sectionTrue && (
          <View style={{marginTop: RF(10)}}>
            <RatingSection title={'Seller Communication'} rate={'5.0'} />
            <RatingSection title={'Would Recommend'} rate={'5.0'} />
            <RatingSection title={'Service As Described'} rate={'5.0'} />
          </View>
        )}
      </>
    </>
  );
};

export default CustomRating;

const styles = StyleSheet.create({});

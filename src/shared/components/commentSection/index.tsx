import {Image, StyleSheet, TouchableOpacityProps, View} from 'react-native';
import React from 'react';
import {darkBlue, low_gray, primary, RF, semiHeading} from '@theme';
import {user1} from '@assets';
import Text from '../text';
import CustomRating from '../customRating';

interface Props extends TouchableOpacityProps {
  source?: any;
}

const CommentSection = (props: Props) => {
  const {source} = props;
  const onPress = () => {};

  return (
    <View style={{marginTop: RF(20)}}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
        }}>
        <Image style={{height: RF(40), width: RF(40)}} source={source} />
        <View
          style={{
            justifyContent: 'center',
            alignSelf: 'flex-start',
            marginLeft: RF(10),
          }}>
          <Text semiBold color={darkBlue}>
            Valena Belava
          </Text>
          <CustomRating size={RF(14)} onPress={onPress} norate />
        </View>
        <Text regular color={low_gray} style={{position: 'absolute', right: 0}}>
          16/12/2020
        </Text>
      </View>
      <Text
        regular
        color={semiHeading}
        style={{
          width: '70%',
          alignSelf: 'center',
          marginVertical: RF(5),
          marginLeft: 8,
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    </View>
  );
};

export default CommentSection;

const styles = StyleSheet.create({});

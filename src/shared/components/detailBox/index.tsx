import React from 'react';
import {RF} from '@theme';
import GigCard from '../gigCard';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacityProps,
} from 'react-native';
import {Pressable} from 'react-native';

interface Props extends TouchableOpacityProps {
  data?: any;
  onPress?: () => void;
}

const DetailBox = (props: Props) => {
  const {data, onPress} = props;
  return (
    <View style={styles.view}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((d: any, index: any) => (
          <Pressable onPress={onPress}>
            <GigCard data={d} key={index} index={index} />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {height: RF(270), marginBottom: RF(24)},
});

export default DetailBox;

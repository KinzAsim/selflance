import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ViewProps,
} from 'react-native';
import React from 'react';
import {search} from '@assets';
import {RF} from '@theme';

interface Props extends ViewProps {
  height?: any;
  b_Margin?: any;
}
// NOTE:
// WHEN YOU USE THIS SEARCH COMPONENT IT IS RECOMENDED TO WRAP THIS COMPONENT WITH VIEW OTHERWISE IT THROUGHS AN ERROR

const SmallSearch = (props: Props) => {
  const {height, b_Margin} = props;

  return (
    <View
      style={[
        styles.searchContainer,
        {
          height: height ? height : RF(50),
          marginBottom: b_Margin ? b_Margin : 10,
        },
      ]}>
      <Image
        source={search}
        style={[styles.searchImg, {height: height / 2.5, width: height / 2.5}]}
      />

      <TextInput
        style={[styles.input, {fontSize: height / 3}]}
        placeholder="Search Here....."

        // value={text}
        // onChangeText={onChange}
      />
    </View>
  );
};

export default SmallSearch;

const styles = StyleSheet.create({
  searchContainer: {
    width: '100%',
    height: 50,
    backgroundColor: '#F8F8F8',
    paddingLeft: 17,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#F8F8F8',
    height: 'auto',
    width: '80%',
    borderRadius: 8,
    // paddingHorizontal: 19,
    paddingVertical: 0,
    marginLeft: 8,
  },
  searchImg: {
    height: 20,
    width: 20,
  },
});

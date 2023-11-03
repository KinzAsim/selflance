import React from 'react';
import {search} from '@assets';
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

interface Props extends TouchableOpacityProps {
  width?: any;
  height?: any;
}

const Search = (props: Props) => {
  const {width, height} = props;
  return (
    <View style={[styles.searchContainer, {height: height ? height : 50}]}>
      <Image source={search} style={styles.searchImg} />

      <TextInput
        style={[styles.input, {width: width ? width : '92%'}]}
        placeholder="Search Here....."
        placeholderTextColor={'#949494'}
        // value={text}
        // onChangeText={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    width: '100%',
    height: 50,
    backgroundColor: '#F8F8F8',
    paddingLeft: 17,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#F8F8F8',
    height: 'auto',
    width: '92%',
    borderRadius: 8,
    // paddingHorizontal: 19,
    paddingVertical: 17,
    marginLeft: 8,
  },
  searchImg: {
    height: 20,
    width: 20,
  },
});

export default Search;

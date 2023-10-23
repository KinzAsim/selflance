import {search} from '@assets';
import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';

const Search = () => {
  return (
    <View style={styles.searchContainer}>
      <Image source={search} style={styles.searchImg} />

      <TextInput
        style={styles.input}
        placeholder="Search Here....."
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
    marginBottom: 24,
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

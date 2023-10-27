import {RF} from '@theme';
import React from 'react';
import {Text} from '@components';
import {back, menu, search} from '@assets';
import {Image, StyleSheet, View} from 'react-native';

const TextHeader = ({
  title,
  _back,
  _search,
  _source1,
  _source2,
}: {
  title?: any;
  _back?: any;
  _search?: any;
  _source1?: any;
  _source2?: any;
}) => {
  return (
    <View style={styles.main}>
      {_back && (
        <View style={styles.iV}>
          <Image source={back} style={styles.img} />
        </View>
      )}
      <View style={styles.view}>
        <Text size={16} semiBold>
          {title}
        </Text>
        {_search && (
          <View style={{flexDirection: 'row'}}>
            <Image source={_source1} style={styles.search} />
            <Image source={_source2} style={styles.menu} />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
  menu: {
    width: RF(20),
    height: RF(20),
    marginLeft: RF(10),
  },
  search: {
    width: RF(20),
    height: RF(20),
  },
  iV: {
    width: RF(32),
    height: RF(32),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
    borderRadius: RF(10),
    marginRight: RF(20),
  },
  img: {
    width: RF(13),
    height: RF(12),
    resizeMode: 'contain',
  },
  main: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: RF(20),
  },
});

export default TextHeader;

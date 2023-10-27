import {RF, light_grey, txt_gray} from '@theme';
import React from 'react';
import {back} from '@assets';
import {Text} from '@components';
import {Image, StyleSheet, View} from 'react-native';

const TextHeader = ({
  title,
  _back,
  _search,
  _source1,
  _source2,
  setting,
  s_source1,
  s_source2,
}: {
  title?: any;
  _back?: any;
  _search?: any;
  _source1?: any;
  _source2?: any;
  setting?: any;
  s_source1?: any;
  s_source2?: any;
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
        {_search ? (
          <View style={styles.s}>
            <Image source={_source1} style={styles.search} />
            <Image source={_source2} style={styles.menu} />
          </View>
        ) : (
          setting && (
            <View style={styles.row}>
              <View style={styles.innerView}>
                <Image source={s_source1} style={styles.s_s} />
              </View>
              <View style={[styles.innerView, {marginLeft: RF(10)}]}>
                <Image source={s_source2} style={styles.s_s} />
              </View>
            </View>
          )
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  innerView: {
    width: RF(32),
    height: RF(32),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: light_grey,
    borderRadius: RF(10),
  },
  s_s: {
    width: RF(16),
    height: RF(16),
    resizeMode: 'contain',
  },
  s: {flexDirection: 'row'},
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
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
    marginRight: RF(8),
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

import {
  View,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {back} from '@assets';
import {Text} from '@components';
import {RF, light_grey, SCREEN_WIDTH} from '@theme';

const TextHeader = ({
  f_Size,
  title,
  _back,
  onOpen,
  _search,
  _source1,
  _source2,
  setting,
  s_source1,
  s_source2,
  navigation,
  bgClr,
}: {
  title?: any;
  _back?: any;
  _search?: any;
  _source1?: any;
  _source2?: any;
  setting?: any;
  s_source1?: any;
  s_source2?: any;
  navigation?: any;
  f_Size?: any;
  bgClr?: any;
  onOpen?: () => void;
}) => {
  return (
    <View
      style={[
        styles.main,
        {
          backgroundColor: bgClr ? bgClr : '#fff',
        },
      ]}>
      {_back && (
        <Pressable style={styles.iV} onPress={() => navigation?.goBack()}>
          <Image source={back} style={styles.img} />
        </Pressable>
      )}
      <View style={styles.view}>
        <Text size={f_Size ? f_Size : RF(16)} semiBold>
          {title}
        </Text>
        {_search ? (
          <View style={styles.s}>
            <Image source={_source1} style={styles.search} />
            <TouchableOpacity>
              <Image source={_source2} style={styles.menu} />
            </TouchableOpacity>
          </View>
        ) : (
          setting && (
            <View style={styles.row}>
              <TouchableOpacity style={styles.innerView} onPress={onOpen}>
                <Image source={s_source1} style={styles.s_s} />
              </TouchableOpacity>
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
    alignItems: 'center',
  },
  menu: {
    width: RF(20),
    height: RF(20),
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
    marginRight: RF(15),
  },
  img: {
    width: RF(13),
    height: RF(12),
    resizeMode: 'contain',
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: RF(20),
    alignSelf: 'center',
    width: '100%',
  },
});

export default TextHeader;

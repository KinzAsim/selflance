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
import {RF, light_grey, SCREEN_WIDTH, orange} from '@theme';

interface Props {
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
  source2?: any;
  textStyle?: any;
  numofLines?: any;
  _Icon2?: any;
  icon2?: any;
  title2?: any;
  onOpen?: () => void;
  handleBack?: () => void;
}

const TextHeader = (props: Props) => {
  const {
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
    source2,
    icon2,
    numofLines,
    textStyle,
    _Icon2,
    title2,
    handleBack,
  } = props;
  return (
    <>
      <View
        style={[
          styles.main,
          {
            backgroundColor: bgClr ? bgClr : '#fff',
          },
        ]}>
        {_back && (
          <View style={{width: '14%'}}>
            <Pressable
              style={styles.iV}
              onPress={handleBack ? handleBack : () => navigation?.goBack()}>
              <Image source={back} style={styles.img} />
            </Pressable>
          </View>
        )}

        <View style={styles.view}>
          <Text
            size={f_Size ? f_Size : RF(14)}
            semiBold
            style={textStyle}
            numberOfLines={numofLines}>
            {title}
            {title2 && (
              <Text size={f_Size ? f_Size : RF(14)} semiBold color={orange}>
                {`${' '} ${title2}`}
              </Text>
            )}
          </Text>
          {_search ? (
            <View style={[styles.s]}>
              <Image source={_source1} style={styles.search} />
              <Pressable
                onPress={() => onOpen && onOpen()}
                style={{
                  height: RF(20),
                  width: RF(35),
                  alignItems: 'center',
                }}>
                <Image source={_source2} style={styles.menu} />
              </Pressable>
            </View>
          ) : (
            setting && (
              <View style={styles.row}>
                <Pressable
                  style={styles.innerView}
                  onPress={() => onOpen && onOpen()}>
                  <Image source={s_source1} style={styles.s_s} />
                </Pressable>
                {source2 === false ? null : (
                  <View style={[styles.innerView, {marginLeft: RF(10)}]}>
                    <Image source={s_source2} style={styles.s_s} />
                  </View>
                )}
              </View>
            )
          )}
        </View>
      </View>
    </>
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
    justifyContent: 'space-between',
    width: '87%',
  },
  menu: {
    width: RF(20),
    height: RF(20),
    resizeMode: 'contain',
  },
  search: {
    width: RF(20),
    height: RF(20),
    marginRight: 5,
    resizeMode: 'contain',
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: RF(20),
    paddingHorizontal: RF(18),
    width: '100%',
    marginRight: 2,
  },
});

export default TextHeader;

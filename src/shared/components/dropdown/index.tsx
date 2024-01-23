import {RF, SCREEN_HEIGHT, SCREEN_WIDTH} from '@theme';
import Text from '../text';
import {down} from '@assets';
import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';

const DropDown = ({
  title,
  type,
  children,
  noMargin,
  style,
  f_size,
}: {
  type?: any;
  noMargin?: any;
  title?: any;
  children?: any;
  style?: any;
  f_size?: any;
}) => {
  const [open, setOpen] = useState<any>(false);
  const onOpen = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <Pressable
      style={[open ? styles.open : styles.main, {marginTop: noMargin ? 0 : 20}]}
      onPress={onOpen}>
      <View style={[styles.view, {marginTop: open ? RF(15) : 0}, style]}>
        <Text semiBold size={f_size ? f_size : 14}>
          {title}
        </Text>
        <Image source={down} style={styles.img} />
      </View>

      {open && children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  _img: {width: RF(114), height: RF(64), resizeMode: 'contain'},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: RF(15),
  },
  v: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  line: {
    height: RF(1),
    backgroundColor: '#817E7E',
    opacity: 0.2,
  },
  view: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    width: RF(8),
    height: RF(4),
    resizeMode: 'contain',
  },
  open: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  main: {
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default DropDown;

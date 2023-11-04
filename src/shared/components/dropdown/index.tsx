import {RF} from '@theme';
import Text from '../text';
import {down, frame} from '@assets';
import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';

const DropDown = ({title, type}: {type?: any; title?: any}) => {
  const [open, setOpen] = useState<any>(false);

  const onOpen = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  return (
    <Pressable style={open ? styles.open : styles.main} onPress={onOpen}>
      <View style={[styles.view, {marginTop: open ? RF(15) : 0}]}>
        <Text semiBold size={14}>
          {title}
        </Text>
        <Image source={down} style={styles.img} />
      </View>

      {open && type === 'detail' && (
        <>
          <View style={styles.row}>
            <Image source={frame} style={styles._img} />
            <Text style={{width: RF(140)}}>
              I Will Do UI Design, UI UX Design And Mobile Apps{' '}
            </Text>
          </View>
          <Detail first={'Order By'} second={'kim waliamson'} />
          <Detail first={'Delivery Days'} second={'2 Days'} />
          <Detail first={'Price'} second={'30$'} />
          <Detail first={'Order Number'} second={'#D467798DER55'} />
          <Detail first={'Payment'} second={'Paypal'} />
        </>
      )}

      {open && type === 'payment' && (
        <>
          <Detail first={'Delivery Date'} second={'Thursday, 14 July 2023'} />
          <Detail first={'Subtotal'} second={'$30'} />
          <Detail first={'Total'} second={'$40'} />
        </>
      )}
    </Pressable>
  );
};

const Detail = ({first, second}: {first?: any; second?: any}) => {
  return (
    <>
      <View style={styles.v}>
        <Text
          size={first == 'Total' ? 14 : 13}
          semiBold={first == 'Total' ? true : false}>
          {first}
        </Text>
        <Text
          size={first == 'Total' ? 14 : 13}
          semiBold={first == 'Total' ? true : false}>
          {second}
        </Text>
      </View>
      {first == 'Total' ? null : <View style={styles.line} />}
    </>
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
    marginTop: RF(20),
    paddingBottom: 20,
  },
  main: {
    width: '100%',
    height: RF(53),
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: RF(20),
  },
});

export default DropDown;

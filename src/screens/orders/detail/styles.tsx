import {RF} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
  gigImg: {width: '100%', height: RF(189), resizeMode: 'contain'},
});

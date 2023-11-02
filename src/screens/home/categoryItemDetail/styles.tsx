import {RF, grayButton} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  heart: {
    width: RF(17),
    height: RF(16),
    resizeMode: 'contain',
  },
  v_img: {
    width: RF(32),
    height: RF(32),
    borderRadius: RF(10),
    backgroundColor: grayButton,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: RF(20),
    marginTop: RF(20),
  },
  img: {
    marginRight: RF(8),
    width: RF(16),
    height: RF(16),
    resizeMode: 'contain',
  },
  imgV: {
    marginRight: RF(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  v: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

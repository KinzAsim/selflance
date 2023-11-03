import {RF} from '@theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  view: {paddingHorizontal: RF(16)},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: RF(10),
  },

  rightArrow: {
    width: 4,
    height: 8,
    marginLeft: 5,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  fs8: {
    fontSize: 8,
  },

  fs10: {
    fontSize: 10,
  },

  fs12: {
    fontSize: 12,
  },
  fs14: {
    fontSize: 14,
  },
  fs16: {
    fontSize: 16,
  },
  fw400: {
    fontWeight: '400',
  },
  fw600: {
    fontWeight: '600',
  },

  textDark: {
    color: '#434343',
  },
  textBlue: {
    color: '#00538F',
  },
});

export default styles;

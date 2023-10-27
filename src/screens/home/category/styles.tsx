import {RF} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cards: {
    height: RF(98),
    width: '100%',
    borderTopRightRadius: 8,
    marginTop: 15,
    borderBottomEndRadius: 8,
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 1,
  },
  imageStyle: {height: '100%', width: RF(145)},
  fav: {height: RF(21), width: RF(21), margin: 5},
  des: {
    height: '100%',
    width: '50%',
    padding: RF(10),
  },
  rowDirection_View: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {flexDirection: 'row', alignItems: 'center'},
});

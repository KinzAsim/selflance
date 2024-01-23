import {RF, gray} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  linear: {
    width: '90%',
    height: RF(80),
    borderRadius: 10,
    marginHorizontal: RF(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: RF(50),
    height: RF(45),
    resizeMode: 'contain',
    marginRight: RF(15),
    marginLeft: RF(10),
  },
  content: {
    borderRadius: RF(10),
    paddingHorizontal: RF(20),
    marginHorizontal: RF(20),
    borderWidth: 0.4,
    borderColor: gray,
    paddingVertical: RF(10),
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: RF(8),
  },
  view: {
    justifyContent: 'center',
    marginVertical: RF(10),
  },
  buyerMode: {
    flexGrow: 1,
    height: RF(56),
    marginHorizontal: RF(20),
    borderWidth: 0.5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: RF(10),
    marginBottom: RF(10),
    borderRadius: RF(8),

    borderColor: '#CAC8C8',
  },
  container: {
    flexGrow: 1,
    borderWidth: 0.5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: RF(10),
  },
});

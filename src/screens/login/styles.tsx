import {GREY, RF, primary} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mv: {marginVertical: RF(20)},
  or: {marginHorizontal: RF(10), color: GREY},
  mt: {marginTop: RF(20)},
  vImg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: RF(30),
  },
  or_view: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RF(30),
  },
  auth_View: {
    width: RF(140),
    height: RF(54),
    backgroundColor: '#F8F8F8',
    borderRadius: RF(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '50%',
    height: RF(30),
    resizeMode: 'contain',
  },
  justify_Row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginHorizontal: RF(2),
  },
  semiBold: {
    fontSize: RF(24),
    fontWeight: '700',
    color: '#000',
    marginTop: RF(10),
  },
  regular: {fontSize: RF(14), color: '#434343', marginTop: RF(10)},
  small: {fontSize: RF(12), color: primary},
  medium: {fontSize: RF(16), color: '#fff', fontWeight: '600'},
  entry_Fields: {
    height: RF(56),
    width: '100%',
    color: '#000',
    padding: 10,
    borderRadius: 8,
    marginBottom: RF(15),
    borderWidth: 1,
  },

  password_Field: {
    height: '100%',
    width: '80%',
    color: '#000',
    padding: 0,
    paddingLeft: 0,
    flexDirection: 'row',
  },
  extra_Small: {width: '100%', fontSize: RF(10), color: primary},
  faded_Line: {height: RF(17), width: RF(120)},
  auth: {width: '100%', height: RF(23), resizeMode: 'contain'},
  errors: {
    fontSize: 12,
    color: 'red',
    marginTop: -10,
    marginBottom: 10,
  },
});

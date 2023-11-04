import {StyleSheet, View} from 'react-native';
import {Text} from '@components';
import {RF} from '@theme';

const DropDownDetail = ({first, second}: {first?: any; second?: any}) => {
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

export default DropDownDetail;

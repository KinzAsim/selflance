import {StyleSheet, View} from 'react-native';
import React from 'react';
import {black_text, dull_orange, primary, RF, textColor} from '@theme';
import Text from '../text';

const YourEarnings = () => {
  return (
    <View style={styles.card}>
      <Text semiBold size={17} color={black_text}>
        Your Earnings
      </Text>
      <View style={styles.row}>
        <EarningCard title={'Personal Balance'} price={'200'} color={primary} />
        <EarningCard
          title={'Last month earning'}
          price={'20.25'}
          color={dull_orange}
        />
      </View>
      <View style={styles.row}>
        <EarningCard
          title={'Avg. selling price'}
          price={'45'}
          color={primary}
        />
        <EarningCard title={'Active Orders'} price={'05'} color={'#00B012'} />
      </View>
    </View>
  );
};

export default YourEarnings;

const EarningCard = ({
  title,
  price,
  color,
}: {
  title?: any;
  price?: any;
  color?: any;
}) => {
  return (
    <View style={styles.earningCard}>
      <Text semiBold color={textColor} size={10}>
        {title}
      </Text>
      <Text semiBold color={color} size={17} style={styles.margin}>
        {` $${price}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: RF(16),
    backgroundColor: '#F8F8F8',
    marginTop: RF(16),
    marginBottom: RF(10),

    justifyContent: 'space-between',
  },
  earningCard: {
    width: '47%',
    paddingVertical: RF(14),
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
  },
  margin: {
    marginTop: RF(10),
  },
  row: {
    justifyContent: 'space-between',
    width: '100%',
    marginTop: RF(12),
    flexDirection: 'row',
    alignItems: 'center',
  },
});

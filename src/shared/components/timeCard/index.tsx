import {StyleSheet, View} from 'react-native';
import React from 'react';
import {orange, primary, RF, text_Color2} from '@theme';
import Text from '../text';

const TimeCard = () => {
  return (
    <View style={styles.timeCard}>
      <Text size={16} semiBold color={primary}>
        TIME REMAINING
      </Text>
      <View style={styles.row}>
        <View style={{gap: RF(8)}}>
          <View style={styles.smallCard}>
            <Text size={24} semiBold color={orange}>
              01
            </Text>
          </View>

          <Text size={12} regular color={text_Color2} center>
            Days
          </Text>
        </View>
        <View style={{gap: RF(8)}}>
          <View style={styles.smallCard}>
            <Text size={24} semiBold color={orange}>
              50
            </Text>
          </View>

          <Text size={12} regular color={text_Color2} center>
            Hours
          </Text>
        </View>
        <View style={{gap: RF(8)}}>
          <View style={styles.smallCard}>
            <Text size={24} semiBold color={orange}>
              08
            </Text>
          </View>

          <Text size={12} regular color={text_Color2} center>
            Mints
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TimeCard;

const styles = StyleSheet.create({
  timeCard: {
    height: RF(150),
    width: '100%',
    borderRadius: 16,
    paddingVertical: RF(16),
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  smallCard: {
    paddingVertical: RF(10),
    paddingHorizontal: RF(16),
    borderRadius: 16,
    marginHorizontal: RF(8),
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: RF(15),
  },
});

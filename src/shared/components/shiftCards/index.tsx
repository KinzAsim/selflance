import {StyleSheet, View, Pressable, TouchableOpacityProps} from 'react-native';
import React, {useState} from 'react';
import {grayButton, lightText, RF, secondary} from '@theme';
import Text from '../text';

interface ShiftCardsProps {
  selectedShift: string;
  onShiftChange: (newShift: any) => void;
}
const ShiftCards = ({selectedShift, onShiftChange}: ShiftCardsProps) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.shiftCards,
          {
            backgroundColor:
              selectedShift == 'Freelancer' ? '#fff' : grayButton,
          },
        ]}
        onPress={() => onShiftChange('Freelancer')}>
        <Text
          color={selectedShift == 'Freelancer' ? secondary : lightText}
          size={14}
          semiBold>
          Freelancer
        </Text>
      </Pressable>
      <Pressable
        onPress={() => onShiftChange('Company')}
        style={[
          styles.shiftCards,
          {
            backgroundColor: selectedShift == 'Company' ? '#fff' : grayButton,
          },
        ]}>
        <Text
          color={selectedShift == 'Company' ? secondary : lightText}
          size={14}
          semiBold>
          Company
        </Text>
      </Pressable>
    </View>
  );
};

export default ShiftCards;

const styles = StyleSheet.create({
  container: {
    height: RF(57),
    width: RF(225),
    backgroundColor: grayButton,
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 12,
    padding: 10,
  },
  shiftCards: {
    height: '100%',
    width: '50%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

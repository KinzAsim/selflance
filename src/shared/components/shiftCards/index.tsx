import React from 'react';
import Text from '../text';
import {grayButton, lightText, RF, primary, WHITE} from '@theme';
import {StyleSheet, View, Pressable, FlatList} from 'react-native';

interface ShiftCardsProps {
  tabs?: any;
  selectedShift: string;
  onShiftChange: (newShift: any) => void;
}

const ShiftCards = ({selectedShift, onShiftChange, tabs}: ShiftCardsProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: tabs?.length === 2 ? RF(224) : RF(330),
        },
      ]}>
      <FlatList
        horizontal
        data={tabs}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}: any) => {
          return (
            <Pressable
              style={[
                styles.shiftCards,
                {
                  backgroundColor:
                    selectedShift == item?.title ? WHITE : grayButton,
                  marginLeft: tabs?.length === 2 ? RF(10) : RF(15),
                  width: tabs?.length === 2 ? RF(97) : RF(90),
                },
              ]}
              onPress={() => onShiftChange(item?.title)}>
              <Text
                regular={item?.title == selectedShift ? false : true}
                semiBold={item?.title == selectedShift ? true : false}
                size={14}
                color={selectedShift == item?.title ? primary : lightText}>
                {item?.title}
              </Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default ShiftCards;

const styles = StyleSheet.create({
  container: {
    backgroundColor: grayButton,
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    paddingVertical: 8,
    alignItems: 'center',
    margin: 10,
  },
  shiftCards: {
    height: RF(41),
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

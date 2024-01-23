import React from 'react';
import Text from '../text';
import {grayButton, lightText, RF, primary, WHITE} from '@theme';
import {StyleSheet, View, Pressable, FlatList} from 'react-native';

interface ShiftCardsProps {
  tabs?: any;
  width?: any;
  selectedShift: string;
  marginLeft?: any;
  fSize?: any;
  pHorizontal?: any;
  onShiftChange: (newShift: any) => void;
}

const ShiftCards = ({
  selectedShift,
  onShiftChange,
  tabs,
  width,
  fSize,
  marginLeft,
  pHorizontal,
}: ShiftCardsProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: tabs?.length === 2 ? RF(224) : width ? width : RF(330),
        },
      ]}>
      <FlatList
        horizontal
        data={tabs}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}: any) => {
          return (
            <Pressable
              style={[
                styles.shiftCards,

                {paddingHorizontal: pHorizontal ? pHorizontal : RF(8)},
                {
                  backgroundColor:
                    selectedShift == item?.title ? WHITE : grayButton,
                  marginLeft:
                    tabs?.length === 2
                      ? RF(10)
                      : marginLeft
                      ? marginLeft
                      : RF(6),
                },
              ]}
              onPress={() => onShiftChange(item?.title)}>
              <Text
                regular={item?.title == selectedShift ? false : true}
                semiBold={item?.title == selectedShift ? true : false}
                size={fSize ? fSize : 14}
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
    flexDirection: 'row',
    borderRadius: 10,
    paddingVertical: RF(8),
    paddingRight: RF(5),
    alignItems: 'center',
    margin: 10,
  },
  shiftCards: {
    paddingVertical: RF(10),
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

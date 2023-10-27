import {
  StyleSheet,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacityProps,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {grayButton, primary, RF, textColor, WHITE} from '@theme';
import {close} from '@assets';
import Text from '../text';

interface Props extends TouchableOpacityProps {
  selected: any;
  toggleChange: (change: any) => void;
}

type categoryData = {
  id: number;
  cat: string;
};

const data: categoryData[] = [
  {
    id: 0,
    cat: 'Category',
  },
  {
    id: 1,
    cat: 'Seller Language',
  },
  {
    id: 2,
    cat: 'Seller Location',
  },
  {
    id: 3,
    cat: 'Delivery Time',
  },
  {
    id: 4,
    cat: 'Project',
  },
  {
    id: 5,
    cat: 'Premium Freelancers',
  },
  {
    id: 6,
    cat: 'Olnine Freelancers',
  },
];

const FilterCategory = (props: Props) => {
  const {selected, toggleChange} = props;

  const renderCategory = (item: categoryData, selected: any) => {
    const isSelected = item.cat === selected;
    return (
      <View
        style={{
          width: '100%',
          marginTop: 20,
          justifyContent: 'center',
          borderLeftWidth: 3,
          borderColor: isSelected ? primary : WHITE,
          alignItems: 'center',
        }}>
        <Text
          onPress={() => toggleChange(item.cat)}
          color={isSelected ? primary : textColor}
          size={14}
          style={{
            width: '80%',
            textAlignVertical: 'center',
            fontFamily: isSelected ? 'Poppins-SemiBold' : 'Poppins-Regular',
          }}>
          {item.cat}
          {/* Category */}
        </Text>
      </View>
    );
  };

  return (
    <>
      <View style={styles.category_Container}>
        <View style={styles.list_View}>
          <FlatList
            data={data}
            renderItem={({item}: any) => renderCategory(item, selected)}
            keyExtractor={(item: any) => item.id.toString()}
          />
        </View>
      </View>
    </>
  );
};

export default FilterCategory;

const styles = StyleSheet.create({
  rowDirection_View: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  category_Container: {
    height: RF(400),
    width: '100%',
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: grayButton,
  },
  close: {
    height: RF(32),
    width: RF(32),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: grayButton,
  },
  list_View: {
    height: '100%',
    width: RF(115),
    borderRightWidth: 1,
    borderColor: grayButton,
  },
});

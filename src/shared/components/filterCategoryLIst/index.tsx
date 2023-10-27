import {
  View,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import Text from '../text';
import SmallSearch from '../smallSearch';
import CustomButton from '../customButton';
import CustomCheckBox from '../customCheckBox';
import {grayButton, primary, RF, textColor, WHITE} from '@theme';

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
    cat: 'Seller Level',
  },
  {
    id: 2,
    cat: 'Seller Language',
  },
  {
    id: 3,
    cat: 'Seller Location',
  },
  {
    id: 4,
    cat: 'Delivery Time',
  },
  {
    id: 5,
    cat: 'Project',
  },
  {
    id: 6,
    cat: 'Premium Freelancers',
  },
  {
    id: 7,
    cat: 'Olnine Freelancers',
  },
];

const checkboxData = [
  {id: 0, label: 'App Design'},
  {id: 1, label: 'Website Design'},
  {id: 2, label: 'App Design'},
  {id: 3, label: 'UX Design'},
];
const FilterCategory = (props: Props) => {
  const {selected, toggleChange} = props;
  const renderCategory = (item: categoryData, selected: any) => {
    const isSelected = item?.cat === selected;
    return (
      <View
        style={{
          width: '100%',
          marginBottom: 15,
          justifyContent: 'center',
          borderLeftWidth: 3,
          alignItems: 'center',
          borderColor: isSelected ? primary : WHITE,
        }}>
        <Text
          semiBold
          size={14}
          onPress={() => toggleChange(item?.cat)}
          color={isSelected ? primary : textColor}
          style={{
            width: '80%',
            textAlignVertical: 'center',
            fontFamily: isSelected ? 'Poppins-SemiBold' : 'Poppins-Regular',
          }}>
          {item?.cat}
          {/* Category */}
        </Text>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.category_Container}>
        <View style={styles.list_View}>
          <FlatList
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({item}: any) => renderCategory(item, selected)}
            keyExtractor={(item: any) => item.id.toString()}
          />
        </View>
        <View
          style={{
            width: '55%',
            height: '100%',
          }}>
          <SmallSearch height={33} />
          {checkboxData.map(checkbox => (
            <CustomCheckBox
              key={checkbox?.id}
              label={checkbox?.label}
              isTop={10}
            />
          ))}
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <CustomButton title={'Apply Filter'} />
      </View>
    </ScrollView>
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
    height: '80%',
    width: '100%',
    marginTop: 15,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    width: '40%',
    borderRightWidth: 1,
    borderColor: grayButton,
  },
});

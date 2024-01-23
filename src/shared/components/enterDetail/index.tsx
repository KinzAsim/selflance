import React, {useState} from 'react';
import {View, StyleSheet, FlatList, ScrollView, TextInput} from 'react-native';
import {Text, CustomDropDown, CustomTextInput} from '@components';
import {extraLight, RF, textColor} from '@theme';
import {arrowDown, down} from '@assets';

const NOP = [
  {id: 1, SelectText: 'Up to 2'},
  {id: 2, SelectText: 'Up to 3'},
  {id: 3, SelectText: 'Up to 4'},
  {id: 4, SelectText: 'Up to 10'},
  {id: 5, SelectText: 'Up to 15'},
];
const NOR = [
  {id: 1, SelectText: 'Unlimited'},
  {id: 2, SelectText: '1'},
  {id: 3, SelectText: '2'},
];
const DataDelivery = [
  {id: 1, SelectText: '1'},
  {id: 2, SelectText: '2'},
  {id: 3, SelectText: '3'},
];

const EnterDetails = () => {
  const getInitialData = () => [
    {
      id: 1,
      Stander: true,
      title: 'Packages',
      bas: 'Basic',
      stn: 'Standard',
      pre: 'Premium',
    },
    {
      id: 2,
      borderBottomWidth: 1,
      input: true,
      title: 'Price',
      placeholder: '$30',
      placeholder1: '$30',
      placeholder2: '$30',
    },
    {
      id: 3,
      borderBottomWidth: 1,
      title: 'summary',
      input: true,
      placeholder: 'Enter Here',
      placeholder1: 'Enter Here',
      placeholder2: 'Enter Here',
    },
    {
      id: 4,
      borderBottomWidth: 1,
      outPut: true,
      data: NOR,
      title: 'No of revisions',
      number: '1',
      drop: down,
      number1: 'unlimited',
      drop1: down,
      number2: '2',
      drop2: down,
    },
    {
      id: 5,
      borderBottomWidth: 1,
      outPut: true,
      data: DataDelivery,
      title: 'Delivery',
      number: '1',
      drop: down,
      number1: '2',
      drop1: down,
      number2: '2',
      drop2: down,
    },
    {
      id: 6,
      outPut: true,
      data: NOP,
      title: 'No of pages',
      number: 'Up to 2',
      drop: down,
      number1: 'Up to 5',
      drop1: down,
      number2: 'Up to 10',
      drop2: down,
      button: true,
    },
  ];
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [openDropdownId1, setOpenDropdownId1] = useState(null);
  const [data, setData] = useState(getInitialData());
  const [openDropdownId2, setOpenDropdownId2] = useState(null);
  const handleSelectData = (itemId: any, SelectText: any) => {
    setData(prevData =>
      prevData.map(item =>
        item.id === itemId ? {...item, number: SelectText} : item,
      ),
    );
    setOpenDropdownId(null);
  };
  const handleSelectData1 = (itemId: any, SelectText: any) => {
    setData(prevData =>
      prevData.map(item =>
        item.id === itemId ? {...item, number1: SelectText} : item,
      ),
    );
    setOpenDropdownId1(null);
  };
  const handleSelectData2 = (itemId: any, SelectText: any) => {
    setData(prevData =>
      prevData.map(item =>
        item.id === itemId ? {...item, number2: SelectText} : item,
      ),
    );
    setOpenDropdownId2(null);
  };
  const handleDropDownClick = (itemId: any) => {
    setOpenDropdownId(prevOpenId => (prevOpenId === itemId ? null : itemId));
  };
  const handleDropDownClick1 = (itemId: any) => {
    setOpenDropdownId1(prevOpenId => (prevOpenId === itemId ? null : itemId));
  };
  const handleDropDownClick2 = (itemId: any) => {
    setOpenDropdownId2(prevOpenId => (prevOpenId === itemId ? null : itemId));
  };

  const renderItem = ({item}: any) => (
    <View style={[styles.row, {borderBottomWidth: item.borderBottomWidth}]}>
      <Text size={10} regular color={'#74767E'} style={styles.title}>
        {item.title}
      </Text>
      {item.Stander && (
        <Text
          size={12}
          semiBold
          color={'rgba(0, 83, 143, 1)'}
          style={[styles.stander, styles.leftSde]}>
          {item.bas}
        </Text>
      )}

      {item.input && (
        <TextInput
          style={[styles.input, styles.rightBorder]}
          multiline
          placeholder={item.placeholder}
          placeholderTextColor={textColor}
        />
      )}
      {item.outPut && (
        <CustomDropDown
          item={item}
          openDropdownId={openDropdownId}
          selectedText={item.number}
          handleDropDownClick={handleDropDownClick}
          handleSelectData={handleSelectData}
          borderLeftWidth={1}
        />
      )}
      {item.Stander && (
        <Text
          size={12}
          semiBold
          color={'rgba(0, 83, 143, 1)'}
          style={styles.stander}>
          {item.stn}
        </Text>
      )}
      {item.input && (
        <TextInput
          style={styles.input}
          multiline
          placeholder={item.placeholder1}
          placeholderTextColor={textColor}
        />
      )}
      {item.outPut && (
        <CustomDropDown
          item={item}
          openDropdownId={openDropdownId1}
          selectedText={item.number1}
          handleDropDownClick={handleDropDownClick1}
          handleSelectData={handleSelectData1}
        />
      )}
      {item.Stander && (
        <Text
          size={12}
          semiBold
          color={'rgba(0, 83, 143, 1)'}
          style={styles.stander}>
          {item.pre}
        </Text>
      )}
      {item.input && (
        <TextInput
          style={styles.input}
          multiline
          placeholder={item.placeholder2}
          placeholderTextColor={textColor}
        />
      )}
      {item.outPut && (
        <CustomDropDown
          item={item}
          openDropdownId={openDropdownId2}
          selectedText={item.number2}
          handleDropDownClick={handleDropDownClick2}
          handleSelectData={handleSelectData2}
        />
      )}
    </View>
  );

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingLeft: RF(16),
    paddingVertical: RF(16),
    marginVertical: RF(16),
    marginHorizontal: RF(16),
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: extraLight,
    borderRadius: RF(8),
  },
  row: {
    flexDirection: 'row',
    borderBottomColor: extraLight,
    alignItems: 'center',
  },
  title: {
    flex: 1,
    width: RF(84),
    // paddingVertical: RF(16),
    textAlign: 'center',
  },
  rightBorder: {borderLeftWidth: 1, borderColor: extraLight},
  stander: {
    flex: 2,
    width: RF(100),
    paddingHorizontal: RF(16),
    paddingVertical: RF(16),
    backgroundColor: 'rgba(0, 83, 143, 0.05)',
  },
  leftSde: {
    borderLeftWidth: 1,
    borderColor: extraLight,
  },
  input: {
    flex: 2,
    fontSize: 9,
    borderColor: 'gray',
    width: RF(100),
    paddingHorizontal: RF(16),
    paddingVertical: RF(16),
    textAlignVertical: 'center',
    color: 'rgba(51, 51, 51, 1)',
    fontWeight: '600',

    // marginTop: -4,
  },
});

export default EnterDetails;

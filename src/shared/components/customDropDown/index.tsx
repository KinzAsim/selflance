import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Text, CustomButton} from '@components';
import {extraLight, RF} from '@theme';

const CustomDropDown = ({
  item,
  openDropdownId,
  selectedText,
  handleDropDownClick,
  handleSelectData,
  borderLeftWidth,
}: {
  item?: any;
  openDropdownId?: any;
  selectedText?: any;
  handleDropDownClick?: any;
  handleSelectData?: any;
  borderLeftWidth?: any;
}) => {
  const renderDropdownContent = () => {
    if (item.data) {
      return (
        <View style={styles.dropdownContent}>
          {item.data.map((innerItem: any) => (
            <TouchableOpacity
              key={innerItem.id}
              onPress={() => handleSelectData(item.id, innerItem.SelectText)}>
              <Text
                size={9}
                style={{
                  borderBottomWidth: 0.5,
                  marginVertical: RF(4),
                  zIndex: 100,
                }}>
                {innerItem.SelectText}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    }
    return null;
  };
  return (
    <View
      style={[
        styles.pressable,
        {borderLeftWidth: borderLeftWidth ? borderLeftWidth : null},
      ]}>
      <TouchableOpacity
        style={styles.rowTextImage}
        onPress={() => handleDropDownClick(item.id)}>
        <Text size={9}>
          {openDropdownId === item.id ? selectedText : selectedText}
        </Text>
        <View>
          {item.drop && (
            <Image
              source={item.drop}
              style={{width: RF(8), height: RF(8), resizeMode: 'contain'}}
            />
          )}
        </View>
      </TouchableOpacity>
      {openDropdownId === item.id && renderDropdownContent()}
      {item.button && (
        <CustomButton
          title="Select"
          width={RF(91)}
          height={RF(27)}
          f_Size={RF(10)}
          buttonStyle={{marginTop: RF(16), borderRadius: 4}}
          //   containerStyle={{borderRadius: RF(2)}}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  pressable: {
    flex: 2,
    width: RF(100),
    paddingHorizontal: RF(16),
    paddingVertical: RF(16),
    alignItems: 'center',
    borderColor: extraLight,
  },
  dropdownContent: {
    flex: 1,
    paddingHorizontal: RF(8),
    elevation: 5,
    width: '100%',
    backgroundColor: '#fff',
  },
  rowTextImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: RF(12),
  },
});

export default CustomDropDown;

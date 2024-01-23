import {
  StyleSheet,
  View,
  Pressable,
  FlatList,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {ShiftCards, Text, TextHeader, Wrapper} from '@components';
import {FreelancerData, workSpaceTabs} from '@utils';
import {medium_Gray, primary, RF, textColor} from '@theme';
import {menu} from '@assets';
import {navigate} from '@services';

const WorkSpace = ({navigation}: any) => {
  const [selectedShift, setSelectedShift] = useState('Active');

  const handleShiftChange = (newShift: any) => {
    setSelectedShift(newShift);
  };

  const renderFrelancer = (item: any) => {
    return (
      <View style={styles.cards}>
        <ImageBackground
          style={styles.imageStyle}
          source={item.bacImage}></ImageBackground>

        <View style={styles.des}>
          <Text medium color={textColor} style={{width: '90%'}}>
            {item.des}
          </Text>
          <View style={styles.row1}>
            <Text
              size={10}
              color={medium_Gray}
              regular
              style={{marginRight: 10}}>
              Prise
            </Text>
            <Text size={14} regular color={textColor}>
              {item.price}
            </Text>
          </View>
        </View>
        <Pressable style={styles.menu}>
          <Image source={menu} style={styles.icon} />
        </Pressable>
      </View>
    );
  };
  return (
    <Wrapper isPaddingH={RF(20)}>
      <View style={styles.row}>
        <TextHeader
          title={'Workspace'}
          _back
          f_Size={20}
          navigation={navigation}
        />
        <Pressable
          style={styles.workSpace}
          onPress={() => navigate('CreateWorkspace')}>
          <Text regular size={10} color={primary}>
            Add Workspace
          </Text>
        </Pressable>
      </View>
      <ShiftCards
        width={'100%'}
        pHorizontal={RF(23)}
        marginLeft={RF(6)}
        tabs={workSpaceTabs}
        selectedShift={selectedShift}
        onShiftChange={handleShiftChange}
      />
      <FlatList
        data={FreelancerData}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({item}: any) => renderFrelancer(item)}
      />
    </Wrapper>
  );
};

export default WorkSpace;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  workSpace: {
    width: RF(100),
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 12,
    borderColor: primary,
    right: 0,
  },
  cards: {
    height: RF(98),
    width: '100%',
    borderTopRightRadius: 8,
    marginTop: 15,
    borderBottomEndRadius: 8,
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 1,
  },
  imageStyle: {height: '100%', width: RF(145)},
  menu: {
    height: RF(20),
    width: RF(20),
    position: 'absolute',
    right: 7,
    top: 5,
  },
  icon: {
    height: '100%',
    width: '100%',
  },
  des: {
    height: '100%',
    width: '50%',
    padding: RF(10),
  },
  rowDirection_View: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row1: {flexDirection: 'row', alignItems: 'center'},
});

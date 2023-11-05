import {
  Gig,
  Wrapper,
  SwipeModal,
  ShiftCards,
  TextHeader,
  FilterCategory,
  Text,
} from '@components';
import {_2tabs} from '@utils';
import {navigate} from '@services';
import {RF, SCREEN_HEIGHT} from '@theme';
import {FlatList, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {search, settings} from '@assets';
import {RouteProp} from '@react-navigation/native';
import {Modalize} from 'react-native-modalize';

interface Props {
  navigation: any;
  route: RouteProp<{
    params: {
      item?: any;
    };
  }>;
}

const Category = ({route, navigation}: Props) => {
  const {item} = route.params;
  const [selected, setSelected] = useState('Category');
  const [selectedShift, setSelectedShift] = useState('Freelancer');
  const modalizeRef = useRef<Modalize>(null);

  const toggleChange = (change: any) => {
    setSelected(change);
  };
  const handleShiftChange = (newShift: string) => {
    setSelectedShift(newShift);
  };
  const onClick = (i: any) => {
    navigate('CategoryItemDetail', {data: item});
  };
  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const onClose = () => {
    modalizeRef.current?.close();
  };
  return (
    <Wrapper isPaddingH>
      <TextHeader
        _back
        setting
        s_source2={search}
        s_source1={settings}
        navigation={navigation}
        title={'Graphic And Designing'}
        onOpen={onOpen}
      />
      <ShiftCards
        tabs={_2tabs}
        selectedShift={selectedShift}
        onShiftChange={handleShiftChange}
      />

      <FlatList
        data={item}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 30}}
        renderItem={(i: any) => {
          return <Gig item={i?.item} onPress={() => onClick(i)} />;
        }}
        keyExtractor={(i: any) => i?.id?.toString()}
      />

      <SwipeModal
        modalHeader={true}
        headerTitle={'Filter'}
        ref={modalizeRef}
        onClose={onClose}>
        <FilterCategory toggleChange={toggleChange} selected={selected} />
      </SwipeModal>
    </Wrapper>
  );
};

export default Category;

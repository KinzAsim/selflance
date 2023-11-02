import {
  Gig,
  Wrapper,
  SwipeModal,
  ShiftCards,
  TextHeader,
  FilterCategory,
} from '@components';
import {_2tabs} from '@utils';
import {navigate} from '@services';
import {SCREEN_HEIGHT} from '@theme';
import {FlatList} from 'react-native';
import React, {useState} from 'react';
import {search, settings} from '@assets';
import {RouteProp} from '@react-navigation/native';

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

  const toggleChange = (change: any) => {
    setSelected(change);
  };
  const handleShiftChange = (newShift: string) => {
    setSelectedShift(newShift);
  };
  const onClick = (i: any) => {
    navigate('CategoryItemDetail', {data: item});
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
      />
      <ShiftCards
        tabs={_2tabs}
        selectedShift={selectedShift}
        onShiftChange={handleShiftChange}
      />
      <SwipeModal
        modalHeader={true}
        headerTitle={'Filter'}
        height={SCREEN_HEIGHT / 1.4}>
        <FilterCategory toggleChange={toggleChange} selected={selected} />
      </SwipeModal>

      <FlatList
        data={item}
        showsVerticalScrollIndicator={false}
        renderItem={(i: any) => {
          return <Gig item={i?.item} onPress={() => onClick(i)} />;
        }}
        keyExtractor={(i: any) => i?.id?.toString()}
      />
    </Wrapper>
  );
};

export default Category;

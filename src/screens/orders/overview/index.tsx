import React, {useState} from 'react';
import {_ordertabs, orders} from '@utils';
import {FlatList, View} from 'react-native';
import {OrderCard, ShiftCards, TextHeader, Wrapper} from '@components';
import {RF} from '@theme';

const Orders = ({navigation}: any) => {
  const [selectedShift, setSelectedShift] = useState('Active');

  const handleShiftChange = (newShift: any) => {
    setSelectedShift(newShift);
  };
  const onOpen = (item: any) => {
    navigation.navigate('OrderDetail', {data: item});
  };

  return (
    <Wrapper isPaddingH>
      <TextHeader title={'Orders'} />
      <View style={{marginRight: -20}}>
        <ShiftCards
          width={'100%'}
          tabs={_ordertabs}
          selectedShift={selectedShift}
          onShiftChange={handleShiftChange}
        />
      </View>
      <FlatList
        data={orders}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <OrderCard
              onPress={() => onOpen(item)}
              date={item?.date}
              budget={item?.budget}
              title={item?.title}
              completion={item?.completion}
            />
          );
        }}
      />
    </Wrapper>
  );
};

export default Orders;

import React from 'react';
import {orders} from '@utils';
import {FlatList} from 'react-native';
import {OrderCard, TextHeader, Wrapper} from '@components';

const Orders = ({navigation}: any) => {
  const onOpen = (item: any) => {
    navigation.navigate('OrderDetail', {data: item});
  };

  return (
    <Wrapper isPaddingH>
      <TextHeader title={'Orders'} f_Size={20} />
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

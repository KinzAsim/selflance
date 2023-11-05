import {
  Text,
  Wrapper,
  OrderCard,
  RememberMe,
  ShiftCards,
  SwipeModal,
  TextHeader,
  CustomButton,
} from '@components';
import {FlatList, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {Modalize} from 'react-native-modalize';
import {_ordertabs, cancelOrder, orders} from '@utils';

const Orders = ({navigation}: any) => {
  const modalizeRef = useRef<Modalize>(null);
  const [selected, setSelected] = useState<any>(-1);
  const [selectedShift, setSelectedShift] = useState('Active');

  const handleShiftChange = (newShift: any) => {
    setSelectedShift(newShift);
  };
  const onOpen = (item: any) => {
    navigation.navigate('OrderDetail', {data: item});
  };
  const onOpenModal = () => {
    modalizeRef?.current?.open();
  };
  const onCloseModal = () => {
    modalizeRef.current?.close();
  };
  const onClick = (index: any) => {
    setSelected(index);
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
              date={item?.date}
              title={item?.title}
              budget={item?.budget}
              onPress={() => onOpen(item)}
              onPressOptions={onOpenModal}
              completion={item?.completion}
            />
          );
        }}
      />
      <SwipeModal ref={modalizeRef} onClose={onCloseModal}>
        <Text size={20} semiBold>
          Cancel Order
        </Text>
        <FlatList
          data={cancelOrder}
          renderItem={({item, index}) => {
            return (
              <RememberMe
                index={index}
                selected={selected}
                title={item?.title}
                onPress={() => onClick(index)}
              />
            );
          }}
        />
        <CustomButton title={'Cancel Order'} onPress={onCloseModal} />
      </SwipeModal>
    </Wrapper>
  );
};

export default Orders;

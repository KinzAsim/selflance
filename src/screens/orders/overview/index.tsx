import {
  Text,
  Wrapper,
  OrderCard,
  RememberMe,
  ShiftCards,
  SwipeModal,
  TextHeader,
  CustomButton,
  CustomCard,
} from '@components';
import {FlatList, TextInput, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {Modalize} from 'react-native-modalize';
import {_ordertabs, cancelOrder, orders} from '@utils';
import {RF} from '@theme';

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
      <View>
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
        <Text regular semiBold style={{marginTop: RF(16)}}>
          Other
        </Text>
        <CustomCard
          radius={8}
          containerStyle={{
            height: RF(100),
            paddingVertical: RF(8),
            paddingLeft: RF(16),
            marginBottom: RF(16),
          }}>
          <TextInput
            placeholder="Write Reason"
            textAlignVertical="top"
            style={{padding: 0}}
          />
        </CustomCard>
        <CustomButton title={'Cancel Order'} onPress={onCloseModal} />
      </SwipeModal>
    </Wrapper>
  );
};

export default Orders;

import React from 'react';
import {RF, WHITE, light_grey, primary} from '@theme';
import {frame, next} from '@assets';
import {RouteProp} from '@react-navigation/native';
import {Image, Pressable, ScrollView, View} from 'react-native';
import {DropDown, ProfileText, Text, TextHeader, Wrapper} from '@components';

interface Props {
  navigation?: any;
  route: RouteProp<{
    params: {
      data?: any;
    };
  }>;
}

const OrderDetail = ({route, navigation}: Props) => {
  const {data} = route?.params;

  return (
    <Wrapper isPaddingH bgClr={light_grey}>
      <TextHeader title={'Order Detail'} bgClr={light_grey} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={frame}
          style={{width: '100%', height: RF(189), resizeMode: 'contain'}}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <ProfileText ratings={'5.5'} />
          <Pressable>
            <Text semiBold size={14} color={primary}>
              View Gig
            </Text>
            <Image
              source={next}
              style={{width: RF(9), height: RF(9), resizeMode: 'contain'}}
            />
          </Pressable>
        </View>
        <DropDown title={'Order Details'} type={'detail'} />
        <DropDown title={'Payment Details'} type={'payment'} />
        <DropDown title={'Order Summary'} type={'summary'} />
        <DropDown title={'Cooperation Agreement'} type={'agreement'} />
      </ScrollView>
    </Wrapper>
  );
};

export default OrderDetail;

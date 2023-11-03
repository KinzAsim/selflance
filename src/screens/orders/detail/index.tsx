import React from 'react';
import {ProfileText, Text, TextHeader, Wrapper} from '@components';
import {RouteProp} from '@react-navigation/native';
import {Image, Pressable, View} from 'react-native';
import {frame, next} from '@assets';
import {RF, primary} from '@theme';

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
    <Wrapper isPaddingH>
      <TextHeader title={'Order Detail'} />
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
    </Wrapper>
  );
};

export default OrderDetail;

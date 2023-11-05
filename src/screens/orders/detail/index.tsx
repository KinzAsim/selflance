import React, {useState} from 'react';
import {frame, next} from '@assets';
import {RF, light_grey, primary} from '@theme';
import {RouteProp} from '@react-navigation/native';
import {Image, Pressable, ScrollView, View} from 'react-native';
import {
  CustomTextInput,
  DropDown,
  DropDownDetail,
  ProfileText,
  ShiftCards,
  Text,
  TextHeader,
  Wrapper,
} from '@components';
import {styles} from './styles';
import {_ordertabs} from '@utils';

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
            marginTop: 10,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
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
        <DropDown title={'Order Details'} type={'detail'}>
          <>
            <View style={styles.row}>
              <Image source={frame} style={styles._img} />
              <Text style={{width: RF(140)}}>
                I Will Do UI Design, UI UX Design And Mobile Apps{' '}
              </Text>
            </View>
            <DropDownDetail first={'Order By'} second={'kim waliamson'} />
            <DropDownDetail first={'Delivery Days'} second={'2 Days'} />
            <DropDownDetail first={'Price'} second={'30$'} />
            <DropDownDetail first={'Order Number'} second={'#D467798DER55'} />
            <DropDownDetail first={'Payment'} second={'Paypal'} />
          </>
        </DropDown>
        <DropDown title={'Payment Details'} type={'payment'}>
          <>
            <DropDownDetail
              first={'Delivery Date'}
              second={'Thursday, 14 July 2023'}
            />
            <DropDownDetail first={'Subtotal'} second={'$30'} />
            <DropDownDetail first={'Total'} second={'$40'} />
          </>
        </DropDown>
        <DropDown title={'Order Summary'} type={'summary'} />
        <DropDown title={'Cooperation Agreement'} type={'agreement'}>
          <>
            <CustomTextInput
              title={'Product Organization'}
              placeholderText={'Mobile UI Design'}
            />
            <CustomTextInput
              multiline
              title={'Product Organization'}
              placeholderText={
                'Buyer says 2 screens of mobile app which  onboarding screens...logo will be provided cheme also... I will give thce figma file...Thank you'
              }
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <CustomTextInput
                title={'Price'}
                placeholderText={'38$'}
                txtInput={{
                  backgroundColor: light_grey,
                  height: RF(41),
                  borderRadius: 10,
                  paddingLeft: 10,
                }}
                width={146}
              />
              <CustomTextInput
                title={'NO of Reviews'}
                placeholderText={'5'}
                txtInput={{
                  backgroundColor: light_grey,
                  height: RF(41),
                  borderRadius: 10,
                  paddingLeft: 10,
                }}
                width={146}
              />
            </View>

            <CustomTextInput
              title={'No of Days to Deliver'}
              placeholderText={'5'}
            />

            <CustomTextInput
              title={'Extra Charges for Extra Revision'}
              placeholderText={'32$'}
            />
          </>
        </DropDown>
      </ScrollView>
    </Wrapper>
  );
};

export default OrderDetail;

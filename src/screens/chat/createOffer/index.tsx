import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  CustomButton,
  CustomCard,
  CustomTextInput,
  Text,
  TextHeader,
  Wrapper,
} from '@components';
import {extraLight, primary, RF, textColor, text_Color2} from '@theme';
import {arrowDown, frame1} from '@assets';
import {navigate} from '@services';

const CreateOffer = ({navigation}: any) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Wrapper>
        <TextHeader
          f_Size={RF(20)}
          navigation={navigation}
          _back
          textStyle={{color: primary}}
          title={'Create An Offer'}
        />
        <View
          style={{
            flex: 1,
            paddingHorizontal: RF(15),
            backgroundColor: 'rgba(248, 248, 248, 1)',
          }}>
          <CustomCard bgColor={'#fff'} radius={8}>
            <View style={styles.Container}>
              <Text size={14} semiBold color={'rgba(18, 31, 62, 1)'}>
                Order Details
              </Text>
              <TouchableOpacity>
                <Image source={arrowDown} style={styles.ImageStyle} />
              </TouchableOpacity>
            </View>
            <View style={styles.orderStyle}>
              <Image source={frame1} style={styles.styleImage} />
              <Text
                size={12}
                center
                regular
                color={'rgba(148, 148, 148, 1)'}
                style={{marginLeft: RF(8), width: RF(136)}}>
                I will do ui design, ui ux design and mobile apps
              </Text>
            </View>
            <View style={{marginTop: RF(16)}}>
              <Text size={14} semiBold color={'rgba(67, 67, 67, 1)'}>
                Your offer
              </Text>
              <CustomTextInput
                title={'Brief'}
                inputStyle={styles.TextInputStyle}
                multiline
                maxLength={300}
                placeholderText="Buyer says 2 screens of mobile app onboarding screens...logo will be provided cheme also... I will give thce figma file...Thank you"
              />
              <View style={styles.rowStyle}>
                <CustomTextInput
                  containerStyle={{width: '45%'}}
                  title={'Delivery Time'}
                  placeholderText={'38$'}
                />
                <CustomTextInput
                  containerStyle={{width: '45%'}}
                  title={'No Of Revisions'}
                  placeholderText={'5'}
                />
              </View>
              <CustomTextInput title={'Total Price'} placeholderText={'38$'} />
            </View>
            <CustomButton
              title="Continue"
              onPress={() => navigate('Agreement')}
            />
          </CustomCard>
        </View>
      </Wrapper>
    </ScrollView>
  );
};

export default CreateOffer;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backgroundContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
  },
  ImageStyle: {width: RF(10), height: RF(10), resizeMode: 'contain'},
  orderStyle: {
    marginTop: RF(16),
    flexDirection: 'row',
    alignItems: 'center',
  },
  styleImage: {width: '43%', height: RF(65), resizeMode: 'contain'},
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  TextInputStyle: {
    textAlignVertical: 'top',
    color: 'rgba(148, 148, 148, 1)',
    fontWeight: '400',
    padding: RF(16),
    borderRadius: RF(8),
    height: RF(114),
  },
  ContainerView: {
    backgroundColor: 'rgba(248, 248, 248, 1)',
    marginTop: RF(8),
    borderRadius: 8,
  },
});

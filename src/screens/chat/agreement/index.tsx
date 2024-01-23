import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {
  CustomButton,
  CustomCard,
  CustomCheckBox,
  CustomTextInput,
  TextHeader,
  Wrapper,
} from '@components';
import {GREY, primary, RF, text_Color2} from '@theme';

const Agreement = ({navigation}: any) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Wrapper>
        <TextHeader
          f_Size={RF(20)}
          navigation={navigation}
          _back
          textStyle={{color: primary}}
          title={'Cooperation'}
          title2={'Agreement'}
        />
        <View
          style={{
            flex: 1,
            paddingHorizontal: RF(15),
            backgroundColor: 'rgba(248, 248, 248, 1)',
          }}>
          <CustomCard bgColor={'#fff'} radius={8}>
            <Text>
              This is contract confirmation form which is filled by seller.
            </Text>
            <CustomTextInput
              title={'Title'}
              width={'100%'}
              placeholderText={'Mobile UI Design'}
            />
            <CustomTextInput
              title={'Brief'}
              inputStyle={styles.TextInputStyle}
              multiline
              maxLength={300}
              placeholderText="Buyer says 2 screens of mobile app
onboarding screens...logo will be provided cheme also... I will give thce figma file...Thank you"
            />
            <View style={styles.rowStyle}>
              <CustomTextInput
                title={'Delivery Time'}
                containerStyle={{width: '45%'}}
                placeholderText={'38$'}
              />
              <CustomTextInput
                title={'No Of Revisions'}
                containerStyle={{width: '45%'}}
                placeholderText={'5'}
              />
            </View>
            <CustomTextInput
              title={'No of Days to Deliver'}
              placeholderText={'6'}
            />
            <CustomTextInput
              title={'Extra Charges for Extra Revision'}
              width={'100%'}
              placeholderText={'32$'}
            />
            <View
              style={[
                styles.justify_Row,
                {marginBottom: RF(25), marginTop: RF(5)},
              ]}>
              <CustomCheckBox />
              <View style={{width: '60%', marginLeft: 5}}>
                <Text style={[styles.extra_Small, {color: GREY}]}>
                  Yes, I understand and agree to the
                </Text>
                <Text style={styles.extra_Small}>Terms of Service</Text>
              </View>
            </View>
            <CustomButton title="send offer" />
          </CustomCard>
        </View>
      </Wrapper>
    </ScrollView>
  );
};

export default Agreement;

const styles = StyleSheet.create({
  rowStyle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    alignSelf: 'center',
    backgroundColor: 'red',
  },
  justify_Row: {
    flexDirection: 'row',
    width: '100%',
    marginHorizontal: RF(2),
  },
  extra_Small: {width: '100%', fontSize: RF(10), color: primary},
  small: {fontSize: RF(12), color: primary},
  TextInputStyle: {
    textAlignVertical: 'top',
    color: 'rgba(148, 148, 148, 1)',
    fontWeight: '400',
    padding: RF(16),
    borderRadius: RF(8),
    height: RF(114),
  },
});

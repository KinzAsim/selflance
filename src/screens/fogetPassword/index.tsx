import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import {CustomButton, NavHeader, Wrapper} from '@components';
import {
  black_text,
  gray,
  GREY,
  lightText,
  light_grey,
  primary,
  RF,
  textColor,
} from '@theme';
import {forgeticon} from '@assets';

const ForgetPassword = ({navigation}: any) => {
  return (
    <Wrapper isPaddingH>
      <NavHeader onPress={() => navigation.goBack()} />
      <Image
        style={{
          height: RF(145),
          width: RF(145),
          marginVertical: RF(10),
        }}
        source={forgeticon}
        resizeMode="contain"
      />
      <Text
        style={{
          fontSize: RF(24),
          fontFamily: 'Poppins-SemiBold',
          color: textColor,
        }}>
        Forgot Password?
      </Text>
      <Text
        style={{
          fontSize: RF(14),
          fontFamily: 'Poppins-Regular',
          color: lightText,
        }}>
        Enter your registered email address to receive verification email
      </Text>
      <TextInput
        style={styles.entry_Fields}
        placeholder={'Enter email'}
        placeholderTextColor={GREY}
      />
      <CustomButton title={'Check E-Mail'} />
      <Text
        onPress={() => navigation.goBack()}
        style={{
          position: 'absolute',
          bottom: RF(30),
          alignSelf: 'center',
          fontSize: RF(14),
          color: black_text,
          fontFamily: 'Poppins-Medium',
        }}>
        Back to login
      </Text>
    </Wrapper>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  entry_Fields: {
    height: RF(56),
    width: '100%',
    color: '#000',
    borderColor: primary,
    padding: 10,
    borderRadius: 8,
    marginBottom: RF(15),
    borderWidth: 1,
    marginTop: 10,
  },
});

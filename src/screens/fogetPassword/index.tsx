import {StyleSheet, View, Image, TextInput, ScrollView} from 'react-native';
import React from 'react';
import {CustomButton, NavHeader, Text, Wrapper} from '@components';
import {
  black_text,
  GREY,
  lightText,
  RF,
  SCREEN_HEIGHT,
  secondary,
  textColor,
} from '@theme';
import {forgeticon} from '@assets';

const ForgetPassword = ({navigation}: any) => {
  return (
    <Wrapper isPaddingH>
      <View style={{height: SCREEN_HEIGHT, width: '100%'}}>
        <NavHeader
          onPress={() => navigation.goBack()}
          navigteOnClose={() => navigation.goBack()}
          navigation={navigation}
        />
        <Image
          style={styles.lock_Img}
          source={forgeticon}
          resizeMode="contain"
        />
        <Text size={24} color={textColor} semiBold>
          Forgot Password?
        </Text>
        <Text size={14} regular color={lightText}>
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
          color={black_text}
          size={14}
          style={styles.absolute_Text}>
          Back to login
        </Text>
      </View>
    </Wrapper>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  entry_Fields: {
    height: RF(56),
    width: '100%',
    color: '#000',
    borderColor: secondary,
    padding: 10,
    borderRadius: 8,
    marginBottom: RF(15),
    borderWidth: 1,
    marginTop: 10,
  },
  lock_Img: {
    height: RF(145),
    width: RF(145),
    marginVertical: RF(10),
  },
  absolute_Text: {
    position: 'absolute',
    bottom: RF(20),
    alignSelf: 'center',
    fontFamily: 'Poppins-Medium',
  },
});

import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {gray, RF} from '@theme';
import {logo, logo2} from '@assets';
import LinearGradient from 'react-native-linear-gradient';
import {Wrapper} from '@components';

const Splash = () => {
  return (
    <Wrapper translucent statusBarBagColor={'transparent'}>
      <LinearGradient colors={['#2794E3', '#00538F']} style={styles.container}>
        <Image style={styles.logo} source={logo2} />
        <Text style={styles.text}>Selflance Technology Private Limited</Text>
      </LinearGradient>
    </Wrapper>
  );
};

export default Splash;

const styles = StyleSheet.create({
  logo: {
    height: RF(47),
    width: '100%',
    resizeMode: 'contain',
  },
  text: {
    position: 'absolute',
    bottom: 20,
    color: '#fff',
    fontSize: RF(14),
    fontFamily: 'Poppins-Regular',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

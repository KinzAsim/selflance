import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {gray, RF} from '@theme';
import {logo} from '@assets';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.text}>Selflance Technology Private Limited</Text>
    </View>
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
    color: '#949494',
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

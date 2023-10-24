import React from 'react';
import Text from '../text';
import {heart, user} from '@assets';
import {View, Image, ImageBackground, StyleSheet} from 'react-native';
import {RF, txt_gray} from '@theme';

const GigCard = (props: any) => {
  const {data} = props;

  return (
    <View style={styles.gigCardContainer}>
      <ImageBackground source={data.img} style={styles.gigImage}>
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
          <View style={styles.tag}>
            <Text size={8} semiBold>
              Company
            </Text>
          </View>

          <View
            style={{
              width: RF(21),
              height: RF(21),
              backgroundColor: '#fff',
              borderRadius: RF(100),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={heart}
              style={{height: RF(11), width: RF(12), resizeMode: 'contain'}}
            />
          </View>
        </View>
      </ImageBackground>

      <View style={{paddingHorizontal: RF(9.87), paddingTop: RF(6.78)}}>
        <Text style={[{marginBottom: 6.78}]} size={11} regular color={txt_gray}>
          App Designing
        </Text>
        <Text>I Will Do Ui Design, Ui Ux Design, Website Ui Ux Design</Text>
      </View>

      <View style={styles.line} />

      <View style={{borderWidth: 1, paddingHorizontal: RF(10)}}>
        <View style={{borderRadius: RF(100), width: RF(20), height: RF(20)}}>
          <Image source={user} style={styles.img} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {width: RF(20), height: RF(29)},
  line: {
    height: RF(1),
    backgroundColor: '#f4f4',
    opacity: 0.2,
    marginTop: RF(20),
    width: '92%',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gigCardContainer: {
    height: RF(247.14),
    width: RF(227.26),
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    marginRight: 16,
  },

  gigImage: {
    width: 227,
    height: 127.69,
    backgroundColor: 'green',
    padding: 8,
  },

  tag: {
    width: 51.18,
    height: 17.09,
    backgroundColor: '#fff',
    borderRadius: 12.94,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GigCard;

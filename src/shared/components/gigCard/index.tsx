import React from 'react';
import Text from '../text';
import {RF, txt_gray} from '@theme';
import {heart, star, user} from '@assets';
import {View, Image, ImageBackground, StyleSheet} from 'react-native';

const GigCard = (props: any) => {
  const {data, index} = props;

  return (
    <View
      style={[styles.gigCardContainer, {marginLeft: index === 0 ? RF(15) : 0}]}>
      <ImageBackground source={data.img} style={styles.gigImage}>
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
          <View style={styles.tag}>
            <Text size={8} semiBold>
              Company
            </Text>
          </View>

          <View style={styles.v_img}>
            <Image source={heart} style={styles.image} />
          </View>
        </View>
      </ImageBackground>

      <View style={styles.v5}>
        <Text style={styles.mb} size={11} regular color={txt_gray}>
          App Designing
        </Text>
        <Text>I Will Do Ui Design, Ui Ux Design, Website Ui Ux Design</Text>
      </View>

      <View style={styles.line} />

      <View style={styles.v}>
        <View style={styles.v1}>
          <View style={styles.v2}>
            <View style={styles.imgV}>
              <Image source={user} style={styles.img} />
            </View>

            <View style={styles.v4}>
              <Text size={10}>Creative</Text>
              <View style={styles.rating}>
                <Text size={10} regular>
                  5.5
                </Text>
                <Image source={star} style={styles.star} />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.v3}>
          <Text bold size={9}>
            STARTING AT
          </Text>
          <Text size={14} regular style={{marginLeft: RF(20)}}>
            ₹678
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mb: {marginBottom: 6.78},
  v5: {paddingHorizontal: RF(9.87), paddingTop: RF(6.78)},
  image: {height: RF(11), width: RF(12), resizeMode: 'contain'},
  v_img: {
    width: RF(21),
    height: RF(21),
    backgroundColor: '#fff',
    borderRadius: RF(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  v4: {marginLeft: RF(10)},
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  star: {
    width: RF(10),
    height: RF(8),
    resizeMode: 'contain',
  },
  v2: {flexDirection: 'row'},
  v3: {marginTop: RF(15), marginRight: RF(20)},
  v1: {
    marginTop: RF(15),
    paddingHorizontal: RF(10),
  },
  v: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: RF(10),
  },
  imgV: {
    width: RF(32),
    height: RF(32),
    borderRadius: RF(100),
    padding: 1,
  },
  img: {height: RF(30), width: RF(30)},
  line: {
    height: RF(1),
    backgroundColor: '#f4f4',
    marginTop: RF(10),
    width: '92%',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gigCardContainer: {
    height: RF(260),
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

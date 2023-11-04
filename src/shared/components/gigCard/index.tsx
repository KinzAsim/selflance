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

      <View style={styles.userContainer}>
        <View style={styles.leftContainer}>
          <Image source={user} style={styles.img} />
          <View>
            <Text size={10}>Cc__Creative</Text>
            <View style={styles.rating}>
              <Text
                size={10}
                regular
                style={{marginTop: 3.22, marginRight: 3.22}}>
                5.5
              </Text>
              <Image source={star} style={styles.star} />
            </View>
          </View>
        </View>

        <View>
          <Text bold size={9} style={{textAlign: 'right'}}>
            STARTING AT
          </Text>
          <Text size={14} regular style={{textAlign: 'right'}}>
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
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    width: RF(9),
    height: RF(8.8),
  },

  img: {height: RF(19.76), width: RF(20.33), marginRight: 5.12},
  line: {
    height: RF(1),
    backgroundColor: '#f4f4f4',
    marginTop: RF(10),
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
    width: RF(227),
    height: RF(127.69),
    backgroundColor: 'green',
    padding: 8,
  },

  tag: {
    width: RF(51.18),
    height: RF(17.09),
    backgroundColor: '#fff',
    borderRadius: 12.94,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: RF(48.51),
    paddingHorizontal: 9.87,
    justifyContent: 'space-between',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default GigCard;

import React from 'react';
import {frame, menu, star, user} from '@assets';
import {Line, ProfileText, Text} from '@components';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {RF, lightBlue, lightText, light_grey, primary} from '@theme';

const OrderCard = ({
  title,
  date,
  budget,
  onPress,
  completion,
}: {
  date?: any;
  title?: any;
  budget?: any;
  onPress?: any;
  completion?: any;
}) => {
  return (
    <Pressable style={styles.view} onPress={onPress}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.vImg}>
          <Image source={frame} style={styles._img} />
        </View>

        <View style={{marginLeft: 10}}>
          <View style={styles.v}>
            <View style={styles.txt}>
              <Text size={10} regular color={primary}>
                {completion}
              </Text>
            </View>
            <Image source={menu} style={styles.menu} />
          </View>
          <Text size={11} regular style={styles.title}>
            {title}
          </Text>
          <Text size={11} regular color={lightText}>
            {date}
          </Text>
        </View>
      </View>

      <Line mt={5} />
      <View style={styles.v1}>
        <ProfileText ratings={'5.5'} />
        <Text bold>Budget:{budget}$</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  v1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: RF(10),
    marginRight: RF(20),
    // paddingHorizontal: RF(10),
  },

  title: {width: RF(160), marginVertical: 7},
  v: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: RF(130),
    alignItems: 'center',
  },
  menu: {
    width: RF(15),
    height: RF(15),
    resizeMode: 'contain',
    tintColor: '#434343',
  },
  txt: {
    width: RF(75),
    height: RF(27),
    borderRadius: 10,
    backgroundColor: lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    width: '100%',
    height: RF(167),
    borderRadius: 20,
    backgroundColor: light_grey,
    paddingTop: 10,
    paddingLeft: 10,
    marginBottom: 20,
  },

  _img: {
    width: RF(154),
    height: RF(86),
    resizeMode: 'contain',
  },
  vImg: {
    width: RF(155),
    height: RF(90),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OrderCard;

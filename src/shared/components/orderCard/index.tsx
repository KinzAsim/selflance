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
  onPressOptions,
}: {
  date?: any;
  title?: any;
  budget?: any;
  onPress?: any;
  completion?: any;
  onPressOptions?: any;
}) => {
  return (
    <Pressable style={styles.view} onPress={onPress}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.vImg}>
          <Image source={frame} style={styles._img} />
        </View>

        <View style={styles.main}>
          <View style={styles.v}>
            <View style={styles.txt}>
              <Text size={10} regular color={primary}>
                {completion}
              </Text>
            </View>
            <Pressable style={styles.menu} onPress={onPressOptions}>
              <Image source={menu} style={styles.menu} />
            </Pressable>
          </View>
          <Text size={10} regular style={styles.title}>
            {title}
          </Text>
          <Text size={10} regular color={lightText}>
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
  main: {
    width: '50%',
    height: RF(86),
    paddingLeft: 8,
    justifyContent: 'center',
  },

  v1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: RF(10),
    marginRight: RF(5),
    // paddingHorizontal: RF(10),
  },

  title: {marginVertical: 5},
  v: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  menu: {
    width: RF(35),
    height: RF(20),
    resizeMode: 'contain',
    tintColor: '#434343',
    // borderWidth: 1,
  },
  txt: {
    width: RF(70),
    height: RF(25),
    borderRadius: 5,
    backgroundColor: lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    width: '100%',
    height: RF(167),
    borderRadius: 8,
    backgroundColor: light_grey,
    marginTop: 10,
    padding: 10,
  },

  _img: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  vImg: {
    width: '50%',
    height: RF(86),
    borderRadius: 10,
  },
});

export default OrderCard;

import {
  View,
  Image,
  Pressable,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {Text} from '@components';
import {favourets, picture, rating} from '@assets';
import {RF, lightText, medium_Gray, textColor} from '@theme';

const Gig = ({item, onPress}: {item?: any; onPress?: any}) => {
  return (
    <Pressable style={styles.cards} onPress={onPress}>
      <ImageBackground
        style={styles.imageStyle}
        source={item?.bacImage}
        imageStyle={{borderTopLeftRadius: 10, borderBottomLeftRadius: 10}}>
        <Image source={favourets} style={styles.fav} />
      </ImageBackground>
      <View style={styles.des}>
        <Text medium color={textColor}>
          {item?.des}
        </Text>
        <View style={[styles.rowDirection_View, {marginVertical: 5}]}>
          <View style={styles.row}>
            <Text size={10} color={lightText}>
              {item?.rating}
            </Text>
            <Image style={styles._img} source={rating} />
          </View>
          <View style={styles.row}>
            <Text
              size={10}
              color={medium_Gray}
              regular
              style={{marginRight: 10}}>
              Prise
            </Text>
            <Text size={14} regular color={textColor}>
              {item?.price}
            </Text>
          </View>
        </View>
        <View style={styles.rowDirection_View}>
          <View style={styles.row}>
            <Image style={styles.img} source={picture} />
            <Text size={8} color={lightText}>
              William Liam
            </Text>
          </View>
          <Text size={10} color={lightText}>
            {`Level${item?.level}`}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Gig;

const styles = StyleSheet.create({
  _img: {height: RF(10), width: RF(10), marginLeft: 5},
  img: {height: RF(17), width: RF(17), marginRight: 5},
  cards: {
    height: RF(98),
    width: '99.5%',
    borderTopRightRadius: 8,
    marginTop: RF(15),
    borderBottomEndRadius: 8,
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  imageStyle: {height: '100%', width: RF(145)},
  fav: {height: RF(21), width: RF(21), margin: 5},
  des: {
    height: '100%',
    width: '50%',
    padding: RF(10),
  },
  rowDirection_View: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {flexDirection: 'row', alignItems: 'center'},
});

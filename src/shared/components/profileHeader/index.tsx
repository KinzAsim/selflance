import React from 'react';
import Text from '../text';
import {edit, user} from '@assets';
import {RF, dim_gray, primary} from '@theme';
import {Image, StyleSheet, View} from 'react-native';

const ProfileHeader = ({title, email}: {title?: any; email?: any}) => {
  return (
    <View style={styles.main}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.view}>
          <Image source={user} style={styles.img} />
        </View>
        <View style={{marginLeft: RF(15)}}>
          <Text semiBold size={16}>
            {title}
          </Text>
          <Text regular size={12}>
            {email}
          </Text>
        </View>
      </View>
      <View style={styles.edit}>
        <Image source={edit} style={styles._img} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  edit: {
    width: RF(36),
    height: RF(36),
    backgroundColor: dim_gray,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: RF(20),
    alignItems: 'center',
    marginBottom: RF(10),
    paddingVertical: RF(20),
  },
  _img: {
    width: RF(14),
    height: RF(17),
    resizeMode: 'contain',
  },
  img: {
    width: RF(77),
    height: RF(77),
    resizeMode: 'contain',
  },
  view: {
    width: RF(80),
    height: RF(80),
    borderWidth: 1,
    borderRadius: 50,
    alignItems: 'center',
    borderColor: primary,
    justifyContent: 'center',
  },
});

export default ProfileHeader;

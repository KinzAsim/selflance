import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {lightText, RF, textColor} from '@theme';
import {profilePicture, star5} from '@assets';
import Text from '../text';

const ProfileCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.profileContainer}>
        <Image source={profilePicture} style={styles.userImg} />
      </View>
      <View>
        <Text semiBold color={'#434343'} size={20}>
          Stephanie Clara
        </Text>
        <Text regular color={lightText}>
          stephanie@askmed.com
        </Text>
        <View style={styles.row}>
          <Image source={star5} style={styles.icon} />
          <Text regular color={textColor} size={9} style={styles.margin}>
            4.9{' '}
            <Text regular color={lightText} size={9} style={styles.margin}>
              (677 Reviews)
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: RF(16),
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    justifyContent: 'space-between',
  },
  userImg: {
    height: '100%',
    width: '100%',
  },
  profileContainer: {
    height: RF(80),
    width: RF(80),
    overflow: 'hidden',
    borderRadius: 50,
  },
  icon: {
    height: RF(15),
    width: RF(77),
  },
  row: {
    marginTop: RF(4),
    flexDirection: 'row',
    alignItems: 'center',
  },
  margin: {
    marginLeft: 6.5,
  },
});

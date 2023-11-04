import {RF, blue, grayButton} from '@theme';
import React from 'react';
import {user} from '@assets';
import {Ratings, Text} from '@components';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

const ProfileItem = ({
  name,
  level,
  date,
  onOpen,
}: {
  name?: any;
  level?: any;
  date?: any;
  onOpen: () => void;
}) => {
  return (
    <View style={styles.main}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.viewImg}>
          <Image source={user} style={styles.img} />
        </View>
        <View>
          <Text color={blue} size={13} regular>
            {name}
          </Text>
          {level ? (
            <Text color={blue} size={13} regular>
              Seller Level - {level}
            </Text>
          ) : (
            <Ratings />
          )}
        </View>
      </View>

      {/* // */}
      <View>
        {date ? (
          <Text size={13}>{date}</Text>
        ) : (
          <TouchableOpacity style={styles.btn} onPress={onOpen}>
            <Text size={10} regular>
              View Profile
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: RF(88),
    height: RF(28),
    backgroundColor: grayButton,
    borderRadius: RF(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: RF(20),
    marginHorizontal: RF(15),
    justifyContent: 'space-between',
  },
  viewImg: {
    borderRadius: RF(100),
    borderWidth: 1,
    width: RF(40),
    height: RF(40),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: RF(10),
  },
  img: {
    width: RF(37),
    height: RF(35),
  },
});

export default ProfileItem;

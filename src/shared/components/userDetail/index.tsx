import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ViewProps,
} from 'react-native';
import React from 'react';
import {picture} from '@assets';
import {
  border_Opacity,
  grayButton,
  neutral,
  RF,
  textColor,
  text_Color2,
} from '@theme';
import Text from '../text';
import UserDescription from '../userDesctiption';

interface props extends ViewProps {
  user_Desc: any;
}
const UserDetail = (props: props) => {
  const {user_Desc} = props;
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Image
          source={picture}
          style={styles.userIcon}
          resizeMode={'contain'}
        />
        <View style={{width: '55%'}}>
          <Text regular size={12} color={neutral}>
            William Liam
          </Text>
          <Text regular size={10} color={textColor}>
            {`Seller Lever ${' ' + '-1'}`}
          </Text>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Text regular size={10} color={textColor}>
            View Profile
          </Text>
        </TouchableOpacity>
      </View>
      <UserDescription user_Desc={user_Desc} />
    </View>
  );
};

export default UserDetail;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileButton: {
    height: RF(28),
    width: RF(88),
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: grayButton,
  },

  userIcon: {height: RF(35), width: RF(35)},
});

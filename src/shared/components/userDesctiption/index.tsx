import {StyleSheet, View, ViewProps, Image, ScrollView} from 'react-native';
import React from 'react';
import Text from '../text';
import {
  BLACK,
  border_Opacity,
  neutral,
  neutral_90,
  RF,
  SCREEN_WIDTH,
  text_Color2,
} from '@theme';
import {chat, comment, location, sellerLevel, translater} from '@assets';
import UserLevel from '../userLevel';
interface props extends ViewProps {
  user_Desc: any;
}

const UserDescription = (props: props) => {
  const {user_Desc} = props;
  return (
    <View style={styles.detailView}>
      <Text semiBold size={14} color={neutral}>
        User Details
      </Text>
      <Text regular size={12} color={text_Color2}>
        {user_Desc}
      </Text>
      <View style={styles.row}>
        <Image source={location} style={styles.icon} />
        <View style={{paddingLeft: 10}}>
          <Text regular size={13} color={neutral_90}>
            From
          </Text>
          <Text bold size={13} color={BLACK}>
            {`India ${'(6:56 AM)'}`}
          </Text>
        </View>
      </View>
      <ScrollView
        horizontal={true}
        style={{width: SCREEN_WIDTH - 20}}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.row_D}>
          <UserLevel
            level={'-2'}
            title={'Seller Level'}
            height={RF(40)}
            source={sellerLevel}
          />
          <UserLevel
            level={'-3'}
            title={'Average Response Time'}
            height={RF(40)}
            source={comment}
          />
          <UserLevel
            level={'-2'}
            title={'Seller Level'}
            height={RF(40)}
            source={translater}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default UserDescription;

const styles = StyleSheet.create({
  detailView: {
    borderTopWidth: 1,
    width: '100%',
    borderTopColor: border_Opacity,
    marginTop: RF(15),
    paddingTop: RF(15),
  },
  row: {
    flexDirection: 'row',
    marginVertical: RF(10),
  },
  icon: {height: RF(19), width: RF(16), resizeMode: 'contain', marginTop: 10},
  row_D: {
    flexDirection: 'row',
    width: '100%',
  },
});

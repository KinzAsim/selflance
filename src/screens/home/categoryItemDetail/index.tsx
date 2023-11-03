import {
  Line,
  Text,
  Wrapper,
  ShiftCards,
  ProfileItem,
  HeaderSwiper,
} from '@components';
import {_3tabs} from '@utils';
import {heart, revision, time} from '@assets';
import {styles} from './styles';
import React, {useState} from 'react';
import {RF, dull_orange} from '@theme';
import {Image, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';

interface Props {
  navigation: any;
  route: RouteProp<{
    params: {
      data?: any;
    };
  }>;
}

const CategoryItemDetail = ({route, navigation}: Props) => {
  const {data} = route.params;
  const [selectedShift, setSelectedShift] = useState('Standard');

  const handleShiftChange = (newShift: any) => {
    setSelectedShift(newShift);
  };

  return (
    <Wrapper statusBarBagColor={'transparent'} translucent>
      <HeaderSwiper navigation={navigation} />
      <ProfileItem name={'Kinza'} level={'1'} />
      <Line mh />

      <View style={styles.view}>
        <Text semiBold size={16}>
          Mobile UI UX design or app UI UX design
        </Text>
        <View style={styles.v_img}>
          <Image source={heart} style={styles.heart} />
        </View>
      </View>

      <View style={{marginHorizontal: RF(20)}}>
        <Text>
          Pancakes are some people's favorite breakfast, who doesn't like
          pancakes? Especially with the real honey splash on top of the
          pancakes, of course everyone loves that! besides being{'  '}
          <Text color={dull_orange}>Read More....</Text>
        </Text>
        <ShiftCards
          tabs={_3tabs}
          selectedShift={selectedShift}
          onShiftChange={handleShiftChange}
        />

        <Text semiBold size={20}>
          $30
        </Text>
        <Text size={14} regular>
          I can design the website with 6 pages.
        </Text>

        <View style={styles.v}>
          <View style={styles.imgV}>
            <Image source={time} style={styles.img} />
            <Text semiBold>4 Days Delivery</Text>
          </View>

          <View style={styles.imgV}>
            <Image source={revision} style={styles.img} />
            <Text semiBold>1 Revision</Text>
          </View>
        </View>
      </View>
    </Wrapper>
  );
};

export default CategoryItemDetail;

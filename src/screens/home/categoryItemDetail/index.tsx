import {
  Line,
  Text,
  Wrapper,
  ShiftCards,
  ProfileItem,
  HeaderSwiper,
  SwipeModal,
  FilterCategory,
  UserDetail,
  PackageDetail,
  CustomButton,
  CustomRating,
  CommentSection,
} from '@components';
import {_3tabs} from '@utils';
import {
  heart,
  rating,
  revision,
  star,
  tick,
  time,
  unselectStar,
  user1,
  user2,
  user3,
} from '@assets';
import {styles} from './styles';
import React, {useState, useRef} from 'react';
import {
  RF,
  blue,
  dull_orange,
  gray,
  grayButton,
  yellow,
  BLACK,
  extraLight,
  primary,
} from '@theme';
import {Image, ScrollView, View} from 'react-native';
import ReadMore from 'react-native-read-more-text';
import {RouteProp} from '@react-navigation/native';
import {Modalize} from 'react-native-modalize';
import {useDispatch} from 'react-redux';
import {setIsModalVisible} from '@redux';
import {Rating, AirbnbRating} from 'react-native-ratings';
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
  const dispatch = useDispatch();
  const [selectedShift, setSelectedShift] = useState('Standard');
  const [selectedStarIndex, setSelectedStarIndex] = useState(-1);
  const [selected, setSelected] = useState('Category');
  const [isReadMoreExpanded, setIsReadMoreExpanded] = useState(false);
  const [rate, setRate] = useState(false);

  const modalizeRef = useRef<Modalize>(null);

  const handleShiftChange = (newShift: any) => {
    setSelectedShift(newShift);
  };
  const toggleChange = (change: any) => {
    setSelected(change);
  };

  const onOpen = () => {
    modalizeRef.current?.open();

    console.log('sssss');
  };
  const onClose = () => {
    modalizeRef.current?.close();
  };

  const handleStarPress = (index: any) => {
    setSelectedStarIndex(index);
  };

  const renderTruncatedFooter = (handlePress: any) => {
    return (
      <Text style={{color: dull_orange}} onPress={handlePress}>
        Read more
      </Text>
    );
  };

  const renderRevealedFooter = (handlePress: any) => {
    return (
      <Text style={{color: dull_orange, marginTop: 5}} onPress={handlePress}>
        Show less
      </Text>
    );
  };
  const handleTextReady = () => {
    setIsReadMoreExpanded(true); // Update the state to indicate that the text is ready and should be expanded.
  };
  return (
    <ScrollView>
      <Wrapper statusBarBagColor={'transparent'} translucent>
        <HeaderSwiper navigation={navigation} />
        <ProfileItem name={'Kinza'} level={'1'} onOpen={onOpen} />
        <Line mh />

        <View style={styles.view}>
          <Text semiBold size={16} color={blue}>
            Mobile UI UX design or app UI UX design
          </Text>
          <View style={styles.v_img}>
            <Image source={heart} style={styles.heart} />
          </View>
        </View>

        <View style={{marginHorizontal: RF(20)}}>
          <ReadMore
            numberOfLines={isReadMoreExpanded ? 3 : 3}
            renderTruncatedFooter={renderTruncatedFooter}
            renderRevealedFooter={renderRevealedFooter}
            onReady={handleTextReady}>
            <Text>
              Pancakes are some people's favorite breakfast, who doesn't like
              pancakes? Especially with the real honey splash on top of the
              pancakes, of course everyone loves that! besides being
            </Text>
          </ReadMore>
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
          <View
            style={{
              marginTop: RF(10),
              paddingTop: RF(10),
              borderTopWidth: 2,
              borderColor: grayButton,
            }}>
            <PackageDetail title={'8 Captions'} />
            <PackageDetail title={'5 ScreenShots'} />
            <PackageDetail title={'Screen Recording'} tintColor={extraLight} />
            <PackageDetail title={'Add Logo'} />
            <PackageDetail
              title={'Dynamic Transactions'}
              tintColor={extraLight}
            />
            <PackageDetail title={'30 Seconds'} />
            <View style={{marginTop: RF(10)}}>
              <CustomButton title={'Send Order'} height={RF(40)} />
            </View>
          </View>
          <View
            style={{
              marginTop: RF(20),
              borderTopWidth: 2,
              width: '100%',
              borderColor: grayButton,
            }}>
            <CustomRating
              onPress={handleStarPress}
              size={20}
              selectedStarIndex={selectedStarIndex}
              sectionTrue
              isTop={10}
            />
          </View>
          <CommentSection source={user1} />
          <CommentSection source={user2} />
          <CommentSection source={user3} />
          <View style={{marginVertical: RF(15)}}>
            <CustomButton
              height={40}
              title={'View All Reviews'}
              color={grayButton}
              grayColor={primary}
            />
          </View>
        </View>
      </Wrapper>
      <SwipeModal ref={modalizeRef} onClose={onClose}>
        <UserDetail
          user_Desc={
            "Pancakes are some people's favorite breakfast, who doesn't like pancakes? Especially with the real honey splash on top of the pancakes, of course everyone loves that! besides being Read More..."
          }
        />
      </SwipeModal>
    </ScrollView>
  );
};

export default CategoryItemDetail;

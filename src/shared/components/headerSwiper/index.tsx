import {RF, light_grey} from '@theme';
import {_carousel, companiesData} from '@utils';
import React, {useRef, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BackHeader, Carousel_Pagination, Text} from '@components';
import Carousel, {Pagination} from 'react-native-snap-carousel';

interface Props {
  navigation: any;
  route: RouteProp<{
    params: {
      data?: any;
    };
  }>;
}
const HeaderSwiper = (props: Partial<Props>) => {
  const {navigation} = props;
  const flatListRef: any = useRef();
  const [activeSlide, setActiveSlide] = useState<any>(1);

  return (
    <View style={styles.view}>
      <LinearGradient
        colors={[
          'rgba(255, 127, 0, 1)',
          'rgba(255, 127, 0, 1)',
          'rgba(255, 41, 140, 1)',
          'rgba(255, 41, 140, 1)',
        ]}
        angle={240}
        useAngle={true}
        style={styles.view}
        angleCenter={{x: 0.5, y: 0.5}}>
        <View
          style={{
            position: 'absolute',
            top: -10,
            width: '100%',
            zIndex: 100,
          }}>
          <BackHeader navigation={navigation} />
        </View>
        <Carousel
          loop
          data={_carousel}
          ref={flatListRef}
          renderItem={({item, index}) => {
            return (
              <ImageBackground
                source={item?.img}
                imageStyle={{
                  resizeMode: 'contain',
                }}
                style={{width: '100%', height: RF(288)}}></ImageBackground>
            );
          }}
          itemWidth={RF(320)}
          sliderWidth={RF(320)}
          sliderHeight={RF(157)}
          inactiveSlideOpacity={1}
          onSnapToItem={(index: any) => setActiveSlide(index)}
        />

        <Pagination
          activeDotIndex={activeSlide}
          dotsLength={_carousel?.length}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: '#00538F',
          }}
          inactiveDotStyle={{
            backgroundColor: light_grey,
          }}
          inactiveDotScale={0.6}
          inactiveDotOpacity={0.4}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: RF(288),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HeaderSwiper;

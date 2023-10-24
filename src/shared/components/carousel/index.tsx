import {RF, WHITE, txt_gray, GREY} from '@theme';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Text from '../text';

const Carousel_Pagination = ({
  data,
  renderItem,
  flatListRef,
  activeSlide,
  setActiveSlide,
  setcarousel_Index,
}: {
  data?: any;
  renderItem?: any;
  flatListRef?: any;
  activeSlide?: any;
  setActiveSlide?: any;
  setcarousel_Index?: any;
}) => {
  const myTheme: any = useTheme();
  const styles = useStyles(myTheme.colors);
  const [loading, setLoading] = useState(false);
  const SLIDER_WIDTH = Dimensions.get('window').width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.98);
  const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

  const onSnap = (index: any) => {
    if (activeSlide !== index) {
      setLoading(true);
      setActiveSlide(index);
      setcarousel_Index(index);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } else {
      setLoading(false);
    }
  };

  console.log('data...', data);

  return (
    <View style={styles.container}>
      <Carousel
        // loop={activeSlide === 1 && true}
        enableSnap
        data={data}
        ref={flatListRef}
        layout={'default'}
        sliderWidth={RF(327)}
        itemWidth={ITEM_WIDTH}
        sliderHeight={RF(157)}
        renderItem={({item}) => {
          return (
            <View>
              <Text>halo</Text>
              {/* <Image
                source={item?.img}
                style={{width: RF(100), height: RF(100)}}
              /> */}
            </View>
          );
        }}
        hasParallaxImages={true}
        inactiveSlideOpacity={1}
        onSnapToItem={index => onSnap(index)}
        // contentContainerCustomStyle={{backgroundColor:'red',width:'100%',height:'50%',marginTop:300}}
      />
      <Pagination
        inactiveDotScale={1}
        dotStyle={styles.dot}
        animatedDuration={650}
        inactiveDotOpacity={0.4}
        dotsLength={data?.length}
        activeDotIndex={activeSlide}
        inactiveDotColor={txt_gray}
        inactiveDotStyle={styles.inaciveDot}
        containerStyle={styles.containerView}
        dotColor={
          activeSlide === 0 ||
          activeSlide === 1 ||
          activeSlide === 2 ||
          activeSlide === 3
            ? GREY
            : WHITE
        }
        animatedTension={70}
      />
      {/* {loading && <CustomLoader />} */}
    </View>
  );
};

const useStyles = (colors: any) =>
  StyleSheet.create({
    inaciveDot: {
      width: RF(5),
      height: RF(5),
    },
    dot: {
      width: RF(12),
      height: RF(5),
    },
    container: {
      width: RF(330),
      paddingVertical: 0,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      height: RF(200),
    },
    containerView: {
      marginTop: RF(150),
      alignSelf: 'center',
    },
  });

export default Carousel_Pagination;

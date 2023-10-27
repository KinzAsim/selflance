import {Text} from '@components';
import React, {useState} from 'react';
import {RF, WHITE, primary} from '@theme';
import Carousel from 'react-native-snap-carousel';
import {useTheme} from '@react-navigation/native';
import {View, StyleSheet, ImageBackground} from 'react-native';

const Carousel_Pagination = ({
  data,
  flatListRef,
  activeSlide,
  setActiveSlide,
  setcarousel_Index,
}: {
  data?: any;
  flatListRef?: any;
  activeSlide?: any;
  setActiveSlide?: any;
  setcarousel_Index?: any;
}) => {
  const myTheme: any = useTheme();
  const styles = useStyles(myTheme.colors);
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        ref={flatListRef}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                elevation: 1,
              }}>
              <ImageBackground
                source={item?.img}
                imageStyle={{
                  resizeMode: 'contain',
                }}
                style={{width: RF(320), height: RF(158)}}>
                <View
                  style={{
                    backgroundColor: primary,
                    width: RF(144),
                    height: RF(40),
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: RF(20),
                    position: 'absolute',
                    bottom: 20,
                    left: 10,
                  }}>
                  <Text color={WHITE} size={16}>
                    Post a Request
                  </Text>
                </View>
              </ImageBackground>
            </View>
          );
        }}
        itemWidth={RF(320)}
        sliderWidth={RF(320)}
        sliderHeight={RF(157)}
        inactiveSlideOpacity={1}
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
      paddingVertical: 0,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      height: RF(180),
    },
    containerView: {
      marginTop: RF(150),
      alignSelf: 'center',
    },
  });

export default Carousel_Pagination;

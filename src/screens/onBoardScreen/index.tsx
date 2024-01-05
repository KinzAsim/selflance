import {skip} from '@assets';
import {CustomButton, Text} from '@components';
import {navigate} from '@services';
import {primary, RF, SCREEN_HEIGHT, SCREEN_WIDTH, textColor} from '@theme';
import {INTRO_DATA} from '@utils';
import React, {useRef} from 'react';
import {Image} from 'react-native';
import {
  StyleSheet,
  View,
  Animated,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import {ExpandingDot} from 'react-native-animated-pagination-dots';
import {expandinDots_props, flatList_props} from './props';

const OnBoardScreen = () => {
  const {width} = useWindowDimensions();
  const flatListRef = useRef<any>(null); // Create a ref for FlatList
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const renderItem = React.useCallback(
    ({item}: {item: any}) => {
      return (
        <View
          style={[
            styles.itemContainer,
            {
              width: width - 80,
              backgroundColor: 'transparent',
            },
          ]}>
          <Image source={item.img} style={styles.img} />
        </View>
      );
    },
    [width],
  );
  const keyExtractor = React.useCallback((item: any) => item.key, []);

  const onPressSkip = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({index: INTRO_DATA.length - 1});
    }
  };

  return (
    <View style={{height: SCREEN_HEIGHT, backgroundColor: '#fff'}}>
      <View style={[styles.container]}>
        <View style={styles.skipContainer}>
          <Text
            onPress={onPressSkip}
            style={styles.end}
            color={textColor}
            regular>
            Skip
          </Text>
          <Image style={styles.icon} source={skip} />
        </View>
        <FlatList
          {...flatList_props()}
          ref={flatListRef} // Assign the ref to FlatList
          keyExtractor={keyExtractor}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          decelerationRate={0.9}
          renderItem={renderItem}
        />

        <View style={[styles.itemContainer, styles.card]}>
          <Text
            size={24}
            semiBold
            color={'#343434'}
            style={{alignSelf: 'flex-start'}}>
            Title
          </Text>
          <Text regular color={'#808080'}>
            Ac Dolor Dacilisi Lacus Habitasse Lectus Lacus. Vitae Scelerisque
            Pellentesque Imperdiet Consectetur
          </Text>
          <ExpandingDot scrollX={scrollX} {...expandinDots_props()} />
          <CustomButton
            title={'Get Started'}
            buttonStyle={styles.button}
            onPress={() => navigate('Login')}
          />
        </View>
      </View>
      <View style={styles.bottomView}>
        <Text color={'#808080'} regular center>
          Already Have Account?
        </Text>
        <Text
          color={primary}
          semiBold
          center
          size={16}
          style={{marginBottom: RF(50)}}>
          Sign In
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT / 1.4,
    backgroundColor: '#fff',
  },
  text: {
    flex: 1,
    justifyContent: 'space-evenly',
  },

  img: {
    height: RF(236),
    width: SCREEN_WIDTH,
    resizeMode: 'contain',
  },
  itemContainer: {
    alignItems: 'center',
    marginHorizontal: 40,
  },
  end: {alignSelf: 'flex-end', marginRight: RF(8)},
  skipContainer: {
    justifyContent: 'flex-end',
    width: '100%',
    flexDirection: 'row',
    padding: RF(20),
    alignItems: 'center',
  },
  icon: {height: RF(10), width: RF(5), resizeMode: 'contain'},
  card: {
    width: SCREEN_WIDTH - 40,
    alignSelf: 'center',
    padding: RF(24),
    backgroundColor: '#F8F8F8',
    borderRadius: 32,
    position: 'absolute',
    top: 350,
    zIndex: -100,
  },
  button: {
    borderRadius: 30,
    marginTop: RF(55),
  },
  bottomView: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
});

export default OnBoardScreen;

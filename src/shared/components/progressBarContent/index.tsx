import {StyleSheet, Image, View, FlatList} from 'react-native';
import React from 'react';
import {
  black_text,
  neutral,
  orange,
  RF,
  textColor,
  text_Color2,
  THEME,
} from '@theme';
import {circleStar, rightArrow} from '@assets';
import * as Progress from 'react-native-progress';
import Text from '../text';

interface Props {
  progress?: any;
}

const progressData = [
  {id: 0, title: 'Response Rate', response: 0.7},
  {id: 1, title: 'Order Completion', response: 0.7},
  {id: 2, title: 'On-Time Delivery', response: 0.5},
  {id: 3, title: 'Positive Rating', response: 0.7},
];

const ProgressBarContent = (props: Props) => {
  const {progress} = props;
  return (
    <View style={styles.card}>
      <View style={styles.innerCard}>
        <Image source={circleStar} style={styles.icon} />
        <Progress.Bar
          progress={progress}
          width={RF(120)}
          height={10}
          borderRadius={20}
          color={'#FFB33E'}
          unfilledColor={'#F1F1F1'}
          style={{borderWidth: 0, height: 10}}
        />
        <Text
          style={{width: '25%'}}
          center
          regular
          size={14}
          color={black_text}>
          {`${Math.round(progress * 100)}% to `}
          <Text regular size={9} color={text_Color2}>
            {' '}
            Level 2 Seller
          </Text>
        </Text>
        <Image source={rightArrow} style={styles.icon2} />
      </View>

      <FlatList
        data={progressData}
        scrollEnabled={false}
        horizontal
        contentContainerStyle={{
          justifyContent: 'space-between',
          width: '100%',
          marginTop: RF(16),
        }}
        renderItem={({item}) => (
          <View style={[styles.smallCards]}>
            <Progress.Circle
              thickness={5}
              progress={progress}
              unfilledColor={'#F1F1F1'}
              color={THEME}
              showsText
              borderColor="transparent"
              textStyle={{fontSize: 12, color: neutral, fontWeight: 'bold'}}
            />
            <Text
              center
              color={textColor}
              style={styles.margin}
              size={9}
              regular>
              {item.title}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default ProgressBarContent;

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: RF(16),
    backgroundColor: '#F8F8F8',
    marginTop: RF(16),
    justifyContent: 'space-between',
  },
  innerCard: {
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: RF(10),
    paddingVertical: RF(10),
  },
  icon: {
    height: RF(30),
    width: RF(30),
    resizeMode: 'contain',
  },
  icon2: {
    height: RF(13),
    width: RF(7.5),
    tintColor: neutral,
    resizeMode: 'contain',
  },
  smallCards: {
    width: RF(60),
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: RF(5),
  },
  margin: {
    marginTop: 4,
  },
  row: {
    marginTop: RF(16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

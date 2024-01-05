import {RF} from '@theme';
import {INTRO_DATA} from '@utils';
import {StyleSheet} from 'react-native';

export const flatList_props = () => ({
  data: INTRO_DATA,
  pagingEnabled: true,
  horizontal: true,
  decelerationRate: 'normal',
  scrollEventThrottle: 16,
  showsHorizontalScrollIndicator: false,
});
export const expandinDots_props = () => ({
  data: INTRO_DATA,
  expandingDotWidth: 30,
  inActiveDotColor: '#347af0',
  activeDotColor: '#347af0',
  inActiveDotOpacity: 0.5,
  dotStyle: styles.dotStyles,
  containerStyle: styles.constainerStyles,
});

const styles = StyleSheet.create({
  dotStyles: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  constainerStyles: {position: 'relative', top: RF(20)},
});

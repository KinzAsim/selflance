import React from 'react';
import {RF} from '@theme';
import {BackHeader} from '@components';
import {StyleSheet, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

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
        <BackHeader navigation={navigation} />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: RF(288),
  },
});

export default HeaderSwiper;

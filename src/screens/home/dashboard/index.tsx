import {
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Header,
  ProfileCard,
  ProfileHeader,
  ProgressBarContent,
  Wrapper,
  YourEarnings,
} from '@components';

const Dashboard = () => {
  const [progressValue] = useState(new Animated.Value(0));
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const animateProgressBar = () => {
      Animated.timing(progressValue, {
        toValue: 0.7,
        duration: 400,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    };
    const listener = progressValue.addListener(value => {
      setProgress(value.value);
    });
    animateProgressBar();
    return () => {
      progressValue.removeListener(listener);
    };
  }, [progressValue]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Wrapper isPaddingH={16}>
        <Header title={'Dashboard'} />
        <ProfileCard />
        <ProgressBarContent progress={progress} />
        <YourEarnings />
      </Wrapper>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});

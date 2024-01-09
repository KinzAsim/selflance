import {StyleSheet, Text, View, Animated, Easing} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Header, ProfileCard, ProfileHeader, Wrapper} from '@components';
import * as Progress from 'react-native-progress';

const Dashboard = () => {
  const [progressValue] = useState(new Animated.Value(0));
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    animateProgressBar();
  }, []); // Run the animation only once when the component mounts

  const animateProgressBar = () => {
    Animated.timing(progressValue, {
      toValue: 0.6, // 60% progress
      duration: 1000, // Animation duration in milliseconds
      easing: Easing.linear, // Easing function for the animation
      useNativeDriver: false, // Set to true if your animation can be offloaded to the native thread
    }).start();
  };

  // Update the progress state based on the Animated value
  progressValue.addListener(value => {
    setProgress(value.value);
  });

  return (
    <Wrapper isPaddingH={16}>
      <Header title={'Dashboard'} />
      <ProfileCard />
      <Progress.Bar
        progress={progress}
        width={200}
        style={{height: 10}}
        indeterminate={false}
      />
    </Wrapper>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});

import React from 'react';
import {Text} from '@components';
import {RF, primary, txt_gray} from '@theme';
import {Pressable, StyleSheet, View} from 'react-native';

const RememberMe = ({
  title,
  index,
  onPress,
  selected,
}: {
  index?: any;
  title?: any;
  onPress?: any;
  selected?: any;
}) => {
  return (
    <View style={styles._v}>
      <Pressable style={styles.main} onPress={onPress}>
        <View
          style={[
            styles.inner,
            {
              backgroundColor: index == selected ? primary : '#fff',
            },
          ]}
        />
      </Pressable>
      <Text size={12} regular style={{width: '100%'}}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  _v: {flexDirection: 'row', marginBottom: RF(8)},
  main: {
    width: RF(15),
    height: RF(15),
    borderRadius: 10,
    borderWidth: 2,
    borderColor: txt_gray,
    marginRight: 10,
    justifyContent: 'center',
  },
  inner: {
    width: RF(9),
    height: RF(9),
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default RememberMe;

import {StyleSheet, View, Image, ViewProps} from 'react-native';
import React from 'react';
import {grayButton, RF, textColor, text_Color2} from '@theme';
import Text from '../text';

interface props extends ViewProps {
  level?: any;
  width?: any;
  height?: any;
  title?: any;
  source?: any;
}

const UserLevel = (props: props) => {
  const {level, width, title, height, source} = props;
  return (
    <View style={[[styles.cards, {width: width, height: height}]]}>
      <View style={styles.row}>
        <Image
          style={{height: height / 2.5, width: height / 2.5, marginRight: 5}}
          source={source}
          resizeMode={'contain'}
        />
        <View style={{paddingTop: RF(5)}}>
          <Text size={height / 5} color={text_Color2} regular>
            {title}
          </Text>
          <Text size={height / 4} regular color={textColor}>
            {`Level${' ' + level}`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default UserLevel;

const styles = StyleSheet.create({
  cards: {
    height: RF(50),
    borderRadius: 8,
    padding: RF(8),
    backgroundColor: grayButton,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginRight: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

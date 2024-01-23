import {TextInput, View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {RF} from '@theme';
import Accordion from './Acardion';
import TagCards from './TagCards';
import Text from '../text';

const Cards = () => {
  const [inputText, setInputText] = useState('');

  const formatDescription = (text: any) => {
    const words = text.split(' ');
    const formattedText = [];
    let currentLine = '';

    for (const word of words) {
      if ((currentLine + word).length <= 15) {
        currentLine += word + ' ';
      } else {
        formattedText.push(currentLine.trim());
        currentLine = word + ' ';
      }
    }

    if (currentLine.trim() !== '') {
      formattedText.push(currentLine.trim());
    }

    return formattedText.join('\n');
  };

  const handleTextChange = (text: any) => {
    if (text.length <= 50) {
      setInputText(text);
    }
  };

  return (
    <View style={{marginBottom: 80, paddingHorizontal: RF(13)}}>
      <View style={styles.fadedContainer}>
        <View>
          <Text semiBold color={'#1D263A'}>
            Enter Title
          </Text>
          <TextInput
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            placeholderTextColor={'#4F5E7B'}
            value={formatDescription(inputText)}
            onChangeText={handleTextChange}
            multiline
            style={{
              backgroundColor: '#FFFFFF',
              height: RF(77),
              borderRadius: RF(8),
              textAlignVertical: 'top',
              marginTop: RF(16),
              paddingHorizontal: RF(16),
            }}
          />
          <View style={{alignItems: 'flex-end', marginTop: RF(8)}}>
            <Text regular size={12}>
              {inputText.length} / 50 max
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.fadedContainer}>
        <Text semiBold color={'#1D263A'}>
          Enter Title
        </Text>
        <Accordion />
      </View>
      <View style={styles.fadedContainer}>
        <TagCards />
      </View>
    </View>
  );
};

export default Cards;
const styles = StyleSheet.create({
  fadedContainer: {
    width: '100%',
    paddingHorizontal: RF(16),
    paddingVertical: RF(20),
    backgroundColor: '#F8F8F8',
    borderRadius: RF(8),
    marginTop: RF(16),
  },
});

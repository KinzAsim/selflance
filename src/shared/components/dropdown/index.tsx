import React from 'react';
import Text from '../text';
import {Pressable} from 'react-native';

const DropDown = ({title}: {title?: any}) => {
  return (
    <Pressable>
      <Text>{title}</Text>
    </Pressable>
  );
};

export default DropDown;

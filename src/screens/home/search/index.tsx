import {Search, TextHeader, Wrapper} from '@components';
import React, {useEffect, useState} from 'react';
import {useKeyboardhook} from '@hooks';
import {Keyboard} from 'react-native';

const SearchScreen = ({navigation}: any) => {
  useKeyboardhook;
  return (
    <Wrapper isPaddingH>
      <TextHeader navigation={navigation} title={'Search'} _back />
      <Search />
    </Wrapper>
  );
};

export default SearchScreen;

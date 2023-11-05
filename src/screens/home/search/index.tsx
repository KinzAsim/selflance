import React from 'react';
import {Search, TextHeader, Wrapper} from '@components';

const SearchScreen = ({navigation}: any) => {
  return (
    <Wrapper isPaddingH>
      <TextHeader navigation={navigation} title={'Search'} _back />
      <Search autoFocus />
    </Wrapper>
  );
};

export default SearchScreen;

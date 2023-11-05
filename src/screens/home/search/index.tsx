import React from 'react';
import {Search, TextHeader, Wrapper} from '@components';

const SearchScreen = ({navigation}: any) => {
  const onSubmit = () => {
    navigation.navigate('Home');
  };

  return (
    <Wrapper isPaddingH>
      <TextHeader navigation={navigation} title={'Search'} _back />
      <Search autoFocus onSubmitEditing={onSubmit} />
    </Wrapper>
  );
};

export default SearchScreen;

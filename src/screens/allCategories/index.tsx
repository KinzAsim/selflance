import React from 'react';
import {categoryData} from '@utils';
import {FlatList} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {ClickableBox, Search, TextHeader, Wrapper} from '@components';

interface Props {
  navigation: any;
  route: RouteProp<{
    params: {
      data?: any;
    };
  }>;
}

const AllCategories = ({route, navigation}: Props) => {
  const {data} = route.params;

  const onClickCategory = () => {
    navigation.navigate('CategoryDetails');
  };

  return (
    <Wrapper isPaddingH>
      <TextHeader title={'All Categories'} _back />
      <Search />
      <FlatList
        data={categoryData}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}: any) => {
          return (
            <ClickableBox
              title={item?.title}
              source={item?.img}
              onClick={onClickCategory}
            />
          );
        }}
      />
    </Wrapper>
  );
};

export default AllCategories;

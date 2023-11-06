import React from 'react';
import {categoryData} from '@utils';
import {FlatList, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {ClickableBox, Search, TextHeader, Wrapper} from '@components';
import {RF} from '@theme';
import {navigate} from '@services';

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

  const onClickCategory = (item: any) => {
    navigate('CategoryDetails', {
      data: item,
    });
  };

  return (
    <Wrapper isPaddingH>
      <TextHeader title={'All Categories'} _back navigation={navigation} />
      <Search />

      <View style={{marginTop: RF(10)}} />
      <FlatList
        data={categoryData}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}: any) => {
          return (
            <ClickableBox
              title={item?.title}
              source={item?.img}
              onClick={() => onClickCategory(item)}
            />
          );
        }}
      />
    </Wrapper>
  );
};

export default AllCategories;

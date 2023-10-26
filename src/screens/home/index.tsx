import {
  Header,
  Search,
  SeeAll,
  Wrapper,
  DetailBox,
  HorizontalList,
} from '@components';
import styles from './styles';
import {setIsLoggedIn} from '@redux';
import {useDispatch} from 'react-redux';
import {company, freelancing} from '@assets';
import {View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {categoryData, companiesData} from '@utils';
import {navigate} from '@services';

const Home = ({navigation}: any) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(setIsLoggedIn(false));
  };
  const onOpenSeeAll = () => {
    // navigation.navigate('AllCategories', {item: categoryData});
    navigate('AllCategories', {});
  };

  return (
    <Wrapper>
      <View style={styles.container}>
        <View style={styles.view}>
          <Header handleLogOut={handleLogOut} />
          <Search />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <SeeAll title={'Categories'} onPress={onOpenSeeAll} />
          <HorizontalList data={categoryData} />

          <SeeAll title={'Companies'} source={company} />
          <DetailBox data={companiesData} />

          <SeeAll title={'Freelancers'} source={freelancing} />
          <DetailBox data={companiesData} />
        </ScrollView>
      </View>
    </Wrapper>
  );
};

export default Home;

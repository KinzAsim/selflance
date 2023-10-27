import {
  Header,
  Search,
  SeeAll,
  Wrapper,
  DetailBox,
  HorizontalList,
  Carousel_Pagination,
} from '@components';
import styles from './styles';
import React, {useRef} from 'react';
import {setIsLoggedIn} from '@redux';
import {useDispatch} from 'react-redux';
import {company, freelancing} from '@assets';
import {View, ScrollView} from 'react-native';
import {carousel, categoryData, companiesData} from '@utils';
import {navigate} from '@services';

const Home = ({navigation}: any) => {
  const dispatch = useDispatch();
  const flatListRef: any = useRef();

  const handleLogOut = () => {
    dispatch(setIsLoggedIn(false));
  };
  const onOpenSeeAll = () => {
    // navigation.navigate('AllCategories', {item: categoryData});
    navigate('AllCategories', {});
  };
  const onOpenSeeAll_companies = () => {
    navigation.navigate('CategoryItemDetail', {item: categoryData});
  };

  return (
    <Wrapper>
      <View style={styles.container}>
        <View style={styles.view}>
          <Header handleLogOut={handleLogOut} />
          <Search />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Carousel_Pagination data={carousel} flatListRef={flatListRef} />
          <SeeAll title={'Categories'} onPress={onOpenSeeAll} />
          <HorizontalList data={categoryData} />

          <SeeAll
            source={company}
            title={'Companies'}
            onPress={onOpenSeeAll_companies}
          />
          <DetailBox data={companiesData} />

          <SeeAll title={'Freelancers'} source={freelancing} />
          <DetailBox data={companiesData} />
        </ScrollView>
      </View>
    </Wrapper>
  );
};

export default Home;

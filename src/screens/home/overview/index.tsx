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
import {FreelancerData, carousel, categoryData, companiesData} from '@utils';
import {navigate} from '@services';

const Home = ({navigation}: any) => {
  const dispatch = useDispatch();
  const flatListRef: any = useRef();

  const handleLogOut = () => {
    dispatch(setIsLoggedIn(false));
  };
  const onOpenSeeAll = () => {
    navigate('AllCategories', {item: categoryData});
  };
  const onOpenSeeAll_companies = () => {
    // navigate('CategoryItemDetail', {item: categoryData});
  };
  const onOpenDetailBox = () => {
    // navigate('Category', {item: FreelancerData});
  };

  return (
    <Wrapper>
      <View style={styles.container}>
        <View style={styles.view}>
          <Header handleLogOut={handleLogOut} />
          <Search />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{paddingTop: 20}}>
          <Carousel_Pagination data={carousel} flatListRef={flatListRef} />
          <SeeAll title={'Categories'} onPress={onOpenSeeAll} />
          <HorizontalList data={categoryData} />

          <SeeAll
            source={company}
            title={'Companies'}
            onPress={onOpenSeeAll_companies}
          />
          <DetailBox data={companiesData} />

          <SeeAll
            title={'Freelancers'}
            source={freelancing}
            onPress={onOpenDetailBox}
          />
          <DetailBox data={companiesData} />
        </ScrollView>
      </View>
    </Wrapper>
  );
};

export default Home;

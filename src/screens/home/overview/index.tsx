import {
  Header,
  Search,
  SeeAll,
  Wrapper,
  DetailBox,
  HorizontalList,
  Carousel_Pagination,
} from '@components';
import React, {useRef} from 'react';
import styles from './styles';
import {setIsLoggedIn} from '@redux';
import {useDispatch} from 'react-redux';
import {company, freelancing} from '@assets';
import {View, ScrollView} from 'react-native';
import {carousel, categoryData, companiesData} from '@utils';

const Home = ({navigation}: any) => {
  const dispatch = useDispatch();
  const flatListRef: any = useRef();

  const handleLogOut = () => {
    dispatch(setIsLoggedIn(false));
  };
  const onOpenSeeAll = () => {
    navigation.navigate('AllCategories', {item: categoryData});
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

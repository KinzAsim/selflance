import React from 'react';
import styles from './styles';
import {setIsLoggedIn} from '@redux';
import {useDispatch} from 'react-redux';
import {company, freelancing} from '@assets';
import {View, ScrollView} from 'react-native';
import {
  DetailBox,
  Header,
  HorizontalList,
  Search,
  SeeAll,
  Wrapper,
} from '@components';
import {companiesData} from '@utils';

const Home = ({navigation}: any) => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(setIsLoggedIn(false));
  };

  return (
    <Wrapper>
      <View style={styles.container}>
        <View style={styles.view}>
          <Header handleLogOut={handleLogOut} />
          <Search />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <SeeAll title={'Categories'} />
          <HorizontalList />

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

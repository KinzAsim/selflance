import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {
  notification,
  rightArrow,
  search,
  user,
  category1,
  category2,
  gig,
  heart,
  freelancer,
} from '@assets';
import {RF} from '@theme';
import {useDispatch} from 'react-redux';
import {setIsLoggedIn} from '@redux';

const categoryData = [
  {
    img: category1,
    title: 'Digital Marketing',
    subTitle: 'Related all categories',
  },
  {
    img: category2,
    title: 'Digital Marketing',
    subTitle: 'Related all categories',
  },
  {
    img: category1,
    title: 'Digital Marketing',
    subTitle: 'Related all categories',
  },
];

const companiesData = [
  {
    img: gig,
    title: 'I will do ui design, ui ux design, website ui ux design',
    type: 'app designing',
  },
  {
    img: gig,
    title: 'I will do ui design, ui ux design, website ui ux design',
    type: 'app designing',
  },
  {
    img: freelancer,
    title: 'I will do ui design, ui ux design, website ui ux design',
    type: 'app designing',
  },
];

const freelancerData = [
  {
    img: freelancer,
    title: 'I will do ui design, ui ux design, website ui ux design',
    type: 'app designing',
  },
  {
    img: gig,
    title: 'I will do ui design, ui ux design, website ui ux design',
    type: 'app designing',
  },
  {
    img: freelancer,
    title: 'I will do ui design, ui ux design, website ui ux design',
    type: 'app designing',
  },
];

const Home = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(setIsLoggedIn(false));
  };
  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: RF(16)}}>
        <Header handleLogOut={handleLogOut} />
        <Search />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: RF(16)}}>
          <View
            style={[
              styles.row,
              {
                justifyContent: 'space-between',
                marginBottom: RF(16),
              },
            ]}>
            <Text style={[styles.fs14, styles.fw600, styles.textDark]}>
              Categories
            </Text>
            <Pressable style={styles.row}>
              <Text style={[styles.fs12, styles.fw400]}>View All</Text>
              <Image source={rightArrow} style={styles.rightArrow} />
            </Pressable>
          </View>
        </View>
        <View style={{height: 60.7, paddingLeft: 16, marginBottom: 24}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categoryData.map((d: any, index: any) => (
              <CategoryCard data={d} key={index} />
            ))}
          </ScrollView>
        </View>
        <View
          style={[
            styles.row,
            {
              justifyContent: 'space-between',
              marginBottom: 16,
              paddingHorizontal: 16,
            },
          ]}>
          <Text style={[styles.fs14, styles.fw600, styles.textBlue]}>
            Companies
          </Text>
          <Pressable style={styles.row}>
            <Text style={[styles.fs12, styles.fw400]}>View All</Text>
            <Image source={rightArrow} style={styles.rightArrow} />
          </Pressable>
        </View>
        <View style={{height: 247.14, paddingLeft: 16, marginBottom: 24}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {companiesData.map((d: any, index: any) => (
              <GigCard data={d} key={index} />
            ))}
          </ScrollView>
        </View>

        <View
          style={[
            styles.row,
            {
              justifyContent: 'space-between',
              marginBottom: 16,
              paddingHorizontal: 16,
            },
          ]}>
          <Text style={[styles.fs14, styles.fw600, styles.textBlue]}>
            Freelancers
          </Text>
          <Pressable style={styles.row}>
            <Text style={[styles.fs12, styles.fw400]}>View All</Text>
            <Image source={rightArrow} style={styles.rightArrow} />
          </Pressable>
        </View>
        <View style={{height: 247.14, paddingLeft: 16, marginBottom: 24}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {freelancerData.map((d: any, index: any) => (
              <GigCard data={d} key={index} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const Header = (props: any) => {
  const {handleLogOut} = props;
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        <Pressable onPress={handleLogOut}>
          <Image source={user} style={styles.userImg} />
        </Pressable>
        <View>
          <Text style={[styles.fs14, styles.fw400]}>Welcome!</Text>
          <Text style={[styles.fs16, styles.fw600, styles.textDark]}>
            Hammad Khan
          </Text>
        </View>
      </View>
      <View>
        <Image source={notification} style={styles.notificationImg} />
      </View>
    </View>
  );
};

const Search = () => {
  return (
    <View style={styles.searchContainer}>
      <Image source={search} style={styles.searchImg} />

      <TextInput
        style={styles.input}
        placeholder="Search Here....."
        // value={text}
        // onChangeText={onChange}
      />
    </View>
  );
};

const CategoryCard = (props: any) => {
  const {data} = props;
  return (
    <View style={[styles.categoryCardContainer, styles.row]}>
      <Image source={data.img} style={styles.categoryImg} />
      <View>
        <Text style={[styles.fs12, styles.fw400, styles.textDark]}>
          {data.title}
        </Text>
        <Text style={[styles.fs10, styles.fw400]}>{data.subTitle}</Text>
      </View>
    </View>
  );
};

const GigCard = (props: any) => {
  const {data} = props;
  return (
    <View style={styles.gigCardContainer}>
      <ImageBackground source={data.img} style={styles.gigImage}>
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
          <View style={styles.tag}>
            <Text style={[styles.fs8, styles.fw600, styles.textBlue]}>
              Company
            </Text>
          </View>

          <Image source={heart} style={{height: 21.5, width: 21.5}} />
        </View>
      </ImageBackground>

      <View style={{paddingHorizontal: 9.87, paddingTop: 6.78}}>
        <Text style={[styles.fs10, styles.fw400, {marginBottom: 6.78}]}>
          app designing
        </Text>
        <Text style={[styles.fs12, styles.fw400, styles.textDark]}>
          I will do ui design, ui ux design, website ui ux design
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  headerContainer: {
    marginBottom: 16,
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImg: {
    height: 46,
    width: 46,
    marginRight: 12,
  },
  notificationImg: {
    height: 24,
    width: 24,
  },

  //Search
  searchContainer: {
    width: '100%',
    height: 50,
    backgroundColor: '#F8F8F8',
    paddingLeft: 17,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#F8F8F8',
    height: 'auto',
    width: '92%',
    borderRadius: 8,
    // paddingHorizontal: 19,
    paddingVertical: 17,
    marginLeft: 8,
  },
  searchImg: {
    height: 20,
    width: 20,
  },

  // category

  categoryCardContainer: {
    // backgroundColor: 'red',
    height: 60.7,
    width: 177.7,
    borderRadius: 39,
    padding: 8,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    marginRight: 8,
  },
  categoryImg: {
    width: 44.7,
    height: 44.7,
    marginRight: 8,
  },

  //gig
  gigCardContainer: {
    height: 247.14,
    width: 227.26,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    marginRight: 16,
  },

  gigImage: {
    width: 227,
    height: 127.69,
    backgroundColor: 'green',
    padding: 8,
  },

  tag: {
    width: 51.18,
    height: 17.09,
    backgroundColor: '#fff',
    borderRadius: 12.94,
    alignItems: 'center',
    justifyContent: 'center',
  },

  //common

  rightArrow: {
    width: 4,
    height: 8,
    marginLeft: 5,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  fs8: {
    fontSize: 8,
  },

  fs10: {
    fontSize: 10,
  },

  fs12: {
    fontSize: 12,
  },
  fs14: {
    fontSize: 14,
  },
  fs16: {
    fontSize: 16,
  },
  fw400: {
    fontWeight: '400',
  },
  fw600: {
    fontWeight: '600',
  },

  textDark: {
    color: '#434343',
  },
  textBlue: {
    color: '#00538F',
  },
});

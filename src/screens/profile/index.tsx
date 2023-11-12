import React from 'react';
import {upgrade} from '@assets';
import {styles} from './styles';
import {RF, WHITE, dim_gray} from '@theme';
import {logOut, profileData, profilePolicy} from '@utils';
import LinearGradient from 'react-native-linear-gradient';
import {FlatList, Image, ScrollView, View} from 'react-native';
import {ClickableBox, ProfileHeader, Text, Wrapper} from '@components';

const Profile = () => {
  const onClickCategory = () => {};

  return (
    <Wrapper bgClr={dim_gray}>
      <ProfileHeader title={'Kinza'} email={'Kinza@gmail.com'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient
          angle={150}
          useAngle={true}
          angleCenter={{x: 0.5, y: 0.5}}
          colors={[
            '#034A79',
            '#0071BD',
            '#0071BD',
            '#0071BD',
            '#50B1F2',
            '#50B1F2',
          ]}
          style={styles.linear}>
          <Image source={upgrade} style={styles.img} />
          <View>
            <Text semiBold size={14} color={WHITE}>
              Upgrade To Seller Account
            </Text>
            <Text regular size={14} color={WHITE}>
              Sell Service And Start Earning Now.
            </Text>
          </View>
        </LinearGradient>
        <View style={styles.view}>
          <FlatList
            data={profileData}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.content}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}: any) => {
              return (
                <ClickableBox
                  source={item?.img}
                  style={styles.box}
                  title={item?.title}
                  onClick={() => onClickCategory(item)}
                />
              );
            }}
          />
        </View>

        <View style={styles.view}>
          <FlatList
            data={profilePolicy}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.content}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}: any) => {
              return (
                <ClickableBox
                  source={item?.img}
                  style={styles.box}
                  title={item?.title}
                  onClick={() => onClickCategory(item)}
                />
              );
            }}
          />
        </View>

        <View>
          <FlatList
            data={logOut}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.content}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}: any) => {
              return (
                <ClickableBox
                  source={item?.img}
                  style={styles.box}
                  title={item?.title}
                  onClick={() => onClickCategory(item)}
                />
              );
            }}
          />
        </View>

        <View style={{marginBottom: RF(40)}} />
      </ScrollView>
    </Wrapper>
  );
};

export default Profile;

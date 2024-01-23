import React, {useState} from 'react';
import {styles} from './styles';
import {RF, WHITE, dim_gray, text_Color2, grayButton} from '@theme';
import {logOut, profileData, profilePolicy} from '@utils';
import {FlatList, Image, ScrollView, View} from 'react-native';
import {ClickableBox, ProfileHeader, Text, Wrapper} from '@components';
import ToggleSwitch from 'toggle-switch-react-native';
import {navigate} from '@services';
const Profile = () => {
  const onClickCategory = (item: any) => {
    item.screen && navigate(item.screen);
  };
  const [toggle, setToggle] = useState(false);

  return (
    <Wrapper bgClr={grayButton}>
      <View style={{backgroundColor: WHITE}}>
        <ProfileHeader title={'User'} email={'User@gmail.com'} />
        <View style={styles.buyerMode}>
          <Text semiBold size={14}>
            Buyer Mode
          </Text>
          <ToggleSwitch
            isOn={toggle}
            onColor="green"
            offColor={text_Color2}
            labelStyle={{color: 'black', fontWeight: '900'}}
            size="medium"
            onToggle={() => setToggle(!toggle)}
          />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: RF(13), backgroundColor: WHITE}}>
          <View style={styles.view}>
            <FlatList
              data={profileData}
              scrollEnabled={false}
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
              scrollEnabled={false}
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
              scrollEnabled={false}
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
        </View>
      </ScrollView>
    </Wrapper>
  );
};

export default Profile;

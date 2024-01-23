import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {
  ProfileHeader,
  ShiftCards,
  Text,
  TextHeader,
  UserDescription,
  Wrapper,
} from '@components';
import {_profiletabs} from '@utils';
import {
  GREY,
  neutral,
  primary,
  RF,
  text_Color2,
  text_Color3,
  WHITE,
} from '@theme';
import {share, user} from '@assets';

const skillsData = [
  {id: 0, title: 'UI UX'},
  {id: 1, title: 'Design'},
  {id: 2, title: 'Development'},
  {id: 3, title: 'Development'},
  {id: 4, title: 'Java'},
  {id: 5, title: 'UI/UX'},
];

const MyProfile = ({navigation}: any) => {
  const [selectedShift, setSelectedShift] = useState('About');

  const [selectedSkillIndices, setSelectedSkillIndices] = useState<any>([]);
  const handleSelect = (index: any) => {
    setSelectedSkillIndices((prevIndices: any) => {
      if (prevIndices.includes(index)) {
        return prevIndices.filter((i: any) => i !== index);
      } else {
        return [...prevIndices, index];
      }
    });
  };
  const handleShiftChange = (newShift: any) => {
    setSelectedShift(newShift);
  };
  return (
    <ScrollView>
      <Wrapper>
        <TextHeader
          _back
          navigation={navigation}
          _Icon2={share}
          setting
          s_source1={share}
          source2={false}
        />
        <View style={styles.profHeading}>
          <View style={styles.view}>
            <Image source={user} style={styles.img} />
          </View>
          <View>
            <Text semiBold size={16}>
              Stephanie Clara
            </Text>
            <Text regular size={12}>
              stephan4536@gmail.com
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal: RF(18)}}>
          <ShiftCards
            fSize={12}
            width={'100%'}
            tabs={_profiletabs}
            selectedShift={selectedShift}
            onShiftChange={handleShiftChange}
          />
          <UserDescription
            user_Desc={
              "Pancakes are some people's favorite breakfast, who doesn't like pancakes? Especially with the real honey splash on top of the pancakes, of course everyone loves that! besides being Read More..."
            }
          />
          <View style={styles.containerTop}>
            <Text semiBold size={14} color={neutral}>
              Verification
            </Text>
            <Text regular size={14} color={text_Color3} style={styles.top}>
              ID: Verified
            </Text>
          </View>
          <View>
            <Text semiBold size={14} color={neutral}>
              Languages
            </Text>
            <Text regular size={14} color={text_Color3} style={styles.top}>
              Urdu - Fluent
            </Text>
            <Text regular size={14} color={text_Color3} style={styles.top}>
              English - Fluent
            </Text>
            <Text regular size={14} color={text_Color3} style={styles.top}>
              German - Fluent
            </Text>
          </View>
          <View style={styles.containerTop}>
            <Text semiBold size={14} color={neutral}>
              Skills
            </Text>
            <FlatList
              data={skillsData}
              numColumns={3}
              contentContainerStyle={{width: '100%'}}
              columnWrapperStyle={{
                width: '100%',
              }}
              renderItem={({item, index}) => (
                <Pressable
                  onPress={() => handleSelect(index)}
                  style={[
                    styles.select,
                    {
                      backgroundColor: selectedSkillIndices.includes(index)
                        ? primary
                        : '#F5F5F5',
                    },
                  ]}>
                  <Text
                    color={
                      selectedSkillIndices.includes(index) ? WHITE : text_Color3
                    }>
                    {item.title}
                  </Text>
                </Pressable>
              )}
            />
          </View>
        </View>
      </Wrapper>
    </ScrollView>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  containerTop: {
    marginVertical: RF(30),
  },
  top: {
    marginTop: RF(12),
  },
  select: {
    paddingVertical: RF(10),
    borderRadius: RF(30),
    marginTop: RF(12),
    marginRight: 3,
    paddingHorizontal: RF(25),
  },
  header: {
    flexDirection: 'column',
  },
  view: {
    width: RF(80),
    height: RF(80),
    borderWidth: 1,
    borderRadius: 50,
    alignItems: 'center',
    borderColor: primary,
    justifyContent: 'center',
  },
  img: {
    width: RF(77),
    height: RF(77),
    resizeMode: 'contain',
  },
  img2: {
    width: RF(13),
    height: RF(12),
    resizeMode: 'contain',
  },
  profHeading: {
    width: '70%',
    alignSelf: 'center',
    top: RF(-60),
    alignItems: 'center',
  },
  iV: {
    width: RF(32),
    height: RF(32),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
    borderRadius: RF(10),
    marginRight: RF(15),
  },
});

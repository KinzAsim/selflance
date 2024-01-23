import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  View,
} from 'react-native';
import React from 'react';
import {
  CustomButton,
  EmptyContent,
  Text,
  TextHeader,
  Wrapper,
} from '@components';
import {useTheme} from '@react-navigation/native';
import {light_grey, primary, RF} from '@theme';
import {one, three, two} from '@assets';
import {navigate} from '@services';
import {useSelector} from 'react-redux';
const Portfolio = ({navigation}: any) => {
  const ArrayData = [
    {
      id: 1,
      Title: 'Chefy - Personal Chef App',
      Avatar: one,
    },
    {
      id: 2,
      Title: 'Chefy - Personal Chef App',
      Avatar: two,
    },

    {
      id: 3,
      Title: 'Chefy - Personal Chef App',
      Avatar: three,
    },
  ];

  const {portfolioImages} = useSelector((state: any) => state.root.user);
  console.log(portfolioImages, 'portfolioImages');

  const theme: any = useTheme();
  const colors = theme.colors;
  console.log(colors, 'LabOrange');
  return (
    <Wrapper>
      <View style={styles.row}>
        <TextHeader
          title={'Portfolio'}
          _back
          f_Size={20}
          navigation={navigation}
        />
        <Pressable
          style={styles.workSpace}
          onPress={() => navigate('AddPortfolio')}>
          <Text regular size={10} color={primary}>
            Add Portfolio
          </Text>
        </Pressable>
      </View>
      <View style={{marginTop: RF(16), paddingHorizontal: RF(18)}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={portfolioImages}
          ListEmptyComponent={<EmptyContent title={'No Portfolio Added'} />}
          renderItem={({item}: any) => (
            <View
              style={{
                width: '100%',
                height: RF(220),
                borderRadius: RF(16),
                marginBottom: RF(16),
                overflow: 'hidden',
              }}>
              <Image
                source={{uri: item.image}}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </View>
          )}
        />
      </View>
    </Wrapper>
  );
};
export default Portfolio;
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  workSpace: {
    width: RF(100),
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 12,
    backgroundColor: light_grey,
    borderColor: primary,
    right: RF(18),
  },
});

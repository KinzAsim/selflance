import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Text, TextHeader, Wrapper} from '@components';
import {useTheme} from '@react-navigation/native';
import {primary, RF} from '@theme';
import {one, three, two} from '@assets';
import {navigate} from '@services';
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: RF(16), paddingHorizontal: RF(18)}}>
          {ArrayData.map((item, index) => (
            <View key={index}>
              <Pressable>
                <Image
                  source={item.Avatar}
                  style={{
                    width: '100%',
                    height: RF(220),
                    borderRadius: RF(16),
                  }}
                />
              </Pressable>
              <Text
                size={14}
                style={{
                  marginVertical: RF(8),
                  fontWeight: '700',
                  color: '#171725',
                }}>
                {item.Title}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
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
    borderColor: primary,
    right: RF(18),
  },
});

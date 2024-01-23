import {StyleSheet, View, Pressable, Image, FlatList} from 'react-native';
import React from 'react';
import {extraLight, primary, RF, textColor} from '@theme';
import Text from '../text';
import {addIcon} from '@assets';

const data = [
  {
    id: 1,
    desc: 'Over the course of the last two years, for to design teams t',
    icon: addIcon,
  },
  {
    id: 2,
    desc: 'Over the course of the last two years, for to design teams t',
    icon: addIcon,
  },
  {
    id: 3,
    desc: 'Over the course of the last two years, for to design teams t',
    icon: addIcon,
  },
];

const FAQs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.row}>
          <Text size={24} bold color={primary}>
            FAQs
          </Text>
          <Pressable
            style={styles.workSpace}
            //   onPress={() => navigate('CreateWorkspace')}
          >
            <Text regular size={10} color={primary}>
              Add Workspace
            </Text>
          </Pressable>
        </View>
        <FlatList
          data={data}
          renderItem={({item}: any) => (
            <View style={[styles.row, styles.v2]}>
              <Text size={12} regular color={textColor} style={{width: '70%'}}>
                {item.desc}
              </Text>
              <Image
                source={item.icon}
                style={{width: RF(24), height: RF(24)}}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default FAQs;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: RF(18),
  },
  card: {
    width: '100%',
    borderWidth: 0.5,
    paddingHorizontal: RF(16),
    paddingVertical: RF(32),
    borderColor: extraLight,
    borderRadius: 8,
  },
  workSpace: {
    width: RF(100),
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 12,
    borderColor: primary,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  v2: {
    marginTop: RF(20),
    borderBottomWidth: 0.5,
    paddingBottom: RF(8),
    borderColor: extraLight,
  },
});

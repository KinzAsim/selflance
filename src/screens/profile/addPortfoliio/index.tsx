import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  CustomButton,
  EmptyContent,
  Text,
  TextHeader,
  Wrapper,
} from '@components';
import {useTheme} from '@react-navigation/native';
import {light_grey, primary, RF, text_Color3} from '@theme';
import {add, addIcon} from '@assets';
import ImagePicker from 'react-native-image-crop-picker';

import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPortfolioImages} from '@redux';

const AddPortfolio = ({navigation}: any) => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const dispatch = useDispatch();
  const {portfolioImages} = useSelector((state: any) => state.root.user);

  const openLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        if (image && image.path) {
          console.log(image.path);
          dispatch(
            setPortfolioImages([...portfolioImages, {image: image.path}]),
          );
        } else {
          console.log('No image selected or an error occurred.');
        }
      })
      .catch(error => {
        console.log('Error selecting image:', error);
      });
  };

  const handleSubmit = () => {};

  return (
    <Wrapper>
      <TextHeader
        _back
        title={'Add Portfolio'}
        bgClr={'transparent'}
        navigation={navigation}
      />
      <View style={styles.card}>
        <Text size={14} color={'#00538F'}>
          Please upload your work
        </Text>
        {portfolioImages == '' ? (
          <Pressable onPress={openLibrary} style={styles.uploadCard}>
            <View style={[styles.row, {justifyContent: 'center'}]}>
              <Image source={addIcon} style={{width: RF(24), height: RF(24)}} />
              <Text
                size={14}
                color={'#1FA4EF'}
                style={{fontWeight: '400', marginLeft: RF(4)}}>
                upload work photos
              </Text>
            </View>
            <Text size={12} color={'#949494'} style={{textAlign: 'center'}}>
              accept image,3d ,JPG
            </Text>
          </Pressable>
        ) : (
          <Pressable onPress={openLibrary} style={styles.addMore}>
            <Image source={add} style={styles.addIcon} />
            <Text size={12} regular>
              Add More
            </Text>
          </Pressable>
        )}
      </View>

      <FlatList
        data={portfolioImages}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginHorizontal: RF(18),
        }}
        numColumns={2}
        ListEmptyComponent={() => <EmptyContent title={'No recent Uploads'} />}
        renderItem={({item}: any) => (
          <View
            style={{
              height: RF(112),
              width: '48.7%',
              marginBottom: RF(8),
            }}>
            <Image
              source={{uri: item.image}}
              style={{
                height: '100%',
                width: '100%',
                resizeMode: 'cover',
              }}
            />
          </View>
        )}
      />
      <View style={{paddingHorizontal: RF(18)}}>
        <CustomButton title={'Submit Requirements'} />
      </View>
    </Wrapper>
  );
};

export default AddPortfolio;

const styles = StyleSheet.create({
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
    right: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  uploadCard: {
    paddingHorizontal: RF(16),
    borderWidth: 0.4,
    borderColor: text_Color3,
    borderRadius: RF(8),
    marginVertical: RF(16),
    paddingVertical: RF(32),
  },
  card: {
    backgroundColor: '#fff',
    padding: RF(16),
    borderRadius: RF(8),
    marginVertical: RF(24),
  },
  addMore: {
    width: '100%',
    paddingVertical: RF(7),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: light_grey,
    borderWidth: 1,
    borderRadius: 8,
    gap: RF(8),
    borderColor: primary,
    marginTop: RF(24),
  },
  addIcon: {height: RF(10), width: RF(10), resizeMode: 'contain'},
});

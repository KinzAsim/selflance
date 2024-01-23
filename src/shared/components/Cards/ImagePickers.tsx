import React, {useState} from 'react';
import {
  View,
  ScrollView,
  ImageBackground,
  Pressable,
  Image,
  StyleSheet,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {primary, RF} from '@theme';
import Text from '../text';
import CustomCard from './customCard';
import {add, trash} from '@assets';
const ImagePickers = () => {
  const [selectedImage, setSelectedImage] = useState<any>([]);

  const handlePicker = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: RF(295),
        height: RF(162),
        cropping: true,
      });
      setSelectedImage([...selectedImage, {uri: image.path}]);
    } catch (error) {}
  };

  const handleDeletePhoto = (indexToDelete: any) => {
    const updatedImages = [...selectedImage];
    updatedImages.splice(indexToDelete, 1);
    setSelectedImage(updatedImages);
  };

  return (
    <CustomCard>
      <View style={styles.row}>
        <Text size={16} semiBold color={'#000'}>
          Add Images for portfolio
        </Text>
        <Text size={12} regular color={'#000'}>
          (upto 3)
        </Text>
      </View>
      <Text size={10} regular style={{marginTop: RF(4)}}>
        for the images the size (1280,720) is recommended
      </Text>
      <Pressable onPress={handlePicker} style={styles.addMore}>
        <Image source={add} style={styles.addIcon} />
        <Text size={12} regular>
          Add More
        </Text>
      </Pressable>

      <ScrollView>
        {selectedImage.map(({uri}: any, index: any) => (
          <View key={index} style={styles.Container}>
            <ImageBackground
              source={{uri: uri}}
              style={{width: '100%', height: '100%'}}
            />
            <Pressable
              onPress={() => handleDeletePhoto(index)}
              style={styles.deleteCircle}>
              <Image source={trash} style={styles.percent} />
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </CustomCard>
  );
};

export default ImagePickers;
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  percent: {height: '100%', width: '100%'},
  Container: {
    marginTop: RF(20),
    width: '100%',
    height: RF(162),
    overflow: 'hidden',
  },

  addMore: {
    width: '100%',
    paddingVertical: RF(7),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 8,
    gap: RF(8),
    borderColor: primary,
    marginTop: RF(24),
  },
  deleteCircle: {
    height: RF(22),
    width: RF(22),
    borderRadius: 12,
    backgroundColor: '#fff',
    position: 'absolute',
    right: 0,
    margin: 9,
    padding: 3,
  },
  addIcon: {height: RF(10), width: RF(10), resizeMode: 'contain'},
});

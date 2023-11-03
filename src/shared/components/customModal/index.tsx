import {
  StyleSheet,
  View,
  Modal,
  Pressable,
  Alert,
  TouchableWithoutFeedback,
  Image,
  ViewProps,
  TouchableOpacityProps,
} from 'react-native';
import React, {useState} from 'react';
import {RF, textColor, WHITE} from '@theme';
import Text from '../text';
interface Props extends TouchableOpacityProps {
  title1?: any;
  title2: any;
  _sourceImage1?: any;
  _sourceImage2?: any;
  ref?: any;
  onClose: () => void;
  modalVisible?: any;
  withMenu?: any;
}

const SmallModal = (props: Props) => {
  const {
    _sourceImage1,
    _sourceImage2,
    onClose,
    modalVisible,
    title1,
    title2,
    withMenu,
  } = props;
  console.log(modalVisible, 'sss');

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <TouchableWithoutFeedback
        onPress={onClose} // Close the modal when touched outside
      >
        <View style={styles.mainView}>
          <View
            style={[
              styles.centeredView,

              {
                position: withMenu ? 'relative' : 'absolute',
                alignSelf: withMenu ? 'flex-end' : 'flex-start',
                bottom: withMenu ? -60 : 60,
              },
            ]}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
              }}>
              <Image
                source={_sourceImage1}
                style={{
                  height: RF(20),
                  width: RF(20),
                  marginHorizontal: 10,
                }}
              />
              <Text color={textColor} size={12}>
                {title1}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
              }}>
              <Image
                source={_sourceImage2}
                style={{
                  height: RF(20),
                  width: RF(20),
                  marginHorizontal: 10,
                }}
              />
              <Text color={textColor} size={12}>
                {title2}
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default SmallModal;

const styles = StyleSheet.create({
  mainView: {
    height: '100%',
    width: '100%',
  },
  centeredView: {
    height: RF(64),
    width: RF(122),
    borderRadius: 6,
    alignItems: 'center',
    marginLeft: 10,
    justifyContent: 'space-evenly',
    backgroundColor: WHITE,
    elevation: 2,
    position: 'absolute',
  },
});

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
  _sourceImage1?: any;
  _sourceImage2?: any;
  ref?: any;
  onClose: () => void;
  modalVisible?: any;
}

const SmallModal = (props: Props) => {
  const {_sourceImage1, _sourceImage2, onClose, modalVisible} = props;
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <TouchableWithoutFeedback
        onPress={onClose} // Close the modal when touched outside
      >
        <View style={styles.mainView}>
          <View style={styles.centeredView}>
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
                Photo Library
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
                Choose File
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
    bottom: RF(60),
  },
});

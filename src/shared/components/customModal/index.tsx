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
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {
  grayButton,
  RF,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  textColor,
  WHITE,
} from '@theme';
import Text from '../text';
import {BlurView} from '@react-native-community/blur';
import CustomButton from '../customButton';
import CloseButton from '../closeButton';

interface Props extends TouchableOpacityProps {
  title1?: any;
  openLibrary?: () => void;
  openCameraPicker?: () => void;
  title2?: any;
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
    openLibrary,
    openCameraPicker,
    title2,
    withMenu,
  } = props;

  const [secondModalVisible, setSecondModalVisible] = useState(false);

  // Function to open the second modal
  const openSecondModal = () => {
    setSecondModalVisible(true);
  };
  const closeSecondModal = () => {
    setSecondModalVisible(false);
  };
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
                bottom: withMenu ? RF(-60) : RF(130),
              },
            ]}>
            <TouchableOpacity
              onPress={
                title1 == 'Photo Library'
                  ? openCameraPicker
                  : () => openSecondModal()
              }
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
            </TouchableOpacity>
            <TouchableOpacity
              onPress={title2 == 'Choose File' ? openLibrary : openCameraPicker}
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
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>

      <Modal
        animationType="slide"
        transparent={true}
        visible={secondModalVisible}
        onRequestClose={() => {
          closeSecondModal();
        }}>
        <View style={styles.absolute}>
          <StatusBar backgroundColor={'rgba(0,0,0,0.5)'} />
          <View
            style={{
              height: RF(182),
              width: '100%',
              padding: RF(20),
              borderRadius: RF(18),
              backgroundColor: '#fff',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text semiBold size={20} color={textColor}>
                Block On Messanger
              </Text>
              <CloseButton onPress={() => setSecondModalVisible(false)} />
            </View>
            <Text size={12} color={textColor} regular>
              You are blocking Angle Young. The conversation will stay in chats
              unless you hide it
            </Text>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: RF(10),
                width: '100%',
                justifyContent: 'flex-end',
              }}>
              <View style={{height: RF(34), width: RF(95), marginRight: 10}}>
                <CustomButton
                  height={'100%'}
                  title={'Cancel'}
                  f_Size={12}
                  onPress={() => setSecondModalVisible(false)}
                />
              </View>
              <View style={{height: RF(34), width: RF(95)}}>
                <CustomButton
                  height={'100%'}
                  title={'Block'}
                  f_Size={12}
                  style={{backgroundColor: grayButton}}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
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
    backgroundColor: '#fff',
  },
  absolute: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    height: '100%',
    padding: RF(20),
  },
});

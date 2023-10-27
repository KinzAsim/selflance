import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {Modalize} from 'react-native-modalize';
import React, {useRef} from 'react';
import {grayButton, RF, SCREEN_HEIGHT, WHITE} from '@theme';
import ModalHeader from '../modalHeader';
interface Props extends TouchableOpacityProps {
  children?: any;
  height?: any;
  modalHeader?: boolean;
  headerTitle?: any;
}

const SwipeModal = (props: Props) => {
  const {modalHeader, headerTitle} = props;
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const onClose = () => {
    modalizeRef.current?.close();
  };

  return (
    <>
      <TouchableOpacity onPress={onOpen}>
        <Text>Open the modal</Text>
      </TouchableOpacity>

      <Modalize
        overlayStyle={{backgroundColor: 'rgba(0,0,0,0.1)'}}
        handleStyle={{
          marginTop: 20,
          backgroundColor: grayButton,
          width: RF(50),
        }}
        ref={modalizeRef}
        modalHeight={props?.height}
        modalStyle={{
          backgroundColor: WHITE,
        }}>
        <View style={{flex: 1, padding: RF(20)}}>
          {modalHeader == true ? (
            <ModalHeader headerTitle={headerTitle} onClick={onClose} />
          ) : null}
          {props?.children}
        </View>
      </Modalize>
    </>
  );
};

export default SwipeModal;

const styles = StyleSheet.create({});

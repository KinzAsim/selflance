import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  StatusBar,
} from 'react-native';
import {Modalize} from 'react-native-modalize';
import React, {useRef, useState} from 'react';
import {black_Shadow, grayButton, RF, SCREEN_HEIGHT, WHITE} from '@theme';
import ModalHeader from '../modalHeader';
import {BlurView} from '@react-native-community/blur';
import {fadedLine} from '@assets';
interface Props extends TouchableOpacityProps {
  children?: any;
  modalHeader?: boolean;
  headerTitle?: any;
  ref: any;
  onClose: () => void;
}

const SwipeModal = React.forwardRef((props: Props, ref) => {
  const {modalHeader, headerTitle, onClose} = props;
  const [blur, setBulr] = useState(false);

  console.log(blur, 'onClose');

  return (
    <>
      <StatusBar backgroundColor={blur == true ? 'rgba(0,0,0,0.6)' : WHITE} />
      {blur == true ? (
        <BlurView
          style={styles.absolute}
          blurType="materialLight"
          blurAmount={1}
        />
      ) : null}
      <Modalize
        onClose={() => setBulr(false)}
        onOpen={() => setBulr(true)}
        overlayStyle={{backgroundColor: 'transparent'}}
        handlePosition="inside"
        handleStyle={{
          backgroundColor: black_Shadow,
          width: RF(50),
        }}
        ref={ref}
        adjustToContentHeight={true}
        // modalHeight={props?.height}
        modalStyle={{
          backgroundColor: WHITE,
        }}>
        <View style={{flex: 1, padding: RF(20)}}>
          {modalHeader == true ? (
            <ModalHeader headerTitle={headerTitle} onClose={onClose} />
          ) : null}
          {props?.children}
        </View>
      </Modalize>
    </>
  );
});

export default SwipeModal;

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    zIndex: 100,
    height: '100%',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

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
  modalHeader?: boolean;
  headerTitle?: any;
  ref: any;
  onClose: () => void;
}

const SwipeModal = React.forwardRef((props: Props, ref) => {
  const {modalHeader, headerTitle, onClose} = props;

  return (
    <>
      <Modalize
        overlayStyle={{backgroundColor: 'rgba(0,0,0,0.1)'}}
        handleStyle={{
          marginTop: 20,
          backgroundColor: grayButton,
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

const styles = StyleSheet.create({});

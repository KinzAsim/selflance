import {
  StyleSheet,
  View,
  Image,
  TouchableOpacityProps,
  TouchableOpacity,
  TextProps,
} from 'react-native';
import React from 'react';
import {close} from '@assets';
import {grayButton, RF, textColor} from '@theme';
import Text from '../text';
interface Props extends TouchableOpacityProps {
  headerTitle: string;
  onClick: () => void;
}
const ModalHeader = (props: Props) => {
  const {headerTitle, onClick} = props;
  return (
    <View style={[styles.rowDirection_View]}>
      <TouchableOpacity onPress={onClick}>
        <Image source={close} style={styles.close} />
      </TouchableOpacity>
      <Text color={textColor} semiBold size={20}>
        {headerTitle}
      </Text>
      <Text color={textColor} regular size={12}>
        Clear All
      </Text>
    </View>
  );
};

export default ModalHeader;

const styles = StyleSheet.create({
  rowDirection_View: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  close: {
    height: RF(32),
    width: RF(32),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: grayButton,
  },
});

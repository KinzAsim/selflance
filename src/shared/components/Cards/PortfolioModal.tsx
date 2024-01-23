import {Modal, StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {extraLight, neutral, RF, textColor} from '@theme';
import {useTheme} from '@react-navigation/native';
import Text from '../text';
import CustomButton from '../customButton';
import {tick, tick2} from '@assets';

interface Props {
  Visible?: any;
  onclose?: any;
}
const PortfolioModal = (props: Props) => {
  const {Visible, onclose} = props;
  const theme: any = useTheme();
  const colors = theme.colors;
  return (
    <>
      <Modal transparent={true} animationType="none" visible={Visible}>
        <View style={styles.Container}>
          <View style={styles.Container2}>
            <Image source={tick2} style={{width: RF(80), height: RF(80)}} />
            <Text size={20} semiBold color={neutral}>
              Congratulation
            </Text>
            <Text
              regular
              size={12}
              style={[styles.text, {color: colors.backgroundColor}]}>
              Your Workplace is Successfully Completed And Click On Publish To
              Give Your Services.
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: RF(16),
                width: '100%',
              }}>
              <CustomButton
                title="Go Back"
                height={RF(40)}
                f_Size={RF(12)}
                onPress={onclose}
                grayColor={textColor}
                color={'#fff'}
                buttonStyle={{
                  width: '45%',
                  borderWidth: 1,
                  borderColor: extraLight,
                }}
              />
              <CustomButton
                title="Publish"
                height={RF(40)}
                f_Size={RF(12)}
                onPress={onclose}
                buttonStyle={{width: '45%'}}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default PortfolioModal;

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: RF(24),
    backgroundColor: 'rgba(62, 62, 62, 0.4)',
  },
  Container2: {
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: RF(24),
    paddingVertical: RF(24),
    borderRadius: RF(12),
    alignItems: 'center',
  },
  text: {
    marginTop: RF(16),
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

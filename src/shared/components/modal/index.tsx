import {
  View,
  Modal,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {Text, CustomButton} from '@components';
import React, {useState, useEffect} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {black_text, lightText, RF, secondary, txt_gray} from '@theme';

interface Props extends TouchableOpacityProps {
  isVisible?: any;
  closeModal?: any;
}
const CustomModal = (props: Props) => {
  const [timer, setTimer] = useState(30);
  const [codeFill, setCodeFill] = useState('');

  useEffect(() => {
    if (props?.isVisible) {
      setTimer(30);
      const intervalId = setInterval(() => {
        setTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [props.isVisible]);

  const resetTimer = () => {
    setTimer(30);
  };

  return (
    <Modal visible={props?.isVisible} animationType="fade" transparent={true}>
      <StatusBar backgroundColor={'rgba(0,0,0,0.6)'} />
      <View style={styles.container}>
        <TouchableOpacity onPress={props?.closeModal}></TouchableOpacity>
        <View style={styles.centered_View}>
          <Text color={black_text} size={20} semiBold>
            Verification
          </Text>

          <Text color={txt_gray} size={14} regular>
            A verification email will be sent to your email @someone@email.com
          </Text>

          <OTPInputView
            style={styles.otp}
            pinCount={6}
            autoFocusOnLoad={false}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              setCodeFill(code);
            }}
          />
          <Text style={styles.timer}>0:{timer} sec</Text>
          <View style={styles.txt}>
            <Text size={14} color={txt_gray} regular>
              Didn’t receive code?
            </Text>
            <Text
              disabled={timer == 0 ? false : true}
              onPress={resetTimer}
              size={14}
              color={secondary}
              semiBold
              style={{marginLeft: 5}}>
              Resend Code
            </Text>
          </View>
          <CustomButton
            disabled={codeFill.length !== 6}
            color={codeFill.length === 6 ? secondary : lightText}
            title={'Confirm'}
            height={RF(40)}
            onPress={props?.closeModal}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  otp: {width: '100%', height: 80},
  timer: {
    fontSize: RF(14),
    color: '#000',
    fontFamily: 'Raleway-Bold',
  },
  txt: {
    height: RF(25),
    flexDirection: 'row',
    width: '100%',
    marginVertical: 15,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 20,
    justifyContent: 'center',
  },

  centered_View: {
    height: RF(335),
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: RF(20),
    alignItems: 'center',
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: secondary,
  },

  underlineStyleBase: {
    padding: 0,
    width: RF(37),
    height: RF(37),
    color: '#000',
    fontFamily: 'Poppins-Bold',
    borderRadius: 8,
    alignItems: 'center',
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: secondary,
  },
});

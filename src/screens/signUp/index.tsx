import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {RF} from '@theme';
import {CustomButton, CustomCheckBox, Wrapper} from '@components';
import {navigate} from '@services';
import React, {useState} from 'react';
import {close, fadedLine, fb, google, logo, show} from '@assets';
import CheckBox from '@react-native-community/checkbox';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;
const primary = '#00538F';
const placeHolder = 'gray';

const SignUp = ({navigation}: any) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const onClick = () => {
    navigation.navigate('SignUp');
  };

  return (
    <Wrapper isPaddingH>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={[styles.justify_Row, {marginTop: RF(30)}]}>
          <Image style={styles.logo} source={logo} resizeMode={'contain'} />
          <Image
            source={close}
            style={styles.close_Icon}
            resizeMode={'contain'}
          />
        </View>

        <View style={{marginVertical: RF(20)}}>
          <Text style={styles.semiBold}>Sign Up</Text>
          <Text style={styles.regular}>Create Your Account To continue</Text>
        </View>

        <TextInput
          placeholder={'User Name'}
          style={[styles.entry_Fields, {marginTop: RF(10)}]}
          placeholderTextColor={placeHolder}
        />
        <TextInput
          placeholder={'Enter E-mail Address'}
          style={[styles.entry_Fields, {marginTop: RF(0)}]}
          placeholderTextColor={placeHolder}
        />
        <View
          style={[
            styles.entry_Fields,
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
          ]}>
          <TextInput
            style={styles.password_Field}
            placeholder={'Enter Password'}
            placeholderTextColor={placeHolder}
          />
          <Image
            source={show}
            resizeMode={'contain'}
            style={{height: RF(24), width: RF(24)}}
          />
        </View>

        <View
          style={[
            styles.justify_Row,
            {marginBottom: RF(25), marginTop: RF(5)},
          ]}>
          <CustomCheckBox />
          <View style={{flexDirection: 'row', width: '70%', marginLeft: 7}}>
            <Text style={[styles.extra_Small, {color: placeHolder}]}>
              Yes, I understand and agree to the
              {<Text style={styles.extra_Small}> Terms of Services </Text>}
            </Text>
          </View>
        </View>

        <CustomButton title={'SignUp'} />

        <View style={styles.or_view}>
          <Image
            source={fadedLine}
            resizeMode={'contain'}
            style={styles.faded_Line}
          />
          <Text style={{marginHorizontal: RF(10)}}>or</Text>
          <Image
            source={fadedLine}
            resizeMode={'contain'}
            style={styles.faded_Line}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: RF(30),
          }}>
          <View style={styles.auth_View}>
            <Image style={styles.auth} source={google} />
          </View>
          <View style={styles.auth_View}>
            <Image style={styles.auth} source={fb} />
          </View>
        </View>

        <View style={{marginTop: RF(10), marginBottom: RF(20)}}>
          <Text style={[styles.regular, {alignSelf: 'center', color: '#000'}]}>
            New to Selflance?
          </Text>

          <TouchableOpacity onPress={onClick}>
            <Text
              style={[styles.medium, {alignSelf: 'center', color: primary}]}>
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Wrapper>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  or_view: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RF(30),
  },
  logo: {
    width: '50%',
    height: RF(30),
    resizeMode: 'contain',
  },
  justify_Row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  close_Icon: {height: RF(32), width: RF(32), marginTop: -12},
  semiBold: {
    fontSize: RF(24),
    fontWeight: '700',
    color: '#000',
    marginTop: RF(10),
  },
  regular: {fontSize: RF(14), color: '#434343', marginTop: RF(10)},
  small: {fontSize: RF(12), color: primary},
  medium: {fontSize: RF(16), color: '#fff', fontWeight: '600'},
  entry_Fields: {
    height: RF(56),
    width: '100%',
    color: '#000',
    padding: 10,
    borderRadius: 8,
    marginBottom: RF(15),
    borderColor: '#00000014',
    borderWidth: 1,
  },
  button: {
    height: RF(55),
    width: '100%',
    backgroundColor: primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  password_Field: {
    height: '100%',
    width: '80%',
    color: '#000',
    padding: 0,
    flexDirection: 'row',
  },
  extra_Small: {fontSize: RF(10), color: primary},
  faded_Line: {height: RF(17), width: RF(120)},
  auth: {width: '100%', height: RF(23), resizeMode: 'contain'},

  auth_View: {
    width: RF(140),
    height: RF(54),
    backgroundColor: '#F8F8F8',
    borderRadius: RF(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

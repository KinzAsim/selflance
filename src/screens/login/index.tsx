import {
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {GREY, secondary, RF} from '@theme';
import {
  CloseButton,
  CustomButton,
  CustomCheckBox,
  CustomModal,
  Text,
  Wrapper,
} from '@components';
import {fb, google, leftfaded_Line, logo, rightfaded_Line, show} from '@assets';
import {useDispatch} from 'react-redux';
import {setIsLoggedIn} from '@redux';
import {Formik} from 'formik';
import {LoginValidationSchema} from '@utils';
import React, {useState, useEffect} from 'react';
const Login = ({navigation}: any) => {
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const dispatch = useDispatch();
  const onClick = () => {
    navigation.navigate('SignUp');
  };

  const handleUsernameFocus = () => {
    setIsUsernameFocused(true);
  };

  const handleUsernameBlur = () => {
    setIsUsernameFocused(false);
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  const initialValues = {
    email: '',
    password: '',
  };

  const hanldeLogIn = (values: {email: string; password: string}) => {
    console.log('login', values);
    handleOpenModal();
    // dispatch(setIsLoggedIn(true));
  };

  return (
    <Formik
      initialValues={initialValues}
      validateOnMount={true}
      validationSchema={LoginValidationSchema}
      onSubmit={values => {
        hanldeLogIn(values);
      }}>
      {({values, errors, touched, handleChange, handleSubmit}) => (
        <Wrapper isPaddingH>
          <CustomModal
            isVisible={isModalVisible}
            closeModal={handleCloseModal}
          />
          <View style={[styles.justify_Row, {marginTop: RF(30)}]}>
            <Image style={styles.logo} source={logo} resizeMode={'contain'} />
            <CloseButton />
          </View>
          <View style={{marginVertical: RF(20)}}>
            <Text style={styles.semiBold}>Log In</Text>
            <Text style={styles.regular}>Please Sign In To Your Account</Text>
          </View>

          <TextInput
            placeholder={'User Name'}
            onFocus={handleUsernameFocus}
            onBlur={handleUsernameBlur}
            value={values.email}
            onChangeText={handleChange('email')}
            style={[
              styles.entry_Fields,

              {
                marginTop: RF(10),
                borderColor: isUsernameFocused ? secondary : '#00000014',
              },
            ]}
            placeholderTextColor={GREY}
          />
          {errors.email && touched.email ? (
            <Text style={styles.errors}>{errors.email}</Text>
          ) : null}
          <View
            style={[
              styles.entry_Fields,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderColor: isPasswordFocused ? secondary : '#00000014',
              },
            ]}>
            <TextInput
              style={styles.password_Field}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
              placeholder={'Enter Password'}
              value={values.password}
              onChangeText={handleChange('password')}
              secureTextEntry={!isPasswordVisible}
              placeholderTextColor={GREY}
            />
            <Pressable onPress={togglePasswordVisibility}>
              <Image
                style={{height: RF(24), width: RF(24)}}
                source={isPasswordVisible ? show : show}
                resizeMode={'contain'}
              />
            </Pressable>
          </View>
          {errors.password && touched.password ? (
            <Text style={styles.errors}>{errors.password}</Text>
          ) : null}
          <View
            style={[
              styles.justify_Row,
              {marginBottom: RF(25), marginTop: RF(5)},
            ]}>
            <CustomCheckBox />
            <View style={{width: '60%', marginLeft: 5}}>
              <Text style={[styles.extra_Small, {color: GREY}]}>
                Yes, I understand and agree to the
              </Text>
              <Text style={styles.extra_Small}>Terms of Service</Text>
            </View>
            <Pressable onPress={() => navigation.navigate('ForgetPassword')}>
              <Text style={styles.small}>Forget password</Text>
            </Pressable>
          </View>

          <CustomButton title={'Login'} onPress={() => handleSubmit()} />

          <View style={styles.or_view}>
            <Image
              source={leftfaded_Line}
              resizeMode={'contain'}
              style={styles.faded_Line}
            />
            <Text style={{marginHorizontal: RF(10), color: GREY}}>or</Text>
            <Image
              source={rightfaded_Line}
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

          <View style={{marginTop: RF(20)}}>
            <Text
              style={[styles.regular, {alignSelf: 'center', color: '#000'}]}>
              New to Selflance?
            </Text>

            <TouchableOpacity onPress={onClick}>
              <Text
                style={[
                  styles.medium,
                  {alignSelf: 'center', color: secondary},
                ]}>
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
        </Wrapper>
      )}
    </Formik>
  );
};

export default Login;

const styles = StyleSheet.create({
  or_view: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RF(30),
  },
  auth_View: {
    width: RF(140),
    height: RF(54),
    backgroundColor: '#F8F8F8',
    borderRadius: RF(10),
    alignItems: 'center',
    justifyContent: 'center',
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
  semiBold: {
    fontSize: RF(24),
    fontWeight: '700',
    color: '#000',
    marginTop: RF(10),
  },
  regular: {fontSize: RF(14), color: '#434343', marginTop: RF(10)},
  small: {fontSize: RF(12), color: secondary},
  medium: {fontSize: RF(16), color: '#fff', fontWeight: '600'},
  entry_Fields: {
    height: RF(56),
    width: '100%',
    color: '#000',
    padding: 10,
    borderRadius: 8,
    marginBottom: RF(15),
    borderWidth: 1,
  },

  password_Field: {
    height: '100%',
    width: '80%',
    color: '#000',
    padding: 0,
    paddingLeft: 0,
    flexDirection: 'row',
  },
  extra_Small: {width: '100%', fontSize: RF(10), color: secondary},
  faded_Line: {height: RF(17), width: RF(120)},
  auth: {width: '100%', height: RF(23), resizeMode: 'contain'},
  errors: {
    fontSize: 12,
    color: 'red',
    marginTop: -10,
    marginBottom: 10,
  },
});

import {
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {
  Text,
  Wrapper,
  CloseButton,
  CustomModal,
  CustomButton,
  CustomCheckBox,
} from '@components';
import {Formik} from 'formik';
import {styles} from './styles';
import React, {useState} from 'react';
import {GREY, primary, RF} from '@theme';
import {LoginValidationSchema} from '@utils';
import {fb, google, leftfaded_Line, logo, rightfaded_Line, show} from '@assets';
import {useDispatch} from 'react-redux';
import {setIsLoggedIn} from '@redux';

const initialValues = {
  email: '',
  password: '',
};

const Login = ({navigation}: any) => {
  const dispatch: any = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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

  const hanldeLogIn = (values: any) => {
    console.log('val...', values);

    dispatch(setIsLoggedIn(true));
  };

  return (
    <Formik
      validateOnMount={true}
      initialValues={initialValues}
      validationSchema={LoginValidationSchema}
      onSubmit={values => {
        hanldeLogIn(values);
      }}>
      {({values, errors, touched, handleChange, handleSubmit}) => (
        <Wrapper isPaddingH>
          <CustomModal
            navigation={navigation}
            isVisible={isModalVisible}
            closeModal={handleCloseModal}
          />
          <View style={[styles.justify_Row, {marginTop: RF(30)}]}>
            <Image style={styles.logo} source={logo} resizeMode={'contain'} />
            <CloseButton />
          </View>
          <View style={styles.mv}>
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
                borderColor: isUsernameFocused ? primary : '#00000014',
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
                borderColor: isPasswordFocused ? primary : '#00000014',
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
            <Text style={styles.or}>or</Text>
            <Image
              source={rightfaded_Line}
              resizeMode={'contain'}
              style={styles.faded_Line}
            />
          </View>

          <View style={styles.vImg}>
            <View style={styles.auth_View}>
              <Image style={styles.auth} source={google} />
            </View>
            <View style={styles.auth_View}>
              <Image style={styles.auth} source={fb} />
            </View>
          </View>

          <View style={styles.mt}>
            <Text
              style={[styles.regular, {alignSelf: 'center', color: '#000'}]}>
              New to Selflance?
            </Text>

            <TouchableOpacity onPress={onClick}>
              <Text
                style={[styles.medium, {alignSelf: 'center', color: primary}]}>
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

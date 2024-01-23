import {RF, WHITE, grayButton, primary} from '@theme';
import {SmallModal, Text, TextHeader, Wrapper} from '@components';
import {add, block, file, gallery, menu, report, search, send} from '@assets';
import React, {useState, useEffect, useCallback, useRef} from 'react';
import {
  View,
  Image,
  Modal,
  TextInput,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import {Bubble, GiftedChat, IMessage} from 'react-native-gifted-chat';
import ImagePicker from 'react-native-image-crop-picker';
import {navigate} from '@services';
const ChatPage: React.FC = ({navigation, route}: any) => {
  const {userName} = route?.params;
  const modalRef = useRef<Modal>(null);
  const [messageText, setMessageText] = useState('');
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [messages, setMessages] = useState<IMessage[]>([]);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const openLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  const openCameraPicker = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placebeard.it/640x360',
        },
      },
      {
        _id: 2,
        text: 'Hello world',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placebeard.it/640x360',
        },
      },
    ]);
  }, []);

  const onClose = () => {
    setModalVisible(!modalVisible);
  };
  const onOpen = () => {
    console.log('modal');
    setModalVisible2(!modalVisible2);
  };
  const onSend = useCallback((newMessages: IMessage[] = []) => {
    // console.log('ssss');
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages),
    );
  }, []);

  const renderBubble = (props: any) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: 'grey',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return (
      <>
        {/* <FontAwesome name="angle-double-down" size={22} color="#333" /> */}
      </>
    );
  };

  const renderMessageImage = () => {
    return (
      <View
        style={{
          width: '100%',
          backgroundColor: 'red',
        }}>
        <Image
          source={send}
          style={{
            height: RF(18),
            width: RF(18),
          }}
          resizeMode={'contain'}
        />
      </View>
    );
  };

  return (
    <Wrapper viewStyle={{paddingBottom: RF(30)}}>
      <TextHeader
        textStyle={{width: '35%'}}
        numofLines={1}
        navigation={navigation}
        _back
        title={userName}
        _search
        _source1={search}
        onOpen={onOpen}
        _source2={menu}
      />
      <Pressable
        onPress={() => navigate('CreateOffer')}
        style={styles.offerCard}>
        <Text regular size={12} color={primary}>
          Create Offer
        </Text>
      </Pressable>
      <GiftedChat
        messagesContainerStyle={{paddingBottom: RF(80)}}
        renderMessageImage={renderMessageImage}
        isCustomViewBottom={true}
        isTyping={true}
        messages={messages}
        onSend={(newMessages: IMessage[]) => onSend(newMessages)}
        user={{
          _id: 1,
        }}
        alwaysShowSend
        renderBubble={renderBubble}
        scrollToBottom={true}
        scrollToBottomComponent={scrollToBottomComponent}
        renderInputToolbar={inputToolbarProps => (
          <View
            {...inputToolbarProps}
            style={{
              flexDirection: 'row',
              height: RF(70),
              alignItems: 'center',
              paddingHorizontal: RF(16),
              width: '100%',
              backgroundColor: grayButton,
            }}>
            <SmallModal
              _sourceImage1={gallery}
              _sourceImage2={file}
              onClose={onClose}
              title1={'Photo Library'}
              title2={'Choose File'}
              modalVisible={modalVisible}
              openLibrary={openLibrary}
              openCameraPicker={openCameraPicker}
            />
            <SmallModal
              _sourceImage1={report}
              _sourceImage2={block}
              onClose={onOpen}
              withMenu
              title1={'Block User'}
              title2={'Report'}
              modalVisible={modalVisible2}
            />
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={{
                height: RF(29),
                width: RF(29),
                justifyContent: 'center',
                borderRadius: 15,
                alignItems: 'center',
                backgroundColor: WHITE,
              }}>
              <Image source={add} style={{height: RF(11), width: RF(11)}} />
            </TouchableOpacity>
            <TextInput
              style={{
                height: RF(33),
                marginHorizontal: RF(8),
                width: '80%',
                padding: 0,
                paddingHorizontal: 5,
                borderRadius: 8,
                backgroundColor: WHITE,
              }}
              value={messageText} // Bind the input value to the state
              onChangeText={text => setMessageText(text)}
              placeholder={'Write message'}
            />
            <Pressable
              onPress={() => {
                if (messageText.trim() !== '') {
                  // Check if the message is not empty
                  onSend([
                    {
                      _id: Math.random(),
                      text: messageText,
                      createdAt: new Date(),
                      user: {
                        _id: 1,
                      },
                    },
                  ]);
                  setMessageText(''); // Clear the input after sending
                }
              }}>
              <Image
                source={send}
                style={{
                  height: RF(18),
                  width: RF(18),
                }}
                resizeMode={'contain'}
              />
            </Pressable>
          </View>
        )}
      />
      <View style={styles.line} />
    </Wrapper>
  );
};

export default ChatPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    backgroundColor: WHITE,
    elevation: 2,
    position: 'absolute',
    bottom: RF(60),
  },
  offerCard: {
    height: RF(34),
    width: RF(90),
    borderWidth: 1,
    top: RF(20),
    position: 'absolute',
    right: RF(85),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#00538F0D',
    borderColor: primary,
  },
  line: {
    borderWidth: 1,
    width: '90%',
    position: 'absolute',
    bottom: 130,
    alignSelf: 'center',
    borderColor: grayButton,
  },
});

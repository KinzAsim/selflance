import {
  add,
  block,
  file,
  gallery,
  heart,
  menu,
  report,
  search,
  send,
} from '@assets';
import {Header, NavHeader, SmallModal, Text, TextHeader} from '@components';
import {
  grayButton,
  RF,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  textColor,
  text_Color2,
  WHITE,
} from '@theme';
import React, {useState, useEffect, useCallback, useRef} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Pressable,
  Modal,
} from 'react-native';
import {Bubble, GiftedChat, Send, IMessage} from 'react-native-gifted-chat';
import {RouteProp, useRoute} from '@react-navigation/native';

const ChatScreen = ({navigation, route}: any) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [messageText, setMessageText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  const {userName} = route.params;
  console.log(userName, 'sssss');

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
    console.log('ssss');
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
    <View style={{flex: 1, backgroundColor: '#fff', paddingBottom: 30}}>
      <View style={{paddingHorizontal: RF(10)}}>
        <TextHeader
          f_Size={20}
          navigation={navigation}
          _back
          title={userName}
          _search
          _source1={search}
          onOpen={onOpen}
          _source2={menu}
        />
      </View>
      <View
        style={{
          borderWidth: 1,
          width: '90%',
          position: 'absolute',
          bottom: 130,
          alignSelf: 'center',
          borderColor: grayButton,
        }}
      />
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
              width: '100%',
              justifyContent: 'space-evenly',
              backgroundColor: grayButton,
            }}>
            <SmallModal
              _sourceImage1={gallery}
              _sourceImage2={file}
              onClose={onClose}
              title1={'Photo Library'}
              title2={'Choose File'}
              modalVisible={modalVisible}
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
    </View>
  );
};

export default ChatScreen;

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
});

import {add, send} from '@assets';
import {Text} from '@components';
import {RF, SCREEN_WIDTH, WHITE} from '@theme';
import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  Bubble,
  GiftedChat,
  Send,
  StylePropType,
  Composer,
  IMessage,
  User,
} from 'react-native-gifted-chat';
//
const ChatScreen = ({navigation}: any) => {
  const [messages, setMessages] = useState<IMessage[]>([]);

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

  const onSend = useCallback((newMessages: IMessage[] = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages),
    );
  }, []);

  // const renderSend = (props:any) => {
  //   return (
  //     <Send {...props}>
  //       <View
  //         style={{
  //           flexDirection: 'row',
  //           justifyContent: 'space-between',
  //           alignItems: 'center',
  //           width: '91%',
  //         }}>
  //         <TouchableOpacity onPress={() => setModalVisible(true)}>
  //           <AntDesign name="plus" size={24} color="blue" />
  //         </TouchableOpacity>
  //         <View style={{flexDirection: 'row', alignItems: 'center'}}>
  //           <Composer {...props} />
  //           <TouchableOpacity onPress={() => {}}>
  //             <IonIcons name="send-outline" size={24} color="blue" />
  //           </TouchableOpacity>
  //         </View>
  //       </View>
  //     </Send>
  //   );
  // };

  const renderSend = (props: any) => {
    return (
      <>
        {/* <Send {...props}></Send> */}
        <Send
          {...props}
          // containerStyle={{
          //   borderWidth: 1,
          //   backgroundColor: 'red',
          //   width: '80%',
          //   justifyContent: 'flex-end',
          //   alignItems: 'flex-end',
          //   position: 'absolute',
          //   right: 0,
          //   zIndex: -100,
          // }}
          // sendButtonProps={{style: {zIndex: 100}}}
        >
          <View
            style={{
              height: '100%',
              width: RF(60),
              justifyContent: 'center',
              alignItems: 'center',
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
        </Send>
      </>
    );
  };

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
    <GiftedChat
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
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

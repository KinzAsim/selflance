import React from 'react';
import {chatList} from '@utils';
import {FlatList, Pressable, View} from 'react-native';
import {ChatBox, Search, TextHeader, Wrapper} from '@components';
import {RF} from '@theme';

const Chat = ({navigation}: any) => {
  const onClick = (item: any, index: any) => {
    navigation.navigate('ChatPage', {userName: item?.name});
  };

  return (
    <Wrapper>
      <TextHeader title={'Chats'} f_Size={20} />
      <View style={{paddingHorizontal: RF(18)}}>
        <Search />
        <FlatList
          data={chatList}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}: any) => {
            return (
              <Pressable
                onPress={() => onClick(item, index)}
                style={{
                  width: '100%',
                }}>
                <ChatBox
                  count={1}
                  time={'5 min'}
                  name={item?.name}
                  message={item?.message}
                  unread={index == 0 || index == 2 ? true : false}
                />
              </Pressable>
            );
          }}
        />
      </View>
    </Wrapper>
  );
};

export default Chat;

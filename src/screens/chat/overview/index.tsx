import {RF} from '@theme';
import React from 'react';
import {FlatList, Pressable} from 'react-native';
import {ChatBox, Search, TextHeader, Wrapper} from '@components';
import {chatList} from '@utils';

const Chat = ({navigation}: any) => {
  const onClick = (item: any, index: any) => {
    navigation.navigate('ChatPage', {item: item});
  };

  return (
    <Wrapper isPaddingH>
      <TextHeader title={'Chats'} />
      <Search />
      <FlatList
        data={chatList}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}: any) => {
          return (
            <Pressable onPress={() => onClick(item, index)}>
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
    </Wrapper>
  );
};

export default Chat;

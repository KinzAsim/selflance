import {user_1} from '@assets';
import {SmallSearch, Text, TextHeader, Wrapper} from '@components';
import {grayButton, lightText, RF, textColor, WHITE} from '@theme';
import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const Messages = [
  {
    id: '1',
    userName: 'Scarlett Perez',
    userImg: user_1,
    messageTime: '5 min',
    messageText: 'Its really nice working with you',
    pendingText: '1',
  },
  {
    id: '2',
    userName: 'Ava Martinez',
    userImg: user_1,
    messageTime: '5 min',
    messageText: 'Hello!',
    pendingText: '1',
  },
  {
    id: '3',
    userName: 'Devon Robinson',
    userImg: user_1,
    messageTime: '5 mins',
    messageText: 'Are you there? interested i this...',
    pendingText: '1',
  },
  {
    id: '4',
    userName: 'Elizabeth Cooper',
    userImg: user_1,
    messageTime: '5 mins',
    messageText: 'Sure! I’ll be there soon.',
    pendingText: '1',
  },
  {
    id: '5',
    userName: 'Abigail Turner',
    userImg: user_1,
    messageTime: '5 mins',
    messageText: 'Then make a deal',
    pendingText: '1',
  },
  {
    id: '6',
    userName: 'Madison Robinson',
    userImg: user_1,
    messageTime: '5 mins',
    messageText: 'When will the contract be sent?',
    pendingText: '1',
  },
];

const MessagesScreen = ({navigation}: any) => {
  return (
    <Wrapper isPaddingH>
      <Text
        size={20}
        semiBold
        color={textColor}
        style={{marginVertical: RF(10)}}>
        Chats
      </Text>
      <SmallSearch height={50} />
      <FlatList
        data={Messages}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.cards}
            onPress={() =>
              navigation.navigate('ChatScreen', {userName: item.userName})
            }>
            <View style={styles.UserInfo}>
              <View style={styles.UserImgWrapper}>
                <Image source={item.userImg} style={styles.UserImg} />
              </View>
              <View style={styles.TextSection}>
                <View style={styles.UserInfoText}>
                  <Text
                    size={14}
                    semiBold
                    color={textColor}
                    style={{top: RF(3)}}>
                    {item.userName}
                  </Text>
                  <Text size={10} regular color={lightText}>
                    {item.messageTime}
                  </Text>
                </View>
                <View style={styles.MessageCont}>
                  <Text size={12} regular color={lightText}>
                    {item.messageText}
                  </Text>
                  <View style={styles.PendingCont}>
                    <Text regular size={8} color={WHITE}>
                      {item.pendingText}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </Wrapper>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  UserInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    height: RF(74),
    justifyContent: 'space-between',
    width: '100%',
  },
  UserImgWrapper: {alignSelf: 'center'},
  UserImg: {
    width: RF(42),
    height: RF(42),
    borderRadius: 25,
    borderColor: '#edbd57',
  },
  TextSection: {
    paddingLeft: 12,
    flexGrow: 1,
  },
  UserInfoText: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  UserName: {
    fontSize: 16,
    fontWeight: 'bold',
    // font-family: 'Lato-Regular'
    color: '#434343',
  },
  PostTime: {
    fontSize: 12,
    color: '#666',
  },
  MessageCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  MessageText: {
    fontSize: 14,
    color: '#333333',
  },
  PendingCont: {
    backgroundColor: '#dd730a',
    width: RF(15),
    height: RF(15),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RF(20),
  },
  PendingText: {
    fontSize: 14,
    color: '#333333',
    textAlign: 'center',
  },
  cards: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: grayButton,
  },
});

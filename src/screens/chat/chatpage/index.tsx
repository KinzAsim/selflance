import React from 'react';
import {TextHeader, Wrapper} from '@components';
import {RouteProp} from '@react-navigation/native';

interface Props {
  navigation: any;
  route: RouteProp<{
    params: {
      item?: any;
    };
  }>;
}

const ChatPage = ({route, navigation}: Props) => {
  const {item} = route.params;

  return (
    <Wrapper isPaddingH>
      <TextHeader title={item?.name} _back _search />
    </Wrapper>
  );
};

export default ChatPage;

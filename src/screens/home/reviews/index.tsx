import React, {useState} from 'react';
import {user1, user2, user3} from '@assets';
import {ScrollView, View} from 'react-native';
import {CommentSection, CustomRating, TextHeader, Wrapper} from '@components';

const Reviews = ({navigation}: any) => {
  const [selectedStarIndex, setSelectedStarIndex] = useState(3);
  const handleStarPress = () => {};

  return (
    <Wrapper isPaddingH>
      <TextHeader title={'Reviews'} navigation={navigation} _back />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomRating
          size={20}
          isTop={10}
          sectionTrue
          onPress={handleStarPress}
          selectedStarIndex={selectedStarIndex}
        />
        <CommentSection source={user1} />
        <CommentSection source={user2} />
        <CommentSection source={user3} />
      </ScrollView>
    </Wrapper>
  );
};

export default Reviews;

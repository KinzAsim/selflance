import {_star} from '@assets';
import React from 'react';
import {Rating} from 'react-native-ratings';

const Ratings = () => {
  return (
    <Rating
      type="custom"
      ratingImage={_star}
      readonly={true}
      // showRating={false}
      ratingColor="#fff"
      ratingBackgroundColor="#fff"
      ratingCount={5}
      imageSize={15}
      // onFinishRating={this.ratingCompleted}
      // style={{paddingVertical: 10}}
    />
  );
};

export default Ratings;

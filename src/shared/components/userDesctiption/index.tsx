import {StyleSheet, View, ViewProps, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Text from '../text';
import {
  BLACK,
  border_Opacity,
  dull_orange,
  neutral,
  neutral_90,
  RF,
  SCREEN_WIDTH,
  text_Color2,
} from '@theme';
import {chat, comment, location, sellerLevel, translater} from '@assets';
import UserLevel from '../userLevel';
import ReadMore from 'react-native-read-more-text';
interface props extends ViewProps {
  user_Desc: any;
}

const UserDescription = (props: props) => {
  const {user_Desc} = props;
  const [isReadMoreExpanded, setIsReadMoreExpanded] = useState(false);

  const renderTruncatedFooter = (handlePress: any) => {
    return (
      <Text style={{color: dull_orange}} onPress={handlePress}>
        Read more
      </Text>
    );
  };

  const renderRevealedFooter = (handlePress: any) => {
    return (
      <Text style={{color: dull_orange, marginTop: 5}} onPress={handlePress}>
        Show less
      </Text>
    );
  };
  const handleTextReady = () => {
    setIsReadMoreExpanded(true); // Update the state to indicate that the text is ready and should be expanded.
  };
  return (
    <View style={styles.detailView}>
      <Text semiBold size={14} color={neutral}>
        User Details
      </Text>
      <ReadMore
        numberOfLines={isReadMoreExpanded ? 3 : 3}
        renderTruncatedFooter={renderTruncatedFooter}
        renderRevealedFooter={renderRevealedFooter}
        onReady={handleTextReady}>
        <Text size={12} regular color={text_Color2}>
          Pancakes are some people's favorite breakfast, who doesn't like
          pancakes? Especially with the real honey splash on top of the
          pancakes, of course everyone loves that! besides being
        </Text>
      </ReadMore>
      <View style={styles.row}>
        <Image source={location} style={styles.icon} />
        <View style={{paddingLeft: 10}}>
          <Text regular size={13} color={neutral_90}>
            From
          </Text>
          <Text bold size={13} color={BLACK}>
            {`India ${'(6:56 AM)'}`}
          </Text>
        </View>
      </View>
      <ScrollView
        horizontal={true}
        style={{width: SCREEN_WIDTH - 20}}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.row_D}>
          <UserLevel
            level={'-2'}
            title={'Seller Level'}
            height={RF(40)}
            source={sellerLevel}
          />
          <UserLevel
            level={'-3'}
            title={'Average Response Time'}
            height={RF(40)}
            source={comment}
          />
          <UserLevel
            level={'-2'}
            title={'Seller Level'}
            height={RF(40)}
            source={translater}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default UserDescription;

const styles = StyleSheet.create({
  detailView: {
    // borderTopWidth: 1,
    width: '100%',
    // borderTopColor: border_Opacity,
  },
  row: {
    flexDirection: 'row',
    marginTop: RF(25),
    marginBottom: RF(18),
  },
  icon: {height: RF(19), width: RF(16), resizeMode: 'contain', marginTop: 10},
  row_D: {
    flexDirection: 'row',
    width: '100%',
  },
});

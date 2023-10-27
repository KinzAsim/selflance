import {StyleSheet, View, ImageBackground, Image, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  FilterCategory,
  ShiftCards,
  SmallSearch,
  SwipeModal,
  Text,
  TextHeader,
  Wrapper,
} from '@components';
import {lightText, medium_Gray, RF, SCREEN_HEIGHT, textColor} from '@theme';
import {
  favourets,
  frame1,
  frame2,
  frame3,
  frame4,
  picture,
  rating,
} from '@assets';

const GraphicAndDesign = () => {
  const [selectedShift, setSelectedShift] = useState('Freelancer');
  const [selected, setSelected] = useState('Category');

  const toggleChange = (change: any) => {
    setSelected(change);
  };
  const handleShiftChange = (newShift: string) => {
    setSelectedShift(newShift);
  };
  type FreelancerData = {
    id: number;
    bacImage: any;
    des: string;
    rating: string;
    price: string;
    level: number;
  };

  const data: FreelancerData[] = [
    {
      id: 0,
      bacImage: frame1,
      des: 'I will do ui design, ui ux design, ',
      rating: '5.0',
      price: '₹678',
      level: 1,
    },
    {
      id: 1,
      bacImage: frame2,
      des: 'I will do ui design, ui ux design, ',
      rating: '5.0',
      price: '₹678',
      level: 1,
    },
    {
      id: 2,
      bacImage: frame3,
      des: 'I will do ui design, ui ux design, ',
      rating: '5.0',
      price: '₹678',
      level: 1,
    },
    {
      id: 3,
      bacImage: frame1,
      des: 'I will do ui design, ui ux design, ',
      rating: '5.0',
      price: '₹678',
      level: 1,
    },
    {
      id: 4,
      bacImage: frame4,
      des: 'I will do ui design, ui ux design, ',
      rating: '5.0',
      price: '₹678',
      level: 1,
    },
  ];

  const renderFrelancer = (item: FreelancerData) => {
    return (
      <View style={styles.cards}>
        <ImageBackground style={styles.imageStyle} source={item.bacImage}>
          <Image source={favourets} style={styles.fav} />
        </ImageBackground>
        <View style={styles.des}>
          <Text medium color={textColor}>
            {item.des}
          </Text>
          <View style={[styles.rowDirection_View, {marginVertical: 5}]}>
            <View style={styles.row}>
              <Text size={10} color={lightText}>
                {item.rating}
              </Text>
              <Image
                style={{height: RF(10), width: RF(10), marginLeft: 5}}
                source={rating}
              />
            </View>
            <View style={styles.row}>
              <Text
                size={10}
                color={medium_Gray}
                regular
                style={{marginRight: 10}}>
                Prise
              </Text>
              <Text size={14} regular color={textColor}>
                {item.price}
              </Text>
            </View>
          </View>
          <View style={styles.rowDirection_View}>
            <View style={styles.row}>
              <Image
                style={{height: RF(17), width: RF(17), marginRight: 5}}
                source={picture}
              />
              <Text size={8} color={lightText}>
                William Liam
              </Text>
            </View>
            <Text size={10} color={lightText}>
              {`Level${item.level}`}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  useEffect(() => {
    console.log(selected); // This will log the updated selected value
  }, [selected]);

  return (
    <Wrapper isPaddingH>
      <TextHeader _back title={'Graphic And Designing'} />
      <ShiftCards
        selectedShift={selectedShift}
        onShiftChange={handleShiftChange}
      />
      <SwipeModal
        height={SCREEN_HEIGHT / 1.4}
        modalHeader={true}
        headerTitle={'Filter'}>
        <FilterCategory toggleChange={toggleChange} selected={selected} />
      </SwipeModal>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}: any) => renderFrelancer(item)}
        keyExtractor={(item: any) => item.id.toString()}
      />
    </Wrapper>
  );
};

export default GraphicAndDesign;

const styles = StyleSheet.create({
  cards: {
    height: RF(98),
    width: '100%',
    borderTopRightRadius: 8,
    marginTop: 15,
    borderBottomEndRadius: 8,
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 1,
  },
  imageStyle: {height: '100%', width: RF(145)},
  fav: {height: RF(21), width: RF(21), margin: 5},
  des: {
    height: '100%',
    width: '50%',
    padding: RF(10),
  },
  rowDirection_View: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {flexDirection: 'row', alignItems: 'center'},
});

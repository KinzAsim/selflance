import {Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {useStyles} from './styles';
import {CustomAccordion, TextHeader} from '@components';

const SECTIONS = [
  {
    title: 'LOGO & BRAND IDENTITY',
    content: [
      'Logo Design',
      'Brand Style Guides',
      'Fonts & Typography',
      'Business Cards & Stationery',
    ],
  },
  {
    title: 'GAMING',
    content: [
      'Logo Design',
      'Brand Style Guides',
      'Fonts & Typography',
      'Business Cards & Stationery',
    ],
  },
  {
    title: 'ART & ILLUSTRATION',
    content: [
      'Logo Design',
      'Brand Style Guides',
      'Fonts & Typography',
      'Business Cards & Stationery',
    ],
  },
];
const CategoryDetails = () => {
  const theme: any = useTheme();
  const dispatch = useDispatch();
  const styles = useStyles(theme.colors);
  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 20}}>
      <TextHeader title={'Graphic And Designing'} _back />

      <CustomAccordion data={SECTIONS} />
    </View>
  );
};

export default CategoryDetails;

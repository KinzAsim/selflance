import React from 'react';
import {SECTIONS} from '@utils';
import {View} from 'react-native';
import {useStyles} from './styles';
import {useDispatch} from 'react-redux';
import {useTheme} from '@react-navigation/native';
import {RouteProp} from '@react-navigation/native';
import {CustomAccordion, TextHeader} from '@components';

interface Props {
  navigation?: any;
  route: RouteProp<{
    params: {
      data?: any;
    };
  }>;
}

const CategoryDetails = ({route, navigation}: Props) => {
  const {data} = route.params;
  const theme: any = useTheme();
  const dispatch = useDispatch();
  const styles = useStyles(theme.colors);

  return (
    <View style={styles.container}>
      <TextHeader title={data?.title} _back />
      <CustomAccordion data={SECTIONS} navigation={navigation} />
    </View>
  );
};

export default CategoryDetails;

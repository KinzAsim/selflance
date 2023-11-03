import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export const primary = '#00538F';
export const black_Shadow = 'rgba(0,0,0,0.1)';
export const text_Color2 = '#7B6F72';
export const border_Opacity = 'rgba(0,0,0,0.05)';
export const neutral = '#121F3E';
export const neutral_90 = '#4F5350';
export const textColor = '#434343';
export const lightText = '#949494';
export const medium_Gray = '#74767E';
export const grayButton = '#F8F8F8';
export const light_grey = '#F9FAFB';
export const black_text = '#0A1C2E';
export const THEME = '#F26322';
export const TEXT = 'black';
export const GREY = 'grey';
export const BLACK = 'black';
export const WHITE = 'white';
export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;
export const ASPECT_RATIO = SCREEN_HEIGHT / SCREEN_WIDTH;
export const BASE_UNIT_WIDTH = 320;
export const BASE_UNIT_HEIGHT = 640;
export const BASE_ASPECT_RATIO = BASE_UNIT_HEIGHT / BASE_UNIT_WIDTH;
export const ASPECT_DIFF = ASPECT_RATIO / BASE_ASPECT_RATIO;
export const mustard = '#EDBD57';
export const txt_gray = '#949494';
export const dull_orange = '#DD730A';
export const orange = '#FF7F00';
export const blue = '#121F3E';
export const lightBlue = '#E6F3FC';

export const mulish_regular = 'Mulish-Regular';
export const mulish_bold = 'Mulish-Bold';
export const mulish_medium = 'Mulish-Medium';

export const customFonts = {
  fonts: {
    primary: 'PlusJakartaSans-Regular',
    medium: 'PlusJakartaSans-Medium',
    bold: 'PlusJakartaSans-Bold',
  },
};

export const darkThemeStyle = {
  colors: {},
};

export const defaultTheme = {
  colors: {
    lightGray: '#F8F8F8',
    blackText: '#2A3333',
  },
};

import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

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

export const primary = '#434343';
export const mustard = '#EDBD57';
export const txt_gray = '#949494';
export const dull_orange = '#DD730A';

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
  colors: {},
};

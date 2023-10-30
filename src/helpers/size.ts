import {Dimensions, PixelRatio} from 'react-native';

import theme from '@src/helpers/theme';
import {DESIGN_HEIGHT, DESIGN_WIDTH} from './constants';

const {width, height} = Dimensions.get('window');

const widthBaseScale = width / DESIGN_WIDTH;
const heightBaseScale = height / DESIGN_HEIGHT;

type BaseType = 'width' | 'height';

function normalize(size: number, based: BaseType = 'width') {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

//for width pixel
const widthPixel = (size: number) => {
  return normalize(size, 'width');
};
//for height pixel
const heightPixel = (size: number) => {
  return normalize(size, 'height');
};

//for font pixel
const fontPixel = (size: number) => {
  return heightPixel(size);
};

const fontSizes = {
  header: {
    fontSize: 20,
    lineHeight: 24,
  },
  large: {
    fontSize: 16,
    lineHeight: 24,
  },
  normal: {
    fontSize: 14,
    lineHeight: 21,
  },
  small: {
    fontSize: 12,
    lineHeight: 19,
  },
  subHeading: {
    fontSize: 16,
    lineHeight: 21,
  },
};

export const SIZE = {
  WIDTH: width,
  HEIGHT: height,
  FONT_SIZES: fontSizes,
  widthPixel,
  heightPixel,
  fontPixel,
  SCREEN_WIDTH: width,
  SCREEN_HEIGHT: height,
  WIDTH_SCREEN_MINUS_PADDING: width - theme.spacing.horizontalDefault * 2,
};

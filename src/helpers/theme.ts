enum Colors {
  primaryColor = '#48ABE2',
  darkOneColor = '#292D32',
  darkTwoColor = '#1A1A1A',
  lightOneColor = '#FFFFFF',
  lightTwoColor = '#E0E0E0',
  lightThreeColor = '#F4F4F4',
  backgroundColor = '#FFFFFF',
  errorColor = '#EF2828',
  orangeColor = '#FFEFDC',
  white = '#FFFFFF',
  black = '#000000',
  red = '#EF2828',
  lightGreen = '#09CE82',
  darkGrey = '#8A8A8A',
  lightGrey = '#E1E6EF',
  green = '#3AB56E',
  success = '#35D6AF',
  normalGrey = '#F6F7F9',
  warning = '#FFAC30',
  purple = '#A25AFF',
  error = '#FF7777',
  bgBase = '#EFF2FC',
  transparent = 'transparent',
  primaryTwoColor = '#19BCFE',
  disabledColor = '#C9C9C9',
  bgSuccess = '#E6FBF3',
  bgError = '#FF7777',
}

enum Fonts {
  poppinsBold = 'Poppins-Bold',
  poppinsItalic = 'Poppins-Italic',
  poppinsLight = 'Poppins-Light',
  poppinsMedium = 'Poppins-Medium',
  poppinsRegular = 'Poppins-Regular',
  poppinsSemiBold = 'Poppins-SemiBold',
}

enum Spacing {
  horizontalDefault = 16,
  verticalDefault = 25,
  blockButtonBottom = 8,
  blockButtonTop = 8,
}

type Theme = {
  colors: typeof Colors;
  fonts: typeof Fonts;
  spacing: typeof Spacing;
};

const theme: Theme = {
  colors: Colors,
  fonts: Fonts,
  spacing: Spacing,
};

export default theme;

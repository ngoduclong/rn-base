import {StyleSheet} from 'react-native';
import theme from '@src/helpers/theme';

export const styles = StyleSheet.create({
  text: {
    fontFamily: theme.fonts.poppinsRegular,
    lineHeight: 21,
  },
  display1: {
    fontSize: 34,
    fontWeight: '400',
    lineHeight: 50,
  },
  headline: {
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 36,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 24,
  },
  button: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
  },
  subheading: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 21,
  },
  body2: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
  },
  body1: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 20,
  },
  caption: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
  },
  small: {
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 15,
  },
});

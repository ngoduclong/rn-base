import {StyleSheet} from 'react-native';

import theme from '@src/helpers/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.lightThreeColor,
    minHeight: 48,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    height: 48,
    paddingLeft: 16,
    color: theme.colors.darkOneColor,
    fontFamily: theme.fonts.poppinsRegular,
    fontSize: 15,
  },
  errorText: {
    color: theme.colors.red,
    fontSize: 15,
    paddingTop: 5,
  },
  label: {
    flexDirection: 'row',
  },
  leftLabel: {
    flex: 1,
    fontSize: 12,
  },
  rightLabel: {
    fontSize: 12,
    color: theme.colors.darkGrey,
  },
  iconLeft: {
    paddingLeft: 10,
  },
  iconRight: {
    paddingHorizontal: 16,
    color: theme.colors.darkOneColor,
  },
});

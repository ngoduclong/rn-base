import {StyleSheet} from 'react-native';

import theme from '@src/helpers/theme';
import {SIZE} from '@src/helpers/size';

class ButtonStyles {
  private static _styles = StyleSheet.create({
    container: {
      height: 54,
      backgroundColor: theme.colors.primaryColor,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    buttonText: {
      ...SIZE.FONT_SIZES.normal,
      color: theme.colors.white,
      fontFamily: theme.fonts.poppinsRegular,
    },
    textContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    outLineContainer: {
      backgroundColor: theme.colors.white,
      borderWidth: 1,
      borderColor: theme.colors.lightGrey,
      borderStyle: 'solid',
    },
    outLineText: {
      color: theme.colors.darkOneColor,
    },
  });

  public static styles = {
    ...this._styles,

    getBackgroundColor: (disabled?: boolean, buttonColor?: string) => ({
      backgroundColor: disabled ? theme.colors.darkGrey : buttonColor,
    }),
  };
}

export default ButtonStyles.styles;

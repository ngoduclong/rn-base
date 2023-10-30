import React, {FC} from 'react';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';

import theme from '@src/helpers/theme';
import {styles} from './styles';

export interface AppTextProps extends TextProps {
  style?: StyleProp<TextStyle>;
  size?: number;
  color?: string;
  type?:
    | 'headline'
    | 'display1'
    | 'title'
    | 'button'
    | 'subheading'
    | 'body2'
    | 'body1'
    | 'caption'
    | 'small';
}

const AppText: FC<AppTextProps> = ({
  size = 14,
  color = theme.colors.darkOneColor,
  style,
  type,
  children,
  ...otherProps
}) => {
  const textStyle = type && styles[type] ? styles[type] : {};

  return (
    <Text
      style={[
        styles.text,
        {fontSize: size, color: color, fontFamily: theme.fonts.poppinsRegular},
        style,
        textStyle,
      ]}
      {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;

import React from 'react';
import {
  ActivityIndicator,
  Platform,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import {TouchableOpacity as AndroidTouchableOpacity} from 'react-native-gesture-handler';

import theme from '@src/helpers/theme';
import styles from './styles';

export interface IProps extends TouchableOpacityProps {
  containerStyle?: StyleProp<ViewStyle>;
  bodyStyle?: StyleProp<ViewStyle>;
  text: string;
  buttonColor?: string;
  loadingIndicatorColor?: string;
  loadingIndicatorStyle?: string;
  loading?: boolean;
  outline?: boolean;
  disabledOpacity?: number;
  textStyle?: StyleProp<TextStyle>;
  SuffixComponent?: React.ReactElement;
  PrefixComponent?: React.ReactElement;
  onPress: () => void;
}

const Button = ({
  containerStyle,
  bodyStyle,
  text,
  buttonColor = theme.colors.primaryColor,
  loadingIndicatorColor = theme.colors.white,
  loading,
  disabled,
  textStyle,
  SuffixComponent,
  PrefixComponent,
  activeOpacity,
  outline,
  onPress,
}: IProps) => {
  const ButtonElement =
    Platform.OS === 'ios' ? TouchableOpacity : AndroidTouchableOpacity;

  return (
    <ButtonElement
      activeOpacity={activeOpacity}
      style={[
        styles.container,
        styles.getBackgroundColor(disabled, buttonColor),
        containerStyle,
        outline ? styles.outLineContainer : {},
      ]}
      onPress={onPress}
      disabled={loading || disabled}>
      {loading && (
        <ActivityIndicator size="small" color={loadingIndicatorColor} />
      )}
      {!loading && (
        <View style={[styles.textContainer, bodyStyle]}>
          {PrefixComponent !== undefined && PrefixComponent}
          <Text
            style={[
              styles.buttonText,
              textStyle,
              outline ? styles.outLineText : {},
            ]}>
            {text}
          </Text>
          {SuffixComponent !== undefined && SuffixComponent}
        </View>
      )}
    </ButtonElement>
  );
};

export default Button;

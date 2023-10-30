import {
  Image,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  NativeTouchEvent,
  Platform,
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  TextInputSubmitEditingEventData,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import IMask from 'imask';
import {
  TextInput as TextInputFixAndroid,
  TouchableOpacity,
} from 'react-native-gesture-handler';

import theme from '@src/helpers/theme';
import AppText from '@src/components/AppText';
import {IconImage} from '@src/assets/icons';
import {EInputType} from '@src/helpers/enum';
import {DEFAULT_PHONE_MASK} from '@src/helpers/constants';
import {styles} from './styles';

interface ITextInputComponentProps extends TextInputProps {
  leftLabel?: string;
  rightLabel?: string | React.ReactNode;
  placeHolder?: string;
  textValue?: string;
  keyboardType?: KeyboardTypeOptions;
  customTextInputStyle?: Pick<TextInputProps, 'style'>;
  multiline?: boolean;
  numberOfLines?: number;
  errorMessage?: string | boolean;
  type?: EInputType;
  editable?: boolean;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  wrapperStyle?: ViewStyle;
  containerStyle?: StyleProp<ViewStyle>;
  iconRightStyle?: StyleProp<ViewStyle>;
  showRequiredMark?: boolean;
  isFixAndroid?: boolean;
  onPressIn?: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
  onChangeValue?: (text: string) => void;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
}

const TextInputComponent: React.FC<ITextInputComponentProps> = React.memo(
  ({
    leftLabel,
    rightLabel,
    placeHolder,
    onChangeValue,
    keyboardType = 'default',
    customTextInputStyle,
    multiline = false,
    numberOfLines,
    errorMessage,
    onSubmitEditing,
    type = EInputType.TEXT,
    editable = true,
    textValue,
    onPressIn,
    iconLeft,
    iconRight,
    wrapperStyle,
    containerStyle,
    iconRightStyle,
    showRequiredMark = false,
    style,
    isFixAndroid,
    ...rest
  }) => {
    const [hidden, setHidden] = React.useState<boolean>(false);
    const [value, setValueChange] = React.useState<string>('');

    const isUsedTextValueProps = typeof textValue !== 'undefined';
    const rightLabelIsString = typeof rightLabel === 'string';

    let textInputStyle: TextStyle = {...styles.textInput};
    if (customTextInputStyle) {
      textInputStyle = {...textInputStyle, ...customTextInputStyle};
    }

    let viewContainerStyle: ViewStyle = {...styles.container};
    if (multiline && numberOfLines) {
      numberOfLines > 5 ? 5 : numberOfLines;

      viewContainerStyle = {
        ...viewContainerStyle,
        height: 20 * numberOfLines + 16,
      };

      textInputStyle = {
        ...textInputStyle,
        height: 20 * numberOfLines + 16,
        verticalAlign: 'top',
      };
    }

    if (!editable) {
      textInputStyle = {
        ...textInputStyle,
        backgroundColor: theme.colors.disabledColor,
        borderRadius: 10,
      };
    }

    const _handleOnchangeText = (string: string) => {
      if (!isUsedTextValueProps) {
        setValueChange(string);
      }

      if (type === EInputType.PHONE_NUMBER) {
        const masked = IMask.createMask({mask: DEFAULT_PHONE_MASK});
        masked.resolve(string);
        onChangeValue?.(masked.value);
        return;
      }

      onChangeValue?.(string);
    };

    const _handleShowPassword = () => {
      setHidden(!hidden);
    };

    const hasLabel = leftLabel || rightLabel;

    return (
      <View style={wrapperStyle}>
        {hasLabel ? (
          <View style={styles.label}>
            {leftLabel && (
              <AppText style={styles.leftLabel}>
                {leftLabel}
                {showRequiredMark && (
                  <Text style={{color: theme.colors.red}}> *</Text>
                )}
              </AppText>
            )}
            {rightLabelIsString ? (
              <AppText style={styles.rightLabel}>{rightLabel}</AppText>
            ) : (
              rightLabel
            )}
          </View>
        ) : null}

        <View style={[viewContainerStyle, containerStyle]}>
          {iconLeft && <View style={styles.iconLeft}>{iconLeft}</View>}
          {isFixAndroid && Platform.OS === 'android' ? (
            <TextInputFixAndroid
              value={isUsedTextValueProps ? textValue : value}
              keyboardType={keyboardType as any}
              placeholderTextColor={theme.colors.darkGrey}
              style={[textInputStyle, style]}
              onChangeText={_handleOnchangeText}
              placeholder={placeHolder}
              multiline={multiline}
              secureTextEntry={type === EInputType.PASSWORD && !hidden && true}
              editable={editable}
              onSubmitEditing={onSubmitEditing}
              onPressIn={onPressIn}
              {...rest}
            />
          ) : (
            <TextInput
              value={isUsedTextValueProps ? textValue : value}
              keyboardType={keyboardType as any}
              placeholderTextColor={theme.colors.darkGrey}
              style={[textInputStyle, style]}
              onChangeText={_handleOnchangeText}
              placeholder={placeHolder}
              multiline={multiline}
              secureTextEntry={type === EInputType.PASSWORD && !hidden && true}
              editable={editable}
              onSubmitEditing={onSubmitEditing}
              onPressIn={onPressIn}
              {...rest}
            />
          )}
          {type === EInputType.PASSWORD && (
            <TouchableOpacity
              style={styles.iconRight}
              onPress={_handleShowPassword}>
              {hidden ? (
                <Image source={IconImage.eye_off} />
              ) : (
                <Image source={IconImage.eye} />
              )}
            </TouchableOpacity>
          )}
          {iconRight && (
            <View style={[styles.iconRight, iconRightStyle]}>{iconRight}</View>
          )}
        </View>
        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}
      </View>
    );
  },
);

TextInputComponent.displayName = 'TextInputComponent';
export default TextInputComponent;

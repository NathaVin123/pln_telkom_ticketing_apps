import {
  LayoutChangeEvent,
  NativeSyntheticEvent,
  Platform,
  ReturnKeyTypeOptions,
  TextInputSubmitEditingEventData,
  View,
} from 'react-native';
import {HelperText, Text, TextInput} from 'react-native-paper';
import {Raleway} from '../../core/font/font';
import {theme} from '../../core/theme/theme';
import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';

interface InterfaceDTextField {
  label: string;
  value?: string | undefined;
  defaultValue?: string | undefined;
  onChangeText: (text: string) => void;
  error?: boolean;
  placeholder?: string;
  placeholderTextColor?: string;
  errorMessage?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  fontSize?: number;
  iconLeft?: IconSource;
  iconRight?: IconSource;
  onTapRightIcon?: () => void;
  onTapLeftIcon?: () => void;
  backgroundColor?: string;
  onTouch?: boolean;
  disabled?: boolean;
  maxLength?: number;
  multiline?: boolean;
  height?: number;
  width?: number;
  clearButtonMode?: 'never' | 'while-editing' | 'unless-editing' | 'always';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  onFocused?: () => void;
  onLayout?: (event: LayoutChangeEvent) => void;
  labelColor?: string;
  scrollEnabled?: boolean;
  onSubmit?: () => void;
  iconLeftSize?: number;
  iconLeftColor?: string;
  returnKeyType?: ReturnKeyTypeOptions | undefined;
  mandatory?: boolean;
  onTouchStart?: () => void;
  onEndEditing?: () => void;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
}

export const DTextField = (props: InterfaceDTextField) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
        <Text
          style={[
            Raleway.Caption1,
            {
              color: props.labelColor ? props.labelColor : theme.colors.scrim,
            },
          ]}>
          {props.label}
        </Text>
        {props.mandatory && (
          <Text
            style={{
              color: theme.colors.error,
            }}>
            *
          </Text>
        )}
      </View>
      <TextInput
        onTouchStart={props.onTouchStart}
        returnKeyType={props.returnKeyType}
        onLayout={props.onLayout}
        autoCapitalize={props.autoCapitalize}
        error={props.error}
        textColor={theme.colors.shadow}
        onFocus={props.onFocused}
        clearButtonMode={props.clearButtonMode}
        mode={'outlined'}
        value={props.value}
        defaultValue={props.defaultValue}
        editable={!props.disabled}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor ?? '#BDBDBD'}
        underlineColor={theme.colors.primary}
        onEndEditing={props.onEndEditing}
        onSubmitEditing={props.onSubmitEditing}
        outlineStyle={
          Platform.OS === 'android'
            ? {
                borderWidth: 2,
                borderBottomWidth: 2,
                backgroundColor: props.backgroundColor
                  ? props.backgroundColor
                  : theme.colors.onPrimary,
                borderRadius: 10,
                // borderColor: theme.colors.scrim,
              }
            : {
                borderWidth: 2,
                borderBottomWidth: 2,
                backgroundColor: props.backgroundColor
                  ? props.backgroundColor
                  : theme.colors.onPrimary,
                borderRadius: 10,
                elevation: 10,
                // borderColor: theme.colors.scrim,
                // shadowColor: theme.colors.scrim,
                // shadowOffset: {
                //   width: 5,
                //   height: 5,
                // },
              }
        }
        maxLength={props.maxLength ?? 100}
        multiline={props.multiline ?? false}
        scrollEnabled={props.scrollEnabled ?? false}
        textAlignVertical={'top'}
        secureTextEntry={props.secureTextEntry ?? false}
        style={[
          Raleway.Subtitle2,
          {
            width: props.width ?? undefined,
            height: props.height ?? undefined,
            fontSize: props.fontSize ?? undefined,
          },
        ]}
        onChangeText={props.onChangeText}
        keyboardType={props.keyboardType}
        right={
          props.iconRight !== undefined ? (
            <TextInput.Icon
              icon={props.iconRight}
              size={20}
              // iconColor={theme.colors.primary}
              onPress={props.onTapRightIcon}
            />
          ) : undefined
        }
        left={
          props.iconLeft !== undefined ? (
            <TextInput.Icon
              icon={props.iconLeft}
              size={20}
              // iconColor={theme.colors.primary}
              onPress={props.onTapLeftIcon}
            />
          ) : undefined
        }
      />
      {props.error && props.onTouch ? (
        <HelperText type="error" visible={props.error}>
          {props.errorMessage}
        </HelperText>
      ) : null}
    </>
  );
};
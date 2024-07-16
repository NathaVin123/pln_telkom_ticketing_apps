import {Image, ImageSourcePropType, Platform, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import React from 'react';
import {DSizedBox} from '../sizedBox/DSizedBox.tsx';
import {s0} from '../size/DSize.tsx';
import {theme} from '../../core/theme/theme';
import {Raleway} from '../../core/font/font';

interface ButtonProps {
  children: string | JSX.Element;
  error?: boolean;
  onPress?: () => void;
  disabled?: boolean;
  icon?: ImageSourcePropType | undefined;
  iconPosition?: 'left' | 'right';
  radius?: number;
  color?: {
    backgroundColor?: string;
    borderColor?: string;
    iconColor?: string;
    textColor?: string;
  };
  size?: 'small' | 'medium' | 'large';
}

export const DButton = (props: ButtonProps) => {
    return (
        <Button
            compact={true}
            disabled={props.disabled ?? false}
            mode={'elevated'}
            contentStyle={{
                width: '100%',
                height:
                    props.size === undefined
                        ? 55
                        : props.size === 'small'
                            ? 45
                            : props.size === 'medium'
                                ? 55
                                : 65,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            style={{
                borderRadius: 25,
            }}
            buttonColor={
                props.color?.backgroundColor ??
                (props.error ? theme.colors.error : theme.colors.primary)
            }
            onPress={props.onPress}
        >
            {Platform.OS === 'ios' ? <IOS {...props} /> : <Android {...props} />}
        </Button>
    );
};

const Android = (props: ButtonProps) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: props.iconPosition === 'right' ? 'row-reverse' : 'row',
                paddingTop: 5,
            }}>
            {props.icon !== undefined ? (
                <>
                    <Image
                        source={props.icon}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: props.color?.iconColor ?? theme.colors.onPrimary,
                        }}
                        resizeMode={'contain'}
                    />
                    <DSizedBox width={s0} />
                </>
            ) : undefined}
            <Text
                style={[
                    Raleway.Body4,
                    {
                        color: props.color?.textColor ?? theme.colors.onPrimary,
                    },
                ]}
            >
                {props.children}
            </Text>
        </View>
    );
};

const IOS = (props: ButtonProps) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: props.iconPosition === 'right' ? 'row-reverse' : 'row',
                paddingTop: 5,
            }}
        >
            {props.icon !== undefined ? (
                <>
                    <Image
                        source={props.icon}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: props.color?.iconColor ?? theme.colors.onPrimary,
                        }}
                        resizeMode={'contain'}
                    />
                    <DSizedBox width={s0} />
                </>
            ) : undefined}
            <Text
                style={[
                    Raleway.Body4,
                    {
                        color: props.color?.textColor ?? theme.colors.onPrimary,
                    },
                ]}
            >
                {props.children}
            </Text>
        </View>
    );
};

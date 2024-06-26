import {Dimensions, Platform, StyleSheet} from 'react-native';
import {theme} from '../theme/theme';

const fontStyleNormal = 'normal';
const fontWeight400 = '400';
const fontWeight500 = '500';

const color = theme.colors.scrim;

const size = Dimensions.get('window');

export const Raleway = StyleSheet.create({
    Normal: {
        fontFamily: Platform.OS === 'android' ? 'Raleway-Bold' : 'Raleway-Light',
    },
    H1: {
        fontFamily: Platform.OS === 'android' ? 'Raleway-Bold' : 'Raleway-Light',
        fontStyle: fontStyleNormal,
        fontWeight: Platform.OS === 'android' ? 'normal' : '700',
        fontSize: size.width > 500 ? 50 : 48,
        lineHeight: 56,
        color: color,
    },
    H2: {
        fontFamily: Platform.OS === 'android' ? 'Raleway-Bold' : 'Raleway-Light',
        fontStyle: fontStyleNormal,
        fontWeight: Platform.OS === 'android' ? 'normal' : '700',
        fontSize: size.width > 500 ? 34 : 32,
        lineHeight: 38,
        color: color,
    },
    H3: {
        fontFamily:
            Platform.OS === 'android' ? 'Raleway-ExtraBold' : 'Raleway-Light',
        fontStyle: fontStyleNormal,
        fontWeight: Platform.OS === 'android' ? 'normal' : '800',
        fontSize: size.width > 500 ? 34 : 32,
        lineHeight: 38,
        color: color,
    },
    H4: {
        fontFamily:
            Platform.OS === 'android' ? 'Raleway-ExtraBold' : 'Raleway-Light',
        fontStyle: fontStyleNormal,
        fontWeight: Platform.OS === 'android' ? 'normal' : '800',
        fontSize: size.width > 500 ? 26 : 24,
        color: color,
    },
    H5: {
        fontFamily:
            Platform.OS === 'android' ? 'Raleway-ExtraBold' : 'Raleway-Light',
        fontStyle: fontStyleNormal,
        fontWeight: Platform.OS === 'android' ? 'normal' : '800',
        fontSize: size.width > 500 ? 22 : 20,
        lineHeight: 23,
        color: color,
    },
    H6: {
        fontFamily: Platform.OS === 'android' ? 'Raleway-Bold' : 'Raleway-Light',
        fontStyle: fontStyleNormal,
        fontWeight: Platform.OS === 'android' ? 'normal' : '700',
        fontSize: size.width > 500 ? 22 : 20,
        lineHeight: 23,
        color: color,
    },
    Subtitle1: {
        fontFamily:
            Platform.OS === 'android' ? 'Raleway-ExtraBold' : 'Raleway-Light',
        fontStyle: fontStyleNormal,
        fontWeight: Platform.OS === 'android' ? 'normal' : '800',
        fontSize: size.width > 500 ? 20 : 18,
        lineHeight: 21,
        color: color,
    },
    Subtitle2: {
        fontFamily: Platform.OS === 'android' ? 'Raleway-Medium' : 'Raleway-Light',
        fontStyle: fontStyleNormal,
        fontWeight: Platform.OS === 'android' ? 'normal' : '500',
        fontSize: size.width > 500 ? 18 : 16,
        lineHeight: 19,
        color: color,
    },
    Body1: {
        fontFamily: Platform.OS === 'android' ? 'Raleway-Bold' : 'Raleway-Light',
        fontStyle: fontStyleNormal,
        fontWeight: Platform.OS === 'android' ? 'normal' : '700',
        fontSize: size.width > 500 ? 18 : 16,
        lineHeight: 20,
        color: color,
    },
    Body2: {
        fontFamily:
            Platform.OS === 'android' ? 'Raleway-ExtraBold' : 'Raleway-Light',
        fontStyle: fontStyleNormal,
        fontWeight: Platform.OS === 'android' ? 'normal' : '800',
        fontSize: size.width > 500 ? 18 : 16,
        // lineHeight: '115%',
        color: color,
    },
    Body3: {
        fontFamily: Platform.OS === 'android' ? 'Raleway-Bold' : 'Raleway-Light',
        fontStyle: fontStyleNormal,
        fontWeight: Platform.OS === 'android' ? 'normal' : '700',
        fontSize: size.width > 500 ? 18 : 16,
        lineHeight: 19,
        color: color,
    },
    Body4: {
        fontFamily:
            Platform.OS === 'android' ? 'Raleway-SemiBold' : 'Raleway-Light',
        fontStyle: fontStyleNormal,
        fontWeight: Platform.OS === 'android' ? 'normal' : '600',
        fontSize: size.width > 500 ? 17 : 15,
        color: color,
    },
    Body5: {
        fontFamily:
            Platform.OS === 'android' ? 'Raleway-ExtraBold' : 'Raleway-Light',
        fontStyle: fontStyleNormal,
        fontWeight: Platform.OS === 'android' ? 'normal' : '800',
        fontSize: size.width > 500 ? 16 : 14,
        lineHeight: 16,
        color: color,
    },
    Body6: {
        fontFamily:
            Platform.OS === 'android' ? 'Raleway-SemiBold' : 'Raleway-Light',
        fontStyle: fontStyleNormal,
        fontWeight: Platform.OS === 'android' ? 'normal' : '600',
        fontSize: size.width > 500 ? 16 : 14,
        lineHeight: 16,
        color: color,
    },
    Caption1: {
        fontFamily:
            Platform.OS === 'android' ? 'Raleway-SemiBold' : 'Raleway-Light',
        fontStyle: fontStyleNormal,
        fontWeight: Platform.OS === 'android' ? 'normal' : '600',
        fontSize: size.width > 500 ? 16 : 14,
        lineHeight: 20,
        color: color,
    },
    Caption2: {
        fontFamily: Platform.OS === 'android' ? 'Raleway-Regular' : 'Raleway-Light',
        fontStyle: fontStyleNormal,
        fontWeight: Platform.OS === 'android' ? 'normal' : '400',
        fontSize: size.width > 500 ? 16 : 14,
        lineHeight: 16,
        color: color,
    },
    Caption3: {
        fontFamily: Platform.OS === 'android' ? 'Raleway-Regular' : 'Raleway-Light',
        fontStyle: fontStyleNormal,
        fontWeight: Platform.OS === 'android' ? 'normal' : '400',
        fontSize: size.width > 500 ? 16 : 14,
        lineHeight: 20,
        color: color,
    },
    Overline1: {
        fontFamily: Platform.OS === 'android' ? 'Raleway-Medium' : 'Raleway-Light',
        fontStyle: fontStyleNormal,
        fontWeight: Platform.OS === 'android' ? 'normal' : '500',
        fontSize: size.width > 500 ? 14 : 12,
        lineHeight: 16,
        letterSpacing: 0.5,
        color: color,
    },
    Overline2: {
        fontFamily:
            Platform.OS === 'android' ? 'Raleway-SemiBold' : 'Raleway-Light',
        fontStyle: fontStyleNormal,
        fontWeight: Platform.OS === 'android' ? 'normal' : '600',
        fontSize: size.width > 500 ? 14 : 12,
        lineHeight: 14,
        letterSpacing: 0.5,
        color: color,
    },
    Overline3: {
        fontFamily: Platform.OS === 'android' ? 'Raleway-Regular' : 'Raleway-Light',
        fontStyle: fontStyleNormal,
        fontWeight: Platform.OS === 'android' ? 'normal' : '400',
        fontSize: size.width > 500 ? 14 : 12,
        lineHeight: 14,
        letterSpacing: 0.5,
        color: color,
    },
    Overline4: {
        fontFamily: Platform.OS === 'android' ? 'Raleway-Bold' : 'Raleway-Light',
        fontStyle: fontStyleNormal,
        fontWeight: Platform.OS === 'android' ? 'normal' : '700',
        fontSize: size.width > 500 ? 12 : 10,
        lineHeight: 12,
        letterSpacing: 0.5,
        color: color,
    },
    small: {
        fontFamily: Platform.OS === 'android' ? 'Raleway-Bold' : 'Raleway-Light',
        fontStyle: fontStyleNormal,
        fontWeight: Platform.OS === 'android' ? 'normal' : '700',
        fontSize: size.width > 500 ? 12 : 10,
        lineHeight: 16,
        letterSpacing: 0.5,
        color: color,
    },
});
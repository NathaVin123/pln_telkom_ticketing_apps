import {MD3LightTheme as DefaultTheme, useTheme} from 'react-native-paper';

export const useAppTheme = () => useTheme(theme);

export const theme = {
    ...DefaultTheme,
    colors: {
        primary: 'rgb(0, 174, 239)',
        onPrimary: 'rgb(255, 255, 255)',
        primaryContainer: 'rgb(198, 231, 255)',
        onPrimaryContainer: 'rgb(0, 30, 45)',
        secondary: 'rgb(79, 97, 109)',
        onSecondary: 'rgb(255, 255, 255)',
        secondaryContainer: 'rgb(210, 229, 244)',
        onSecondaryContainer: 'rgb(10, 29, 40)',
        tertiary: 'rgb(98, 89, 124)',
        onTertiary: 'rgb(255, 255, 255)',
        tertiaryContainer: 'rgb(232, 221, 255)',
        onTertiaryContainer: 'rgb(30, 23, 53)',
        error: 'rgb(186, 26, 26)',
        onError: 'rgb(255, 255, 255)',
        errorContainer: 'rgb(255, 218, 214)',
        onErrorContainer: 'rgb(65, 0, 2)',
        background: 'rgb(252, 252, 255)',
        onBackground: 'rgb(25, 28, 30)',
        surface: 'rgb(252, 252, 255)',
        onSurface: 'rgb(25, 28, 30)',
        surfaceVariant: 'rgb(221, 227, 234)',
        onSurfaceVariant: 'rgb(65, 72, 77)',
        outline: 'rgb(113, 120, 126)',
        outlineVariant: 'rgb(193, 199, 206)',
        shadow: 'rgb(0, 0, 0)',
        scrim: 'rgb(0, 0, 0)',
        inverseSurface: 'rgb(46, 49, 51)',
        inverseOnSurface: 'rgb(240, 241, 243)',
        inversePrimary: 'rgb(130, 207, 255)',
        elevation: {
            level0: 'transparent',
            level1: 'rgb(239, 244, 249)',
            level2: 'rgb(232, 240, 246)',
            level3: 'rgb(224, 235, 243)',
            level4: 'rgb(222, 234, 241)',
            level5: 'rgb(217, 231, 239)'
        },
        surfaceDisabled: 'rgba(25, 28, 30, 0.12)',
        onSurfaceDisabled: 'rgba(25, 28, 30, 0.38)',
        backdrop: 'rgba(43, 49, 54, 0.4)'
    }
};
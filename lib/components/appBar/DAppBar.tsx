import {Appbar, Text} from 'react-native-paper';
import {ImageSourcePropType, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {theme} from '../../core/theme/theme';
import {Raleway} from '../../core/font/font';

interface DPropsAppbar {
  title: string;
  titleColor?: string;
  buttonBackColor?: string;
  onBackPress?: () => void;
  headerColor?: string;
  onPress?: () => void;
  titleAction?: string;
  iconAction?: ImageSourcePropType | undefined;
}

export const DAppBar = (props: DPropsAppbar) => {
    const insets = useSafeAreaInsets();
    const route = useNavigation();

  return (
    <Appbar.Header style={{backgroundColor: theme.colors.primary}}>
      <View style={{alignItems: 'center', flexDirection: 'row'}}>
        <Appbar.BackAction
            onPress={props.onBackPress ?? (() => route.goBack())}
            color={theme.colors.onPrimary}
        />
        <Text style={[Raleway.H6, { color: theme.colors.onPrimary }]}>{props.title}</Text>
      </View>
    </Appbar.Header>
  );
};
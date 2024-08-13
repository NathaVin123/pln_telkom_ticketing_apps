import {Appbar, Text} from 'react-native-paper';
import {ImageSourcePropType, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {theme} from '../../core/theme/theme';
import {Raleway} from '../../core/font/font';
import {DImage} from '../image/DImage.tsx';
import {s2} from '../size/DSize.tsx';

interface DPropsAppbar {
  title: string;
  titleColor?: string;
  buttonBackColor?: string;
  onBackPress?: () => void;
  headerColor?: string;
  onPress?: () => void;
  titleAction?: string;
  iconAction?: ImageSourcePropType | undefined;
  // hideBackButton?: boolean | false;
}

export const DAppBar = (props: DPropsAppbar) => {
    const insets = useSafeAreaInsets();
    const route = useNavigation();

  return (
      <Appbar.Header style={{ backgroundColor: theme.colors.primary }}>
          <View style={{ alignItems: 'center', flexDirection: 'row', paddingHorizontal: s2, justifyContent: 'space-between', flex: 1 }}>
              {props.onBackPress ? (
                  <Appbar.BackAction
                      onPress={props.onBackPress}
                      color={theme.colors.onPrimary}
                  />
              ) : (
                  <View />
              )}
              <Text style={[Raleway.H6, { color: theme.colors.onPrimary }]}>{props.title}</Text>
              <TouchableOpacity onPress={() => {}} style={{ marginLeft: 'auto' }}>
                  <DImage
                      path={require('../../assets/png/componentIcon/notification.png')}
                      width={30}
                      height={25}
                  />
              </TouchableOpacity>
          </View>
      </Appbar.Header>
  );
};
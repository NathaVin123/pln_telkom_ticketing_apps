import {Appbar, Text} from 'react-native-paper';
import {ImageSourcePropType, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {theme} from '../../core/theme/theme';
import {Raleway} from '../../core/font/font';
import {DImage} from '../image/DImage.tsx';
import {s2} from '../size/DSize.tsx';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

    const navigation : any = useNavigation();

    const logOut = async () => {
        console.log('Logout Pressed');
        const token = await AsyncStorage.getItem('userToken');
        console.log('Remove Token : ', token);
        if(token) {
            await AsyncStorage.removeItem('userToken');
        }
        await navigation.replace('LandingView');
    };

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
              <TouchableOpacity onPress={() => {
                  console.log('Go to landing view');
                logOut().then(r => {});
              }} style={{ marginLeft: 'auto' }}>
                  <DImage
                      path={require('../../assets/png/componentIcon/exit.png')}
                      width={30}
                      height={25}
                  />
              </TouchableOpacity>
          </View>
      </Appbar.Header>
  );
};
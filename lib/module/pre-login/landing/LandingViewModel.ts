import {useNavigation} from '@react-navigation/native';

export const LandingViewModel = () => {
  const navigation = useNavigation<any>();

  const toLogin = async () => {
    navigation.navigate('LoginView');
  };

  return {
    toLogin,
  };
};

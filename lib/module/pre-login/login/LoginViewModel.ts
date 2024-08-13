import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import {POST} from '../../../core/api/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface LoginResponse {
  success: boolean;
  message: string;
  token: string;
}

export const LoginViewModel = () => {
  const navigation = useNavigation<any>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [nik, setNik] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const enableSubmit = () => {
    return !(nik.length > 0 && password.length > 0);
  };

  const submitLogin = async () => {
    try {
      setIsLoading(true);

      const loginData = {
        email: nik,
        password: password,
      };

      console.log(loginData);

      // const response = await axios.post(URLDEV + 'login-mobile', loginData);

      const response = await POST<LoginResponse>({
        path: 'login-mobile',
        reqBody: loginData,
      });

      console.log('Login Successful:', response.data.success);
      console.log('Message:', response.data.message);
      console.log('Token:', response.data.token ?? '');

      if (response.data.success) {
        if(response.data.token !== '') {
          await AsyncStorage.setItem('userToken', response.data.token);
        }

        Toast.show({
          type: 'success',
          text1: 'Successfully logged in',
          position: 'bottom',
        });

        await navigation.replace('DashboardView');
      } else {
        Toast.show({
          type: 'error',
          text1: response.data.message,
          position: 'bottom',
        });
      }

      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    setIsLoading,
    submitLogin,
    nik,
    setNik,
    password,
    setPassword,
    enableSubmit,
  };
};
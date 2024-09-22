import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import notifee from '@notifee/react-native';

export const LandingViewModel = () => {
  const navigation = useNavigation<any>();

  async function getToken() {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (token !== null) {
        console.log('Token retrieved on landing : ', token);
      } else {
        console.log('No token found on landing : ', token);
      }
    } catch (error) {
      console.error('Error retrieving token on landing : ', error);
    }
  }

  async function onDisplayNotification() {
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Required for iOS
    // See https://notifee.app/react-native/docs/ios/permissions
    await notifee.requestPermission();

    await notifee.displayNotification({
      id: '1',
      title: 'Test Notification',
      body: 'Cek 123',
      android: {
        channelId,
      },
    });

    await notifee.displayNotification({
      id: '2',
      title: 'Test Notification',
      body: 'Cek 123',
      android: {
        channelId,
      },
    });

    await notifee.displayNotification({
      id: '3',
      title: 'Test Notification',
      body: 'Cek 123',
      android: {
        channelId,
      },
    });
  }

  useEffect(() => {
    console.log('Get Token');
    getToken().then(() => {});
    onDisplayNotification().then(r => {});
  }, []);

  const toLogin = async () => {
    navigation.replace('LoginView');
  };

  return {
    toLogin,
  };
};

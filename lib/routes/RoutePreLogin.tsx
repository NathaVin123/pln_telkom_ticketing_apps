import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingView from '../module/pre-login/landing/LandingView.tsx';
import {LoginView} from '../module/pre-login/login/LoginView.tsx';

export const RoutePreLogin = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Group>
      <Stack.Screen
        name={'landingView'}
        component={LandingView}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name={'LoginView'}
        component={LoginView}
        options={{headerShown: false}}></Stack.Screen>
    </Stack.Group>
  );
};
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TestView from '../module/test/test.tsx';

export const RouteTest = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Group>
      <Stack.Screen
        name={'testView'}
        component={TestView}
        options={{headerShown: false}}
      />
    </Stack.Group>
  );
};
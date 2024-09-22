import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DashboardView} from '../module/after-login/dashboard/DashboardView.tsx';
import {ApprovalDetail} from '../module/after-login/dashboard/dashboard-child/Approval/ApprovalDetail.tsx';

export const RouteAfterLogin = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Group>
      <Stack.Screen
        name={'DashboardView'}
        component={DashboardView}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'ApprovalDetail'}
        component={ApprovalDetail}
        options={{headerShown: false}}
      />
    </Stack.Group>
  );
};

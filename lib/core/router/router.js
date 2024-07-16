import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {RoutePreLogin} from '../../routes/RoutePreLogin';
import {RouteTest} from '../../routes/RouteTest';

const Stack = createNativeStackNavigator();
// const {LightTheme} = adaptNavigationTheme();

export default function AppRouter() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="testView">
                {RouteTest()}
                {RoutePreLogin()}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

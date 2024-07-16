// import * as RootNavigation from './navigation';
// import {modalNavigate} from './navigation';
import Toast from 'react-native-toast-message';
import {Alert} from 'react-native';
import {AxiosError} from 'axios';
// import {iStorageGetItem} from '../constant/IConstant';
// import {EnumIConstant} from '../../enum/EnumIConstant';
// import AuthRepository from '../../domain/repository/auth/AuthRepository';

interface ErrorProps {
  message: AxiosError;
}

class ErrorHandler {
    public ErrorResponse = (props: ErrorProps) => {
        // @ts-ignore
        const message = props.message.response?.data?.message ?? 'Error';
        // modalNavigate(message);
        // // @ts-ignore
        // Alert.alert( 'Error', props.message.response?.data?.message.toString() );
    };
    public RefreshToken = async () => {
        // const token = await iStorageGetItem({
        //     key: EnumIConstant.refreshToken,
        // });
        // await AuthRepository.refreshToken(token);
    };
    public tokenExpired = (props: ErrorProps) => {
        // @ts-ignore
        RootNavigation.navigate({
            name: 'Login',
        });

        // @ts-ignore
        const message = props.message.response?.data?.message ?? '';

        Toast.show({
            type: 'error',
            text1: 'Session Expired',
            text2: message,
            autoHide: true,
            position: 'top',
            visibilityTime: 5000,
        });
    };

    public timeout = () => {
        Alert.alert('Error', 'Server Timeout');
    };

    public serverNoResponse = () => {
        // modalNavigate('Server No Response');
        // Alert.alert('Error', 'Server No Response');
    };

    public networkError = (props: ErrorProps) => {
        // Alert.alert( 'Error', props.message.toString() );
        // modalNavigate('Connection Error. Please try again later.'); //props.message.toString().split( ': ' )[ 1 ]
    };
}

export default new ErrorHandler();
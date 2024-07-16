import {APP_VERSION, REACT_APP_MODE} from '@env';
import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import ErrorHandler from './ErrorHandler.ts';

export const baseUrl = (): string => {
  return REACT_APP_MODE;
};

export const appVersion = () => {
    return APP_VERSION;
}

const timeOut = 60000;

axios.interceptors.request.use(request => {
    console.debug('-------------------------------------------------------');
    console.debug('METHOD : ', request.method);
    console.debug('URL : ', request.url);
    console.debug('REQUEST HEADER : ', request.headers);
    console.debug('REQUEST BODY : ', JSON.stringify(request.data));
    console.debug('');
    console.debug('REQUEST...');
    console.debug('-------------------------------------------------------');
    return request;
});

axios.interceptors.response.use(
    response => {
        const resultResponse: AxiosResponse = response;
        console.debug('');
        console.debug('-------------------------------------------------------');
        console.debug('RESPONSE : ');
        console.debug('RESPONSE REQUEST URL: ', resultResponse.request._url);
        console.debug('RESPONSE STATUS : ', response.status);
        console.debug('RESPONSE HEADER : ', response.headers);
        console.debug('RESPONSE BODY : ', JSON.stringify(response.data));
        console.debug('-------------------------------------------------------');
        return response;
    },
    error => {
        const errorResponse: AxiosResponse = error.response;
        console.debug('');
        console.debug('-------------------------------------------------------');
        if (error.message !== 'Network Error') {
            console.debug('RESPONSE REQUEST URL: ', errorResponse.request._url);
        }
        console.debug('RESPONSE STATUS : ', error.response.status);
        console.debug('RESPONSE HEADER : ', error.response.headers);
        console.debug('RESPONSE BODY : ', error.response.data);
        console.debug('-------------------------------------------------------');
        return Promise.reject(error);
    },
);

async function RequestData(
    config: AxiosRequestConfig,
    isError: boolean,
): Promise<any> {
    try {
        const resp = await axios(config);
        if (resp.status === 200) {
            if (resp.data.code === '00') {
                return JSON.stringify(resp.data);
            }
            if (resp.data.code === '5101') {
                return JSON.stringify(resp.data);
            }
            return null;
        } else if (resp.status === 201) {
            return JSON.stringify(resp.data);
        }

        return null;
    } catch (e) {
        const error: AxiosError = e as AxiosError;
        if (error.response?.status === 400) {
            ErrorHandler.ErrorResponse({message: error}); //error.response.data.message ?? '');
        } else if (error.message === 'Network Error') {
            ErrorHandler.networkError({
                message: error,
            });
        } else if (error.response?.status === 401) {
            // ErrorHandler.ErrorResponse({message: error});

            await ErrorHandler.RefreshToken();
        } else if (error.response?.status === 403) {
            ErrorHandler.tokenExpired({
                message: error,
            });
        } else if (
            error.response?.status === 404 ||
            error.response?.status === 413 ||
            error.response?.status === 422
        ) {
            ErrorHandler.ErrorResponse({message: error});
        } else if (error.response?.status === 500) {
            ErrorHandler.serverNoResponse();
        } else if (error.response?.status === 503) {
            ErrorHandler.serverNoResponse();
        } else if (error.response?.status === 504) {
            ErrorHandler.timeout();
        }
        return null;
    } finally {
        console.debug('::FINISH::');
        console.debug('-------------------------------------------------------');
        console.debug('');
    }
}

interface FetchInterface {
    path: string;
    isError?: boolean;
    reqBody: {};
}

interface FetchInterfaceGet {
    path: string;
    isError?: boolean;
}

export async function get(props: FetchInterfaceGet) {
    return RequestData(
        {
            method: 'GET',
            url: baseUrl() + props.path,
            // headers: await header(),
            timeout: timeOut,
            timeoutErrorMessage: 'Request Timeout',
        },
        props.isError ?? false,
    );
}

export async function post(props: FetchInterface) {
    return RequestData(
        {
            method: 'POST',
            url: baseUrl() + props.path,
            // headers: await header(),
            data: props.reqBody,
            timeout: timeOut,
            timeoutErrorMessage: 'Request Timeout',
        },
        props.isError ?? false,
    );
}

export async function deleted(props: FetchInterface) {
    return RequestData(
        {
            method: 'DELETE',
            url: baseUrl() + props.path,
            // headers: await header(),
            data: props.reqBody,
            timeout: timeOut,
            timeoutErrorMessage: 'Request Timeout',
        },
        props.isError ?? false,
    );
}


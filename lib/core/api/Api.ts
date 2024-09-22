import axios, {AxiosError, AxiosResponse} from 'axios';
import {URLDEV} from '@env';
import Toast from 'react-native-toast-message';

export const baseUrl = (): string => {
  return URLDEV;
};

const timeOut = 10000; // Timeout set to 60 seconds (60000 milliseconds)

interface ReqInterface {
  path: string;
  reqBody: {};
}

interface NoReqInterface {
  path: string;
}

// Helper function to handle errors and show Toast messages
function handleError(error: AxiosError) {
  if (error.response) {
    const statusCode = error.response.status;
    const data: any = error.response.data;

    let message = 'Something went wrong. Please try again later.';

    switch (statusCode) {
      case 400:
        message = 'Bad Request: ' + (data.message || 'Invalid data.');
        break;
      case 401:
        message = 'Unauthorized: ' + (data.message || 'Authentication failed.');
        break;
      case 500:
        message = 'Internal Server Error: ' + (data.message || 'Server error.');
        break;
      default:
        message = `Error ${statusCode}: ` + (data.message || 'Unknown error.');
    }

    Toast.show({
      type: 'error',
      text1: `Error ${statusCode}`,
      text2: message,
      position: 'bottom',
    });

    return Promise.reject(error.response);
  } else if (error.request) {
    Toast.show({
      type: 'error',
      text1: 'Something went wrong. Please try again later.',
      text2: '',
      position: 'bottom',
    });
    console.error('No response received: ', error.request);
  } else {
    Toast.show({
      type: 'error',
      text1: 'Something went wrong. Please try again later.',
      text2: '',
      position: 'bottom',
    });
    console.error('Error setting up request: ', error.message);
  }

  return Promise.reject(error);
}

// Log request details
function logRequestDetails(method: string, url: string) {
  console.log(`Request: ${method} ${url}`);
}

// Log response details
function logResponseDetails<T>(response: AxiosResponse<T>) {
  console.log(
    `Response: ${response.status} ${response.config.method?.toUpperCase()} ${
      response.config.url
    }`,
  );
}

// GET request
export async function GET<T>(props: NoReqInterface): Promise<AxiosResponse<T>> {
  const url = baseUrl() + props.path;
  const method = 'GET';

  logRequestDetails(method, url);

  try {
    const response = await axios.get<T>(url, {timeout: timeOut});
    logResponseDetails(response);
    return response;
  } catch (error) {
    return handleError(error as AxiosError);
  }
}

// POST request
export async function POST<T>(props: ReqInterface): Promise<AxiosResponse<T>> {
  const url = baseUrl() + props.path;
  const method = 'POST';

  logRequestDetails(method, url);

  try {
    const response = await axios.post<T>(url, props.reqBody, {
      timeout: timeOut,
    });
    logResponseDetails(response);
    return response;
  } catch (error) {
    return handleError(error as AxiosError);
  }
}

// DELETE request
export async function DELETE<T>(
  props: NoReqInterface,
): Promise<AxiosResponse<T>> {
  const url = baseUrl() + props.path;
  const method = 'DELETE';

  logRequestDetails(method, url);

  try {
    const response = await axios.delete<T>(url, {timeout: timeOut});
    logResponseDetails(response);
    return response;
  } catch (error) {
    return handleError(error as AxiosError);
  }
}

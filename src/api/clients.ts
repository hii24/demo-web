import axios from 'axios';
import { baseApiUrl } from './config';
import { Response } from './types/response.interface';
import { ClientsResponse,  } from './types/client.response';
import AuthStore from '../store/store';
import sessionStore from '../store/session-store';

export async function clients(): Promise<Response<ClientsResponse>> {
  sessionStore.setLoading(true);
  try {
    const response = await axios.get(
      `${baseApiUrl}/clients`,
      {
        headers: {
          'Auth-Token': AuthStore.token,
        },
      }
    );

    return {
      data: response.data,
      statusCode: response.status,
      success: true,
    };
  } catch (error: any) {
    console.warn(error);
    return {
      data: null,
      statusCode: error.response.status || 0,
      success: false,
      errorMessage: error.message,
    };
  } finally {
    sessionStore.setLoading(false);
  }
}

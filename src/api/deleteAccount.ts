import axios from 'axios';
import { baseApiUrl } from './config';
import { Response } from './types/response.interface';
import AuthStore from '../store/store';
import sessionStore from '../store/session-store';
import authStore from '../store/store';

export async function deleteAccount(): Promise<Response<any>> {
  sessionStore.setLoading(true);
  try {
    const response = await axios.delete(
      `${baseApiUrl}/user`,
      {
        headers: {
          'Auth-Token': AuthStore.token,
        },
      }
    );
    authStore.logout();
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

import axios from 'axios';
import { baseApiUrl } from './config';
import { Response } from './types/response.interface';
import AuthStore from '../store/store';
import sessionStore from '../store/sessionStore';
import authStore from '../store/store';

interface createUserData {
  password: string;
}

export async function createUserPassword(data: createUserData): Promise<Response<any>> {
  sessionStore.setLoading(true);
  try {
    const response = await axios.post(
      `${baseApiUrl}/user/password`,
      data,
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
    console.log(error);
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

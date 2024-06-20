import axios from 'axios';
import { baseApiUrl } from './config';
import { Response } from './types/response.interface';
import AuthStore from '../store/store';
import sessionStore from '../store/sessionStore';
import authStore from '../store/store';

interface UpdateUserData {
  email: string;
  password: string;
}

export async function updateUserEmail(data: UpdateUserData): Promise<Response<any>> {
  sessionStore.setLoading(true);
  try {
    const response = await axios.put(
      `${baseApiUrl}/user/email`,
      data,
      {
        headers: {
          'Auth-Token': AuthStore.token,
        },
      }
    );
    authStore.login(response.data.token)

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

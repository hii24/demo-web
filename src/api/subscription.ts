import axios from 'axios';
import { baseApiUrl } from './config';
import { Response } from './types/response.interface';
import { subscriptionResponse } from './types/subscription.response';
import AuthStore from '../store/store';
import sessionStore from '../store/sessionStore';

export async function subscription(): Promise<Response<subscriptionResponse>> {
  sessionStore.setLoading(true);
  try {
    const response = await axios.get(
      `${baseApiUrl}/user/subscription`,
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

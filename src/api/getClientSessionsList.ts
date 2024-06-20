import axios from 'axios';
import { baseApiUrl } from './config';
import { Response } from './types/response.interface';
import { ClientResponse, } from './types/client.response';
import AuthStore from '../store/store';
import sessionStore from '../store/sessionStore';
import { SessionsResponse } from './types/sessionsResponse';

export async function getClientSessionsList(): Promise<Response<SessionsResponse>> {
  sessionStore.setLoading(true);
  try {
    const response = await axios.get(
      `${baseApiUrl}/sessions`,
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

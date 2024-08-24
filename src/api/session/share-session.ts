import axios from 'axios';
import { baseApiUrl } from '../config';
import { Response } from '../types/response.interface';
import AuthStore from '../../store/store';
import sessionStore from '../../store/session-store';


export async function shareSession(id: string): Promise<Response<any>> {
  try {
    const response = await axios.post(
      `${baseApiUrl}/session/${id}/share`,
      {},
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
    return {
      data: null,
      statusCode: error.response.status || 0,
      success: false,
      errorMessage: error.message,
    };
  } finally {
  }
}
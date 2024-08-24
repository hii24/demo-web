import axios from 'axios';
import { baseApiUrl } from '../config';
import { Response } from '../types/response.interface';
import AuthStore from '../../store/store';
import {INIT_GLOBAL_SESSION_DATA} from "../../configs/globa-session-data";


export async function createSession(): Promise<Response<any>> {
  try {
    const response = await axios.post(
      `${baseApiUrl}/session`,
      {
        settings: JSON.stringify(INIT_GLOBAL_SESSION_DATA)
      },
      {
        headers: {
          'Auth-Token': AuthStore.token,
          'Content-Type': 'application/json',
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

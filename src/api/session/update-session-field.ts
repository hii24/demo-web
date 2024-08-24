import axios from 'axios';
import { baseApiUrl } from '../config';
import { Response } from '../types/response.interface';
import AuthStore from '../../store/store';


export async function updateSessionField(id: string, field: string): Promise<Response<any>> {
  try {
    const response = await axios.put(
      `${baseApiUrl}/session/${id}/settings/speed`,
      {
        value: "9"
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

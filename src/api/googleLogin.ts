import axios from "axios";
import { baseApiUrl } from "./config";
import { IGoogleResponse } from "./types/google.response";
import { Response } from "./types/response.interface";

export async function getGoogleLink(): Promise<Response<IGoogleResponse>> {
  try {
    const response = await axios.get(`${baseApiUrl}/auth/google/url`);

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
    };
  }
}

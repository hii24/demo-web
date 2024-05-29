import axios from "axios";
import { baseApiUrl } from "./config";
import { Response } from "./types/response.interface";
import { LoginResponse } from "./types/login.response";

export async function signIn(
  email: string,
  password: string,
  remember: 0 | 1
): Promise<Response<LoginResponse>> {
  const data = {
    email: email,
    password: password,
    remember: remember,
  };

  try {
    const response = await axios.post(`${baseApiUrl}/auth/signin/email`, data);

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
  }
}

import axios from "axios";
import { baseApiUrl } from "./config";
import { RegistrationResponse } from "./types/registration.response";
import { Response } from "./types/response.interface";

interface IData {
  email: string;
  password: string;
  user_type: number;
  first_name?: string;
  last_name?: string;
  title?: string;
  practise_name?: string;
}

export async function registartionUser(
  data: IData
): Promise<Response<RegistrationResponse>> {
  // let data: IData = {
  //   email: email,
  //   password: password,
  //   user_type: user_type,
  // };
  // first_name && (data.first_name = first_name);
  // last_name && (data.last_name = last_name);
  // title && (data.title = title);
  // practise_name && (data.practise_name = practise_name);

  try {
    const response = await axios.post(`${baseApiUrl}/auth/signup/email`, data);
    console.log("Response:", response.data);
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
      errorMessage: error.message,
      success: false,
    };
  }
}

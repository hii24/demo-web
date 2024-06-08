import axios from "axios";
import { Response } from "./types/response.interface";

interface Resourcing {
  title: string;
  source: string;
  img: string;
  type: string;
  duration: number;
  tags: string[];
  id: string;
}
export enum EResourcingTags {
  GetCalm = 'Get Calm',
  FeelConfident = 'Feel Confident',
  BecomeComfortable = 'Become Comfortable',
}
type TResourcingTags = EResourcingTags.BecomeComfortable | EResourcingTags.GetCalm | EResourcingTags.FeelConfident;

interface Tags {
  resourcing: TResourcingTags[];
  sessions: TResourcingTags[];
  affirmations: TResourcingTags[];
}
interface Data {
  success: boolean;
  data: {
    resourcing: Resourcing[];
    sessions: Resourcing[];
    affirmations: Resourcing[];
    tags: Tags;
  };
}

export async function getResources(): Promise<Response<Data>> {
  try {
    const response = await axios.get('https://api.emdrtappers.com/v1/resourses');

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

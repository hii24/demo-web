interface CreatedBy {
  uid: string;
  user_type: number;
}

interface Params {
  bg: string;
  color: string;
  sound: string;
  passes: number;
}

export interface ISessionData {
  _id: string;
  created_by: CreatedBy;
  created_at: number;
  started_at: number;
  params: Params;
  finished_at: number;
  notes?: string;
}

interface Link {
  url: string | null;
  label: string;
  active: boolean;
}

interface Sessions {
  current_page: number;
  data: ISessionData[];
  links: Link[];
}
interface Session {
  current_page: number;
  session: ISessionData;
  links: Link[];
}

export interface SessionsResponse {
  success: boolean;
  sessions: Sessions;
}
export interface SessionResponse {
  success: boolean;
  session: Session;
}

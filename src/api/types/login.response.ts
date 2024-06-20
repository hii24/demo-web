export interface LoginResponse {
  success: boolean;
  token: string;
  user: {
    uid: string;
    email: string;
    registered: boolean;
    emailVerified: boolean;
    photoUrl: string;
    user_type: 0 | 1;
    first_name: string;
    last_name: string;
    title: string;
    practise_name: string;
    passwordSet: boolean;
  };
}

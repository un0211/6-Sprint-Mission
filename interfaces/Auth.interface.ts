export interface LoginData {
  email: string;
  password: string;
}
export type LoginDataKey = keyof LoginData;

export interface SignupData {
  email: string;
  nickname: string;
  password: string;
  passwordCheck: string;
}
export type SignupDataKey = keyof SignupData;

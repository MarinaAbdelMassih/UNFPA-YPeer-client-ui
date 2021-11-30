export interface ISignIn {
  username: string;
  password: string;
  authType: string;
}

export interface IAuthorizedUser {
  valid: boolean;
  name: string;
  email: string;
  uuid: string;
  status: number
  auth: IAuth;
}

export interface IAuth {
  userId: number
}

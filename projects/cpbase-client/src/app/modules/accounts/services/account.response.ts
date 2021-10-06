export interface ISignupRequest {
    username: string;
    password: string;
    mailId: string;
}
export type ILoginRequest = Pick<ISignupRequest, 'mailId' | 'password'>;
export interface IAuthUser {
    _id: string;
    name: string;
    mailId: string;
    hashed_password: string;
    created_on: Date;
    updated_on: Date | null;
}

export interface ISignupResponse {
    token: string;
    user: IAuthUser
}

export type ILoginResponse = ISignupResponse;
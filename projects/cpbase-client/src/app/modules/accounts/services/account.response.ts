export interface ISignupRequest {
    username: string;
    password: string;
    mailId: string;
}

export interface ISignupResponse {
    token: string;
    user: {
        _id: string;
        name: string;
        mailId: string;
        hashed_password: string;
        created_on: Date;
        updated_on: Date | null;
    }
}
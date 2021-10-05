export interface ISignupRequest {
    username: string;
    password: string;
    mailId: string;
}

export interface ISignupResponse {
    success: boolean;
    token: string;
    result: {
        _id: string;
        name: string;
        mailId: string;
        hashed_password: string;
        created_on: Date;
        updated_on: Date | null;
    }
}
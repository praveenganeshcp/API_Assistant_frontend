export interface IApplication {
    _id: string;
    user_id: string;
    name: string;
    created_on: Date;
    updated_on: Date | null;
}


export interface IAppDetail {
    _id: string;
    app_no: number;
    name: string;
    created_on: Date;
    updated_on: Date | null;
    no_of_collections: number;
    no_of_users: number;
}
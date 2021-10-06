export interface IApplication {
    "_id": string;
    "user_id": string;
    "name": string;
    "created_on": Date;
    "updated_on": Date | null;
}
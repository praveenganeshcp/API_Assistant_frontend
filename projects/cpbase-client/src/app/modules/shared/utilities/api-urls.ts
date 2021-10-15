import { environment } from "projects/cpbase-client/src/environments/environment"

const baseUrl = environment.apiUrl+'api/v1/'

export const APIURL = {
    SIGNUP: baseUrl + 'accounts/signup',
    LOGIN: baseUrl + 'accounts/login',
    APPS: baseUrl+ 'projects',
    STORAGE: baseUrl+ 'cpbase/storage',
    DIRECTORIES: baseUrl + 'cpbase/filesystem',
    COLLECTIONS: baseUrl+ 'cpbase/collections',
    GLOBAL: baseUrl+ 'cpbase/global',
    OBJECT: baseUrl+ 'cpbase/object',
}
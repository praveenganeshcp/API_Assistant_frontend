import { environment } from "projects/cpbase-client/src/environments/environment"

const baseUrl = environment.apiUrl+'api/v1/'

export const APIURL = {
    SIGNUP: baseUrl + 'accounts/signup'
}
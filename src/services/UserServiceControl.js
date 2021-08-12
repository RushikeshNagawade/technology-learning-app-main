import axios from 'axios'
import authHeader from './auth-header';

const USERS_REST_API_URL = 'http://localhost:8082/api/courses/';
const USERS_REST_API_URL2 = 'http://localhost:8082/api/moderator/';
class UserServiceControl {

    getUsers(){
        return axios.get(USERS_REST_API_URL2 + 'getallmoderator', { headers: authHeader() });
    }

    getCourses(){
        return axios.get(USERS_REST_API_URL + 'getallcourses', { headers: authHeader() });
    }

    getCourseById(){
        return axios.get(USERS_REST_API_URL + 'coursebyid{cid}', { headers: authHeader() });
    }

    getCourseByName(){
        return axios.get(USERS_REST_API_URL + 'coursebyname{cname}', { headers: authHeader() });
    }
}

export default new UserServiceControl();
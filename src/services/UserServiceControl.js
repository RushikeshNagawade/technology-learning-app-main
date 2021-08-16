import axios from 'axios'
import authHeader from './auth-header';

const USERS_REST_API_URL = 'http://localhost:8082/';
// const USERS_REST_API_URL2 = 'http://localhost:8082/api/moderator/';
class UserServiceControl {

    // getUsers(){
    //     return axios.get(USERS_REST_API_URL2 + 'getallmoderator', { headers: authHeader() });
    // }

    getCourses(){
        return axios.get(USERS_REST_API_URL + 'getallcourses', { headers: authHeader() });
    }

    // getCourseById(){
    //     return axios.get(USERS_REST_API_URL + 'coursebyid{cid}', { headers: authHeader() });
    // }

    // getCourseByName(){
    //     return axios.get(USERS_REST_API_URL + 'coursebyname{cname}', { headers: authHeader() });
    // }
    getCourseByCname(cname){
        return(
            axios.get(`${USERS_REST_API_URL}/${cname}`, { headers: authHeader() })
    
           // axios.put(`${base_url_edit_status}/${status}/${user_id}`,trainee, { headers: authHeader() }) 
        ); 
    }
    getCourseByCid(cid){
        return(
            axios.get(USERS_REST_API_URL+'/'+cid , { headers: authHeader() })
        );
    }
}

export default new UserServiceControl();
import axios from 'axios'

const COURSE_REST_API_URL = 'http://localhost:8082/';

class UserServiceControl {

    // getCourse(){
    //     return axios.get(xOURSE_REST_API_URL + 'getallmoderator');
    // }

    getCourses(){
        return axios.get(COURSE_REST_API_URL + 'getallcourses');
    }

    getCourseById(){
        return axios.get(COURSE_REST_API_URL + 'coursebyid');
    }

    getCourseByByName(){
        return axios.get(COURSE_REST_API_URL + 'coursebyname')
    }

}

export default new UserServiceControl();
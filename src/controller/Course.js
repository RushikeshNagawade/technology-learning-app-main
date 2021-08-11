import React from 'react';
import { useState } from 'react';
import CourseJava from './CourseJava';
// import ".../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import image from '../media/html-image.jpg';

//**Function Component */

let Course = () => {
    const [courseList, setCourseList] = useState([]);

    return (
        <div>
            <h1>Course Component</h1>
            <CourseJava courseList= {courseList}></CourseJava>
            <img src='../media/html-image'
          height="24px" alt="Java" />

            {/* <img src={image}/> */}
            
        </div>
    )
}
export default Course;
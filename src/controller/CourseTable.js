import React from 'react';
// import UserServiceControl from '../services/UserServiceControl';
import CourseServiceControl from './CourseServiceControl';

class CourseMain extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            course:[]
        }
    }

    componentDidMount(){
        CourseServiceControl.getCourses().then((response) => {
            this.setState({ course: response.data})
        });

       
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Course List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td>Course Id</td>
                            <td>Course Name</td>
                            <td>Course Details</td>
                            {/* <td>Employer Contact</td>
                            <td>Email</td> */}
                            {/* <td>Role</td> */}
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.course.map(
                               course => 
                                <tr key = {course.cid}>
                                     <td> {course.cid}</td>   
                                     <td> {course.cname}</td>   
                                     <td> {course.courseDetails}</td>   
                                     {/* <td> {user.empContact}</td> 
                                     <td> {user.empEmail}</td>  */}
                                     {/* <td> {user.roles}</td>    */}
                                </tr>
                            )
                        }

                    </tbody>
                </table>




                
            </div>

            

        )
    }
}

export default CourseMain;
import axios from "axios";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, ListGroup } from 'react-bootstrap';
import List from '@material-ui/core/List';


let CourseJava = (props) => {
    const [courseList, setCourseList] = useState([]); // from axios

    const getallcourses = (e) => {
        console.log();
        axios.get(`http://localhost:8082/getallcourses`)
        .then((response) => {
            setCourseList(response.data);
        }).catch(error => {
            console.log(error.message)
        });

    }
    return (
        <div>
            <p>CourseJava Component</p>
            <div>
            <button type="submit" className="btn btn-primary" onClick={getallcourses}>Get All Courses</button>
            <p>all courses</p>
            {/* <ListGroup variant="flush"> 
            <ListGroup.Item>{courseList.map(m=> <p>{m.cid}, {m.cname}, {m.courseDetails}</p>)}</ListGroup.Item>
            </ListGroup> */}
            <div>

            {/* <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://source.unsplash.com/user/erondu/600x400" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    {courseList.map(m=> <p>{m.cname}</p>)}
                </Card.Text>
            <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card> */}
            </div>


            </div>
        </div>
        
    )
}
export default CourseJava;
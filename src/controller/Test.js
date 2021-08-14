import React, {Component}  from 'react';

import { Card, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faList } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';




export default class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            course : []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8082/coursebyname/java")
        .then(response => response.data)
        .then((data) => {
            this.setState({course : data});
        });
    }

    render() {
        return (
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header><FontAwesomeIcon icon={faList}/>Course List</Card.Header>
                <Card.Body>
                    <Table bordered hover striped variant="dark">
                        <thead>
                            <tr>
                                <th>Course id</th>
                                <th>Course Name</th>
                                <th>Course Details</th>
                                <th>description</th>
                                <th>videoURL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.course.length === 0 ?
                            <tr align="center">
                                <td colSpan4="6">Course Available.</td>
                            </tr> :
                            this.state.course.map((course) => (
                                <tr key={course.cid}>
                                    <td>{course.cid}</td>
                                    <td>{course.cname}</td>
                                    <td>{course.courseDetails}</td>
                                    <td>{course.description}</td>
                                    <td>{course.videoURL}</td>
                                    

                                </tr>
                            ))
                            }
                        </tbody>
                        

                    </Table>
                </Card.Body>
                
            
            </Card>
        )
    }
}
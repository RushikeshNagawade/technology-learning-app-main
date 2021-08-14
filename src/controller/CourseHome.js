import React, {Component}  from 'react';

import { Card, Col, Row, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faList } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import ReactPlayer from 'react-player'



export default class CourseHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            course : []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8082/coursebyname/html")
        .then(response => response.data)
        .then((data) => {
            this.setState({course : data});
        });
    }

    render() {
        return (
           <div>
               {
                   this.state.course.map((item) => {
                       return (
                           <Container>
                               
                               <Container className='p-5'>
                               <Row className="justify-content-md-center">
                                   <Col md="auto">
                               <ReactPlayer url={item.videoURL} />
                                    </Col>
                                </Row>
                               </Container>
                               
                               <Container  className="p-3 m-3 bg-light text-dark border border-dark">
                                   <Row className="justify-content-md-center">
                                   <Col md="auto">
                               <p className="text-monospace">{item.description}</p>
                               </Col>
                               </Row>
                               </Container>
                               
                               
                            </Container>
                       );
                   })
               }
           </div>
        );
    }
}
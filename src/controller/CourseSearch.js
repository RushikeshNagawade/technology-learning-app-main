import React, { Component } from 'react';
import { Table,Form,Container, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
import {
    Link
  } from 'react-router-dom'
  import { Navbar, Nav } from 'react-bootstrap'
import axios from 'axios';
import CourseServiceControl from './CourseServiceControl';
// const base_url="http://localhost:8082/";
import Card from './Card';


class CourseSearch extends Component {
    constructor() {
        super()
        this.state = {
            searchData: null,
            noData:false,
            lastSearch:"",
        }
    }
    
    search(key) {
        console.warn(key.toLowerCase())
        // CourseServiceControl.getCourseById(key).then((data) => {
        this.setState({lastSearch:key})
        fetch("/coursebyname/"+key).then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp)
                if(resp.length>0)
                {
                    this.setState({searchData:resp,noData:false})
                }
                else
                {
                    this.setState({noData:true,searchData:null})
                }
                // const { query } = this.state;
                // const filteredData = data.filter(item => {
                //     return item.cname.toLowerCase().includes(query.toLowerCase());
                //   });
            })
        })
    }

    


    
    // delete(id)
    // {
    //     fetch('http://localhost:8082/deletecourse/'+id,
    //     {
    //         method: "DELETE",
    //         // headers:{
    //         //     'Content-Type':'application/json'
    //         // },
    //     }).then((result)=>{
    //         result.json().then((resp)=>{
    //             alert("Course has heen Deleted")
    //             this.search(this.state.lastSearch)
    //         })
    //     })
    // }

    render() {
        
        return (
            <Container>
                <Navbar />
                <h1>Course Search</h1>
               
                <FormControl type="text"  onChange={(event) => this.search(event.target.value.toLowerCase())}   placeholder="Search course" />
                <div>
                    {
                        this.state.searchData?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        
                                        <th>cid</th>
                                        <th>cname</th>
                                        <th>courseDetails</th>
                                        {/* <th>cfee</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                            {
                                this.state.searchData.map((item)=>
                                <tr>
                                                <td>{item.cid}</td>
                                                <td>{item.cname}</td>
                                                <td>{item.courseDetails}</td>
                                                {/* <td>{item.cfee}</td> */}
                                                <td><Link to={"/view/"+item.cid}><FontAwesomeIcon icon={faEdit} color="orange" /> </Link>
                                                <span onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="green" /> </span>
                                                </td>
                                            </tr>
                                    )
                            }
                            </tbody>
                            </Table>



                        </div>
                        :""
                        // this.state.searchData.map((item) => <Card item={item}/>)
                        // :""
                    }
                    {
                        this.state.noData?<h3>No Data Found</h3>:null
                    } 
                </div>

            </Container>
        );
    }
}

export default CourseSearch;
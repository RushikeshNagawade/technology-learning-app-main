import React, { Component } from 'react';
import Card from "../controller/Card";

class ListApp extends Component {
    constructor(props) {
        super(props);
        this.state= {
            items: [],
            isLoaded: false,
        }
    };
    componentDidMount = () => {
        fetch("http://localhost:8082/getallcourses")
        .then(resp => resp.json())
        .then(resp => {
            this.setState({
                isLoaded:true,
                items:resp.results
            })
            console.log(this.state.items)
        })
    };

    render() {
        var {isLoaded, items} = this.state;
        return (
            <div>
                {items.map(item => (<Card key={item.cid} item={item}/>))};
            </div>
        );
    }

}

export default ListApp;
import React, { Component } from 'react';
import RemineTable from './components/Table/RemineTable/RemineTable';
import FilterForm from './components/FilterForm'
import API from './API'

class InterviewTestContainer extends Component {
    constructor() {
        super();
        this.state = {
          property: []
        }
      }

    componentDidMount(){
       API.getLocations().then(result => this.setState({
          property: result.data
        }))
    }
    render() {
        return (
            <div className="interviewTestContainer">
                <div className="filterContainer">
                    <FilterForm data={this.state.property} />
                </div>
            </div>
        );
    }
}

export default InterviewTestContainer;

import React, { Component } from 'react';
import FilterOptions from './FilterOptions'
import RemineTable from './Table/RemineTable/RemineTable';

var FilterForm = React.createClass({
  getInitialState: function() {
    return {
      data: this.props.data,
      beds: '',
      baths: '',
      buildingType: ''
    }
  },
  filterItems: function(val, type) {
     switch (type) {
      case 'beds':
        this.setState({beds: val});
        break;
      case 'baths':
        this.setState({baths: val});
        break;
      case 'buildingType': 
        this.setState({buildingType: val});
        break;
      default:
        break;
    }
  },
  render: function() {
    console.log('change in event');
    var filteredItems = this.props.data;
    var state = this.state;
    var filterProperties = ["beds", "baths", "buildingType"];
    filterProperties.forEach(function(filterBy) {
      console.log(filterBy);
      var filterValue = state[filterBy];
      console.log('filterValue',filterValue);
      if (filterValue) {
        console.log('filteredItems',filteredItems);
        filteredItems = filteredItems.filter(function(item) {
          if(filterBy === 'buildingType'){
            return item[filterBy]['name'] === filterValue;
          } else {
            return item[filterBy] === parseInt(filterValue);
          }
        });
        console.log('After filteredItems',filteredItems);
      }
    });
    var bedsArray = [...new Set(this.props.data.map(function(item) { return item.beds }))];
    var bathsArray = [...new Set(this.props.data.map(function(item) { return item.baths }))];
    var buildingTypeArray = [...new Set(this.props.data.map(function(item) { return item.buildingType.name }))];
    bathsArray = bathsArray.filter(function(e){ return e === 0 || e });
    console.log('bathsArray',bathsArray);
    bedsArray.unshift("");
    bathsArray.unshift("");
    buildingTypeArray.unshift("");
    return (
      <div className="container">
        <FilterOptions 
            data={this.state.data} 
            bedsOptions={bedsArray} 
            bathsOptions={bathsArray}
            buildingTypeOptions={buildingTypeArray}
            changeOption={this.filterItems} />
        <div className="filter-form">
          <RemineTable properties={filteredItems} />
        </div>
      </div>
    )
  }
});

export default FilterForm;
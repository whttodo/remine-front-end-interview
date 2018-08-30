import React, { Component } from 'react';

var FilterOptions = React.createClass({
  changeOption: function(type, e) {
    var val = e.target.value;
    this.props.changeOption(val, type);
  },
  render: function() {
    return (
      <div className="filter-options">
        <div className="filter-option">
          <label>Beds</label>
          <select id="beds" value={this.props.beds} onChange={this.changeOption.bind(this, 'beds')}>
          {this.props.bedsOptions.map(function(option,index) {
            return ( <option key={"beds" + index + option} value={option}>{option}</option> )
          })}
          </select>
          <label>Baths</label>
          <select id="baths" value={this.props.baths} onChange={this.changeOption.bind(this, 'baths')}>
          {this.props.bathsOptions.map(function(option,index) {
            return ( <option key={"baths" + index + option} value={option}>{option}</option> )
          })}
          </select>
          <label>BuildingType</label>
          <select id="person" value={this.props.buildingType} onChange={this.changeOption.bind(this, 'buildingType')}>
          {this.props.buildingTypeOptions.map(function(option,index) {
            return ( <option key={"building" + index + option} value={option}>{option}</option> )
          })}
          </select>
        </div>
      </div>
    );
  }
});

export default FilterOptions;
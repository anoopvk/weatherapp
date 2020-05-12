import React, { Component } from 'react';
class LocationOutput extends Component {
    state = {  }
    render() { 
        return ( 
        <React.Fragment>
        <h2><b>{this.props.data.name}</b>,{this.props.data.country}</h2>
        <h5>{this.props.data.date}</h5>
        </React.Fragment>
         );
    }
}
 
export default LocationOutput;
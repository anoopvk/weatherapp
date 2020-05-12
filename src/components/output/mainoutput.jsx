import React, { Component } from "react";
import CityNotFound from "./cityNotFound"
import WeatherOutput from "./weatheroutput"
class MainOutput extends Component {
  state = {};
  render() {
    if (this.props.data.code === 404) {
      return (
        <CityNotFound/>
      );
    }
    else if (this.props.data.code === 200) {
      return (
          <WeatherOutput data={this.props.data}/>
        
      );
    }else{
        return(
            <React.Fragment></React.Fragment>
        )
    }
  }
}

export default MainOutput;

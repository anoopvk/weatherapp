import React, { Component } from "react";
import LocationOutput from "./loactionOutput"
import MainWeather from "./mainWeather"
import WeatherDetail from "./weatherdetail"
class WeatherOutput extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="row">
          {/* <div className="col-12 m-5"> */}
          <div className="col-12 p-5">
            <LocationOutput data={this.props.data}/>
          </div>
        </div>
        {/* <div className="row mx-2"> */}
        <div className="row px-2">
          <div className="col-md-6">
            <MainWeather data={this.props.data}/>
          </div>
          <div className="col-md-6">
            <h1><WeatherDetail data={this.props.data}/></h1>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherOutput;

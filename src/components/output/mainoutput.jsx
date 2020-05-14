import React, { Component } from "react";
import CityNotFound from "./cityNotFound";
import WeatherOutput from "./weatheroutput";
import ForcastOutput from "./forcastoutput";
class MainOutput extends Component {
  state = {};
  render() {
    if (this.props.data.code === 404) {
      return (
        <div className="lightbackground">
          <CityNotFound />
        </div>
      );
    } else if (this.props.data.code === 200) {
      return (
        <div>
          <div className="lightbackground">
            <WeatherOutput data={this.props.data} />
          </div>
          <div className="lightbackground my-5">
            <div className="row">
            <div className="col-12 my-5 text-center"><h2><b>Forcast</b></h2></div>
            </div>
            <ForcastOutput data={this.props.data} formattime={this.props.formattime}/>
          </div>
        </div>
      );
    } else {
      return <React.Fragment></React.Fragment>;
    }
  }
}

export default MainOutput;

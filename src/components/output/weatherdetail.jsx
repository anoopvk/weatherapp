import React, { Component } from "react";
import WeatherDetailTile from "./weatherdetailtile";
class WeatherDetail extends Component {
  state = {};
  render() {
    return (
      <div className="m-3 ">
        <div className="row text-center backgroundlightcard">
          <WeatherDetailTile
            value={this.props.data.humidity}
            unit="%"
            title="Rain"
          />
          <WeatherDetailTile
            value={this.props.data.pressure}
            unit="hpa"
            title="pressure"
          />
          <WeatherDetailTile
            value={this.props.data.wind.speed}
            unit="m/s"
            title="wind"
          />
        </div>
      </div>
    );
  }
}

export default WeatherDetail;

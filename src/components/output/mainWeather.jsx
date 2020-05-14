import React, { Component } from "react";
class MainWeather extends Component {
  state = {};
  render() {
    return (
        <div className="row mt-4">
          <div className="col-4">
            <img src={this.setweathericonsrc()} alt="weather icon" />
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col">
                <h2 className="display-4"><b>{this.getTemp(this.props.data.temperature)}° </b></h2>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h3>{this.props.data.weatherDescription}</h3>
              </div>
            </div>
          </div>
        </div>
    );
  }
  getTemp = (temperature) => {
    let temp = Math.round(temperature);
    return temp;
  };
  setweathericonsrc = () => {
    let src =
      "http://openweathermap.org/img/wn/" + this.props.data.icon + "@2x.png";
    return src;
  };
}

export default MainWeather;

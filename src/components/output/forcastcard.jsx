import React, { Component } from "react";
class ForcastCard extends Component {
  state = {};
  render() {
    return (
      <div className="col-md-4">
        <div className="card m-2 p-3">
            <div className="text-center">
                <div>
                {this.props.formattime(this.props.data.dt)}
                </div>
                <div>
                    <img src={this.setweathericonsrc()} alt=""/>
                </div>
                <div>
                {this.props.data.weather[0].description}
                </div>
                <div>
                Temp : {this.getTemp(this.props.data.main.temp)}°
                </div>
                <div>
                Feels Like : {this.getTemp(this.props.data.main.feels_like)}°
                </div>
                <div>
                Rain : {this.props.data.main.humidity} %
                </div>
                <div>
                Pressure : {this.props.data.main.pressure} hpa
                </div>
                <div>
                Wind : {this.props.data.wind.speed} m/s
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
      "http://openweathermap.org/img/wn/" + this.props.data.weather[0].icon + "@2x.png";
    return src;
  };
}

export default ForcastCard;

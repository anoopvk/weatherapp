import React, { Component } from "react";
class WeatherDetailTile extends Component {
  state = {};
  render() {
    return (
      <div className="col-sm-4 padzero">
        <div className="m-4">
          <div className="row">
            <div className="col padzero colheight">
              <span className="detailtitle">
                {this.props.value}
              </span>
              <span className="detailsubtitlesm">
               {this.props.unit}
                </span>
            </div>
          </div>
          <div className="row">
            <div className="col padzero colheight detailsubtitle">
             {this.props.title}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherDetailTile;

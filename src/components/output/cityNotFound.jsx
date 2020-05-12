import React, { Component } from "react";
class CityNOtFound extends Component {
  state = {};
  render() {
    return (
      <div className="text-center">
        <h1>Error : 404 </h1>
        <h2>Sorry, the specified city was not found... </h2>

      </div>
    );
  }
}

export default CityNOtFound;

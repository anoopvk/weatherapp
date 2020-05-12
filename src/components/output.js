import React, { Component } from 'react';
import {formattime} from "./formattime"
class Output extends Component {
    state = {}
    render() {
        let {name , sys, dt,weather,main}=this.props.data;
        return (
        <div>
            <h1>hello from output</h1>
            {name},
            {sys.country}
            <br/>
            {formattime(dt)}
            <br/>
            {weather[0].description}
            <br/>
            <img src={this.setweathericonsrc()} alt="weather icon"/>
            <br/>
            temp:{main.temp}<br/>
            feels_like:{main.feels_like}<br/>
            humidity:{main.humidity}<br/>
            pressure:{main.pressure}<br/>
        </div>
        );
    }
    setweathericonsrc=()=>{
        let src="http://openweathermap.org/img/wn/"+this.props.data.weather[0].icon+"@2x.png";
        return src;
    }
}

export default Output;
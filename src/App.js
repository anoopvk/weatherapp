import React, { Component } from 'react';
import InputForm from "./components/inputForm"
import { getdatafromapi } from './fetchdata/fetchdataweather'
import { formattime } from "./components/formattime"
// import Output from "./components/output"
import MainOutput from "./components/output/mainoutput"
import defaultBackground from "./bg3.jpg"
class App extends Component {
  state = {
    temperature: undefined,
    humidity: undefined,
    wind: undefined,
    pressure: undefined,
    weatherDescription: undefined,
    weather: undefined,
    icon: undefined,
    date: undefined,
    name: undefined,
    country: undefined,
    feelslike: undefined,
    code: undefined


  }
  render() {
    return (
      <div className="background" style={this.setbackground()}>
        <div className="container ">

          <InputForm code={this.state.code} getdata={this.getdata} />
          <div className="lightbackground">
            <MainOutput data={this.state} />
          </div>
        </div>
      </div>
    );
  }


  setbackground = () => {
    if (this.state.code === 200) {
      let keywords = this.state.weather;
      keywords = keywords.split(" ");
      // console.log(this.state.icon[2]);
      let daynight="";
      if(this.state.icon[2]==="n"){
        daynight=",nighttime"
      }else{
        daynight=",daytime"
      }
      let url = "https://source.unsplash.com/1600x900/?" + keywords+",sky"+daynight;
      // console.log(url);
      const sty = {
        backgroundImage: "url(" + url + ")",
        backgroundPosition:"top"
      }
      return sty;
    }
    const sty = {
      backgroundImage: "url("+defaultBackground+")",
      // backgroundImage: "url(http://source.unsplash.com/MpdrMpLLZIk)",

      // hgGplX3PFBg
      // 4tlxn-a_CeI
      // MpdrMpLLZIk
    };
    return sty;
  }



  getdata = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;
    // let state = e.target.elements.state.value;
    // state = state === "" ? "" : "," + state;
    // let country = e.target.elements.country.value;
    // country = country === "" ? "" : "," + country;
    // let userInput = city + state + country
    // console.log(userInput);
    // let res = await getdatafromapi(userInput);
    let res = await getdatafromapi(city);

    console.log(res);
    if (res.status === 404) {
      // console.log("specified city was not found");
      this.setState({ code: res.status })

    } else if (res.status === 200) {
      // console.log("specified city was found " + res.status);
      // console.log(res.data);
      let data = res.data;
      let formatedTime = formattime(data.dt, data.timezone)
      this.setState({
        temperature: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind,
        pressure: data.main.pressure,
        weatherDescription: data.weather[0].description,
        weather: data.weather[0].main,
        icon: data.weather[0].icon,
        date: formatedTime,
        name: data.name,
        country: data.sys.country,
        feelslike: data.main.feels_like,
        code: data.cod,
      });

    }
    // if(res.data.cod)
  }



}

export default App;

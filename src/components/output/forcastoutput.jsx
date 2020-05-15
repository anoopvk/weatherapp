import React, { Component } from "react";
import ForcastCard from "./forcastcard";
class ForcastOutput extends Component {
  state = { dayselection: 0 };
  render() {
    // return <div className="row m-3">{this.getforcastcard()}</div>;
    return (
      <React.Fragment>
        <div className="row p-3">
          <div className="col text-right">
            <button onClick={this.decrementdayselection} className="btn btn-dark borderthickbtn">🢀 Prev</button>
          </div>
          <div className="col text-left">
            <button onClick={this.incrementdayselection} className="btn btn-dark border borderthickbtn">Next 🢂</button>
          </div>
        </div>
        <div className="row p-3 d-flex justify-content-center">{this.getforcastcard()}</div>
      </React.Fragment>
    );
  }
  incrementdayselection=()=>{
    let daysavailable=this.totalnumberofdaysavailable();
    let currentdayselection=this.state.dayselection;
    currentdayselection=(currentdayselection+1)%daysavailable;
    this.setState({ dayselection: currentdayselection });
    console.log(currentdayselection);

  }

  decrementdayselection=()=>{
    let daysavailable=this.totalnumberofdaysavailable();
    let currentdayselection=this.state.dayselection;
    currentdayselection=(((currentdayselection-1)%daysavailable)+daysavailable)%daysavailable;
    this.setState({ dayselection: currentdayselection });
    console.log(currentdayselection);
  }

  totalnumberofdaysavailable=()=>{

   let forcastdata= this.props.data.forcastdata;
   let totalnumberofdaysavailable=0;
   let days=[];
    forcastdata.forEach((element) => {
      if (!days.includes(this.getdayfromunix(element.dt))){
        days.push(this.getdayfromunix(element.dt));
        totalnumberofdaysavailable++;
  }
    });
    return totalnumberofdaysavailable;
  }

  getdayfromunix = (dt) => {
    let a = new Date(dt * 1000);
    let date = a.getDate();
    return date;
    // this.setState({dayselection:date})
  };
  getforcastcard = () => {
    let forcastdata = this.props.data.forcastdata;
    let today = 100000;

    forcastdata.forEach((element) => {
      if (this.getdayfromunix(forcastdata[0].dt) < today)
        today = this.getdayfromunix(forcastdata[0].dt);
    });

    let tag = forcastdata.map((ele, key) => {
      if (this.getdayfromunix(ele.dt) === today + this.state.dayselection) {
        return (
          <ForcastCard
            key={key}
            data={ele}
            formattime={this.props.formattime}
          />
        );
      } else {
        return "";
      }
    });
    // console.log(tag);
    return tag;
  };
}

export default ForcastOutput;

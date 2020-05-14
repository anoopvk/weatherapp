import React, { Component } from "react";
import ForcastCard from "./forcastcard"
class ForcastOutput extends Component {
  state = {};
  render() {
    return (
      <div className="row">
       {this.getforcastcard()}
      </div>
    );
  }
  getforcastcard=()=>{
      let forcastdata= this.props.data.forcastdata;
    //   let length=forcastdata.length;
    //   let tags="";
    //   forcastdata.forEach(element => {
    //      tags += <ForcastCard data={element}/>;
    //   });
      let tag = forcastdata.map((ele,key)=>{
          return (<ForcastCard key={key} data={ele} formattime={this.props.formattime}/>)
      })
      console.log(tag);
      return tag;
  }
}

export default ForcastOutput;

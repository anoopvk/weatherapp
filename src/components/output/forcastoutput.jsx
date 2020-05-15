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
            <button
              onClick={this.decrementdayselection}
              className="btn btn-dark borderthickbtn "
            >
              <span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="long-arrow-alt-left"
                  className="svg-inline--fa fa-long-arrow-alt-left fa-w-14 buttonarrow"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
          <div className="col text-left">
            <button
              onClick={this.incrementdayselection}
              className="btn btn-dark border borderthickbtn "
            >
              <span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="long-arrow-alt-right"
                  className="svg-inline--fa fa-long-arrow-alt-right fa-w-14 buttonarrow"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="row p-3 d-flex justify-content-center">
          {this.getforcastcard()}
        </div>
      </React.Fragment>
    );
  }
  incrementdayselection = () => {
    let daysavailable = this.totalnumberofdaysavailable();
    let currentdayselection = this.state.dayselection;
    currentdayselection = (currentdayselection + 1) % daysavailable;
    this.setState({ dayselection: currentdayselection });
    console.log(currentdayselection);
  };

  decrementdayselection = () => {
    let daysavailable = this.totalnumberofdaysavailable();
    let currentdayselection = this.state.dayselection;
    currentdayselection =
      (((currentdayselection - 1) % daysavailable) + daysavailable) %
      daysavailable;
    this.setState({ dayselection: currentdayselection });
    console.log(currentdayselection);
  };

  totalnumberofdaysavailable = () => {
    let forcastdata = this.props.data.forcastdata;
    let totalnumberofdaysavailable = 0;
    let days = [];
    forcastdata.forEach((element) => {
      if (!days.includes(this.getdayfromunix(element.dt))) {
        days.push(this.getdayfromunix(element.dt));
        totalnumberofdaysavailable++;
      }
    });
    return totalnumberofdaysavailable;
  };

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

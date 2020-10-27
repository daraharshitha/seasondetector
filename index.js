import React from "react";
import ReactDom from "react-dom";
import { findAllByLabelText } from "@testing-library/react";
import SeasonDisplay from "./seasondisplay";
import Spinner from "./spinner";
import Timmer from "./timmer";
class App extends React.Component {
  constructor() {
    super(); //state is a pre-defined component which is given to us by React component
    this.state = { lat: null, message: null, time: null };
    //it will set the current location of the user.nd it will return the position
    //to update the value of ghe state we have to use a method this.setState()
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      //this will help us to print the ip address when the user allows to access the location
      (err) => this.setState({ message: err.message })
      //this will help us to print the error message when the user denay to access the location
      //(position) => console.log(position), //it runs when we allow to access the loction
      //(err) => console.log(err) //this works when we did not allow to access location
    ); //this portion will actually gives us the alert box of permission i.e, permission to access the location
  }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ message: err.message })
    );
    // console.log("Hi, ComponentDidMount fired");
  }
  componentDidUpdate() {
    console.log("Hi, ComponentDidUpdate fired");
  }
  render() {
    if (this.state.message && !this.state.lat) {
      return <div>Error: {this.state.message}</div>;
    }
    if (!this.state.message && this.state.lat) {
      // return <div>Latitude: {this.state.lat} </div>;
      return <SeasonDisplay lat={this.state.lat} />;
    }
    //return <Spinner />; //if no action is done by user then it shows this msg
    return <Timmer />;
    /* return (
      <div>
        Latitude:{this.state.lat} <br></br>
        Error: {this.state.message}
      </div>
   );*/
  }
}
ReactDom.render(<App />, document.querySelector("#root"));

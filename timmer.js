import React from "react";
class Timmer extends React.Component {
  state = { time: "" };
  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }
  render() {
    return <div>the time is {this.state.time}</div>;
  }
}
export default Timmer;

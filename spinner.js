import React from "react";
const Spinner = () => {
  //ui active dimmer will help in decreasing the color of the screen
  //ui big test loader will give the loading symbol on the screen
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">Loading...</div>
    </div>
  );
};
export default Spinner;

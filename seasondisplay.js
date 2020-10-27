import React from "react";
import { findByTestId } from "@testing-library/react";
import "./seasondisplay.css"; //importing css file
const seasonConfig = {
  summer: {
    text: "lets hit the beach!",
    iconName: "sun",
  },
  Winter: {
    text: "Its cold!",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 11) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const SeasonDisplay = (props) => {
  console.log(props);
  const season = getSeason(props.lat, new Date().getMonth() + 1);
  //this line will take the daye and month from our device and it will estimate the season with the help of it
  //console.log(season);
  //return <div> Latitude = {props.lat}</div>;
  const { text, iconName } = seasonConfig[season];
  /*const text =
    season === "winter" ? "blur, it is chilly " : "lets hit the beach";
  const icon = season === "winter" ? "snowflake" : "sun";*/
  //massive gives the large icon
  //$ sign is used for concatination also
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1> {text}</h1>
      <i className={`icon-right massive${iconName} icon`} />
    </div>
  );
};
export default SeasonDisplay;

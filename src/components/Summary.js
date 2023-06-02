import React from "react";
import "./SummaryCss.css";
import { useNavigate, useLocation } from "react-router-dom";
const Summary = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const data = navigate.data;
  console.log(data);
  console.log("inSummary");

  const handleClick = () => {
    console.log(location.state.name);
    navigate("/form", {
      state: {
        name: `${location.state.name}`,
      },
    });
  };

  return (
    <div className="card1">
      <div className="card-info1">
        <img src={location.state.img} alt="img" className="image1" />
        <p className="title1">Name: {location.state.name}</p>

        <p className="title1">
          Summary: {location.state.summary.replace(/<\/?p>|<\/?b>/g, "")}
        </p>

        <button
          className="button1"
          onClick={() => {
            handleClick(location.state.name);
          }}
        >
          Tickets
        </button>
      </div>
    </div>
  );
};

export default Summary;

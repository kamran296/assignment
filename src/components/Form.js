import React from "react";

import { useNavigate, useLocation } from "react-router-dom";

import "./FormCss.css";
function Form() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("form", location);
  const data = navigate.data;
  console.log(data);
  console.log("Form");
  const handleSubmit = () => {
    alert("Tickets booked!!");
  };
  return (
    <div className="form1">
      <h1 className="head1">Book Your Tickets Now!!</h1>
      <form className="bg-light">
        <div className="mb-3 ">
          <h5 className="Title">Movie: {location.state.name}</h5>
          <label html="exampleInputEmail1" className="form-label ">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlfor="exampleInputPassword1" className="form-label">
            Number of tickets
          </label>
          <input
            type="Number"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlfor="exampleCheck1">
            Confirm
          </label>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;

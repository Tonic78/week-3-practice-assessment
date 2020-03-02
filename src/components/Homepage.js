import React from "react";
import { Link } from "react-router-dom";
import OpenClose from "./OpenClose";

export default function Homepage() {
  return (
    <div>
      <h1>Welcome to AMS GPs</h1>
      <OpenClose />
      <p>
        <Link to="/doctorschedule">
          <button>Who is on duty?</button>
        </Link>
      </p>
      <br></br>
      <p>
        <Link to="/patientsignup">
          <button>I am a new patient</button>
        </Link>
      </p>
    </div>
  );
}

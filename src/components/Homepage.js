import React from "react";
import { Link } from "react-router-dom";
import OpenClose from "./OpenClose";
import { Button } from "react-bootstrap";

export default function Homepage() {
  return (
    <div>
      <h1>Welcome to AMS GPs</h1>
      <OpenClose />
      <p>
        <Link to="/doctorschedule">
          <Button variant="success">Who is on duty?</Button>
        </Link>
      </p>
      <br></br>
      <p>
        <Link to="/patientsignup">
          <Button variant="success">I am a new patient</Button>
        </Link>
      </p>
    </div>
  );
}

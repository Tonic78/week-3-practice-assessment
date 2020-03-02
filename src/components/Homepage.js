import React from "react";
import { Link } from "react-router-dom";
import OpenClose from "./OpenClose";

export default function Homepage() {
  return (
    <div>
      <h1>Welcome to AMS GPs</h1>
      <p>
        we are
        <OpenClose />
      </p>
      <p>To make an appointment</p>
      <p>call 020 555 5555</p>
      <p>
        <button>
          <Link to="/doctorschedule"> Who is on duty?</Link>
        </button>
      </p>
      <br></br>
      <p>
        <button>
          <Link to="/patientsignup"> I am a new patient</Link>
        </button>
      </p>
    </div>
  );
}

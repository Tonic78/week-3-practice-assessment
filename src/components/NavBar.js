import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export default function NavBar() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <NavLink to="/" activeStyle={{ fontWeight: "bold " }}>
          Homepage
        </NavLink>{" "}
        <NavLink to="/doctorschedule" activeStyle={{ fontWeight: "bold " }}>
          Doctor Schedule
        </NavLink>{" "}
        <NavLink to="/patientsignup" activeStyle={{ fontWeight: "bold " }}>
          Patient Signup
        </NavLink>{" "}
        <NavLink to="/patientdatabase" activeStyle={{ fontWeight: "bold " }}>
          Patient Database
        </NavLink>
      </Navbar>
    </div>
  );
}

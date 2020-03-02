import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
import DoctorSchedule from "./components/DoctorSchedule";
import PatientSignup from "./components/PatientSignup";
import PatientDatabase from "./components/PatientDatabase";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/doctorschedule" component={DoctorSchedule} />
        <Route path="/patientsignup" component={PatientSignup} />
        <Route path="/patientdatabase" component={PatientDatabase} />
      </Switch>
    </div>
  );
}

export default App;

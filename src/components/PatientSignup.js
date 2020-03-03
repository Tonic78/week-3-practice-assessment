import React, { useState } from "react";

export default function PatientSignup() {
  const [firstname, set_Firstname] = useState("");
  const [lastname, set_Lastname] = useState("");
  const [email, set_Email] = useState("");
  const [phone, set_Phone] = useState("");
  const [gender, set_Gender] = useState("");
  const [dateofbirth, set_Dateofbirth] = useState("");
  const [addpatient, set_AddPatient] = useState("");

  const submitPatient = event => {
    event.preventDefault();
    console.log(
      "WHAT IS SUBMITTED:",
      firstname,
      lastname,
      email,
      phone,
      gender,
      dateofbirth
    );
    set_Firstname("");
    set_Lastname("");
    set_Email("");
    set_Phone("");
    set_Gender("");
    set_Dateofbirth("");
    set_AddPatient("new patient added");
  };

  return (
    <div>
      <h1>Patient signup</h1>
      <form onSubmit={submitPatient}>
        <p>
          <label>first name </label>
          <input
            value={firstname}
            onChange={event => {
              set_Firstname(event.target.value);
              // console.log("new input .value:", event.target.value);
            }}
            type="text"
            placeholder="first name"
          />
        </p>
        <p>
          <label>last name </label>
          <input
            value={lastname}
            onChange={event => {
              set_Lastname(event.target.value);
              // console.log("new input .value:", event.target.value);
            }}
            type="text"
            placeholder="last name"
          />
        </p>
        <p>
          <label>email </label>
          <input
            value={email}
            onChange={event => {
              set_Email(event.target.value);
              // console.log("new input .value:", event.target.value);
            }}
            type="text"
            placeholder="email"
          />
        </p>
        <p>
          <label>phone </label>
          <input
            value={phone}
            onChange={event => {
              set_Phone(event.target.value);
              // console.log("new input .value:", event.target.value);
            }}
            type="text"
            placeholder="phone"
          />
        </p>
        <p>
          <label>gender </label>
          <select
            value={gender}
            onChange={event => {
              set_Gender(event.target.value);
            }}
          >
            <option value=""></option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </p>
        <p>
          <label>date of birth </label>
          <input
            value={dateofbirth}
            onChange={event => {
              set_Dateofbirth(event.target.value);
              // console.log("new input .value:", event.target.value);
            }}
            type="date"
          />
        </p>
        <input type="submit" />
      </form>

      <p>{addpatient}</p>
    </div>
  );
}

import React, { useState } from "react";

export default function Patient(props) {
  // console.log("WHAT ARE THE PROPS:", props);

  const [details, set_Details] = useState(false);

  function detail() {
    set_Details(!details);
  }

  return (
    <div>
      <p>
        Patients name: {props.lastname}, {props.firstname}
      </p>
      <p>Patients id: {props.id}</p>
      <p>Patients date of birth: {props.dateofbirth}</p>
      <p>{details && `Patients email: ${props.email}`}</p>
      <p>{details && `Patients phonenumber: ${props.phonenumber}`}</p>
      <p>{details && `Patients gender: ${props.gender}`}</p>
      <p>{details && `Patients prescriptions: ${props.prescriptions}`}</p>
      <button onClick={detail}>show details</button>
    </div>
  );
}

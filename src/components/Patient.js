import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

export default function Patient(props) {
  // console.log("WHAT ARE THE PROPS:", props);

  const [details, set_Details] = useState(false);

  function detail() {
    set_Details(!details);
  }

  return (
    <Card>
      <div>
        <Card.Header as="h4">
          Patients name: {props.lastname}, {props.firstname}
        </Card.Header>
        <Card.Body>
          <p>Patients id: {props.id}</p>
          <p>Patients date of birth: {props.dateofbirth}</p>
          <p>{details && `Patients email: ${props.email}`}</p>
          <p>{details && `Patients phonenumber: ${props.phonenumber}`}</p>
          <p>{details && `Patients gender: ${props.gender}`}</p>
          <p>{details && `Patients prescriptions: ${props.prescriptions}`}</p>
          <Button variant="outline-success" onClick={detail}>
            show details
          </Button>
        </Card.Body>
      </div>
    </Card>
  );
}

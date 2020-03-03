import React, { useState, useEffect } from "react";
import axios from "axios";
import Patient from "./Patient";

export default function PatientDatabase() {
  const [patientInfo, set_patientInfo] = useState([]);
  // console.log("WHAT IS THE STATE:", patientInfo);
  const [doctor, set_Doctor] = useState([]);
  const [selectedDocterId, set_selectedDocterId] = useState("all patients");

  console.log("WHAT IS SELECTED DOCTOR ID:", selectedDocterId);

  // patients are sorted by their `lastName`
  function compare_name(patientInfo_a, patientInfo_b) {
    return patientInfo_a.lastName.localeCompare(patientInfo_b.lastName);
  }

  const patients_sorted = [...patientInfo].sort(compare_name);
  // console.log("WHAT IS PATIENTS SORTED:", patients_sorted);

  const patients = async () => {
    const response = await axios.get(
      "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients"
    );
    // console.log("WHAT IS MY SEARCH RESULT:", response.data);
    set_patientInfo(response.data);
  };

  useEffect(() => {
    patients();
  }, []);

  const getDoctors = async () => {
    const response = await axios.get(
      "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
    );
    // console.log("WHAT IS DOCTORS:", response.data);
    set_Doctor(response.data);
  };

  useEffect(() => {
    getDoctors();
  }, []);

  //checks for dr id value
  function doctorWasChanged(event) {
    console.log(event.target.value);
    set_selectedDocterId(event.target.value);
  }

  const filteredPatients = patientInfo.filter(patient => {
    if (selectedDocterId === "all patients") {
      return patient;
    } else {
      return patient.doctorId == selectedDocterId;
    }
  });

  return (
    <div>
      <h1>Patient Database</h1>
      <label>Doctor:</label>
      <select onChange={doctorWasChanged}>
        <option value="all patients">All patients </option>
        {doctor.map(doc => {
          return (
            <option value={doc.id} key={doc.id}>
              {doc.doctor}
            </option>
          );
        })}
      </select>
      {filteredPatients.map(patient => {
        return (
          <Patient
            key={patient.id}
            id={patient.id}
            firstname={patient.firstName}
            lastname={patient.lastName}
            dateofbirth={patient.dateOfBirth}
            email={patient.email}
            phonenumber={patient.phoneNumber}
            gender={patient.gender}
            prescriptions={patient.prescriptions}
          />
        );
      })}
    </div>
  );
}

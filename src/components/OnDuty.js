import React, { useState, useEffect } from "react";
import axios from "axios";

export default function OnDuty() {
  const [searchStatus, set_searchStatus] = useState("Idle");
  const [doctorInfo, set_DoctorInfo] = useState([]);

  const duty = async () => {
    set_searchStatus("loading");

    const response = await axios.get(
      "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
    );
    // console.log("WHAT IS MY SEARCH RESULT:", response.data);
    set_DoctorInfo(response.data);
    set_searchStatus("done loading");
  };

  useEffect(() => {
    duty();
  }, []);

  console.log("WHAT IS DOCTORINFO", doctorInfo);

  const schedule = doctorInfo.map(doctor => {
    return (
      <div key={doctor.id}>
        {doctor.doctor} {doctor.onDuty === true ? "on duty" : "off duty"}
      </div>
    );
  });

  return (
    <div>
      <p>{searchStatus}</p>
      {schedule}
    </div>
  );
}

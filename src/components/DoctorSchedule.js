import React from "react";
import OpenClose from "./OpenClose";
import OnDuty from "./OnDuty";

export default function DoctorSchedule() {
  return (
    <div>
      <h1>Who's on duty?</h1>
      <OnDuty />
      <OpenClose />
    </div>
  );
}

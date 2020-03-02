import React from "react";

export default function OpenClose() {
  let today = new Date();
  let time = today.getHours();

  const open = time > 8 && time < 17 ? "open" : "close";

  return (
    <div>
      <p>
        we are: <b>{open}</b>
      </p>
      <p> To make an appointment</p>
      <p>call 020 555 5555</p>
    </div>
  );
}

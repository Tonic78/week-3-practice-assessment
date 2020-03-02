import React from "react";

export default function OpenClose() {
  let today = new Date();
  let time = today.getHours();

  const open = time > 8 && time < 17 ? "open" : "close";

  return <h3>{open}</h3>;
}

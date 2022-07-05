import React from "react";

const Demo = ({ show }) => {
  console.log("INSIDE Demo");
  return <p>{show ? "This is new!" : ""}</p>;
};

export default React.memo(Demo);

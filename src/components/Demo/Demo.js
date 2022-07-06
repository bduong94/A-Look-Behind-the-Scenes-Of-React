import React from "react";

const Demo = ({ show }) => {
  return <p>{show ? "This is new!" : ""}</p>;
};

export default React.memo(Demo);

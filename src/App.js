import React, { useState, useCallback } from "react";

import Demo from "./components/Demo/Demo";
import Button from "./components/UI/Button/Button";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("APP RUNNING!");

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Show Paragraph!</Button>
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
    </div>
  );
}

export default App;

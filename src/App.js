import React, { useState } from "react"
import './App.css';
import MinutesToHours from "./components/MinutesToHours";
import KmToMiles from "./components/KmToMiles";

function App() {
  const [index, setIndex]=useState("xx");
  const onSelect = (e)=>{
    setIndex(e.target.value);
  }
  return(
  <div>
  <h1>Super Converter</h1>
 
  <select value={index} onChange={onSelect}>
    <option value="xx">Select your unit!</option>
    <option value="0">Minetes & Hours</option>
    <option value="1">Km & Miles</option>
  </select>
  {index === "0" ? <MinutesToHours/> : null};
  {index === "1" ? <KmToMiles/> : null}
  </div>
  );

}

export default App;

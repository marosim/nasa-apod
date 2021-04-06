import React, { useState, useEffect } from "react";
import NasaApi from "./NasaApi.jsx";
import "./App.css";

function App() {

  const [nasa, setNasa] = useState([]);
  const [inputDate, setInputDate] = useState(
    "https://api.nasa.gov/planetary/apod?api_key=n90lOqMPXcN0ndMYCb1XEgJqVZP3AhfcOqmVoI7W"
  );

  useEffect(() => {
    fetch(inputDate)
      .then((response) => response.json())
      .then((result) => {
        setNasa(result);
      });
  }, [inputDate]);

  const datePicker = (e) => {
    setInputDate(
      `https://api.nasa.gov/planetary/apod?api_key=n90lOqMPXcN0ndMYCb1XEgJqVZP3AhfcOqmVoI7W&date=${e.target.value}`
    );
  };
  // console.log(nasa);

  return (
    <div className="appContainer">
      <NasaApi
        title={nasa.title}
        image={nasa.url}
        date={nasa.date}
        description={nasa.explanation}
      />
      <input type="date" min="1995-06-16" onInput={datePicker}></input>
    </div>
  );
}

export default App;

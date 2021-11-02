import "./App.css";
import { useState, useEffect } from "react";

import ShowStudents from "./components/ShowStudents";

function App() {
  const [students, setStudents] = useState([]);
  console.log(students);
  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setStudents(response));
  }, []);

  return <div className="App"></div>;
}

export default App;

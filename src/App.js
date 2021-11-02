import "./reset.css";
import "./App.css";
import { useState, useEffect } from "react";

import ShowStudents from "./components/ShowStudents";

function App() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) =>
        setStudents(response.filter((wizard) => wizard.image !== ""))
      );
  }, []);

  return (
    students.length > 0 && (
      <div className="App">
        <ShowStudents students={students} />
      </div>
    )
  );
}

export default App;

import "./styles.css";
import { useState } from "react";
import Student from "../Student";

function ShowStudents({ students }) {
  const quantityGryffindor = students.reduce(
    (acc, element) => (element.house === "Gryffindor" ? ++acc : acc),
    0
  );
  const quantitySlytherin = students.reduce(
    (acc, element) => (element.house === "Slytherin" ? ++acc : acc),
    0
  );
  const quantityHufflepuff = students.reduce(
    (acc, element) => (element.house === "Hufflepuff" ? ++acc : acc),
    0
  );
  const quantityRavenclaw = students.reduce(
    (acc, element) => (element.house === "Ravenclaw" ? ++acc : acc),
    0
  );

  const [studentGryffindor, setStudentGryffindor] = useState(
    students.filter((wizard) => wizard.house === "Gryffindor")[
      Math.floor(Math.random() * quantityGryffindor)
    ]
  );

  const [studentSlytherin, setStudentSlytherin] = useState(
    students.filter((wizard) => wizard.house === "Slytherin")[
      Math.floor(Math.random() * quantitySlytherin)
    ]
  );

  const [studentHufflepuff, setStudentHufflepuff] = useState(
    students.filter((wizard) => wizard.house === "Hufflepuff")[
      Math.floor(Math.random() * quantityHufflepuff)
    ]
  );
  const [studentRavenclaw, setStudentRavenclaw] = useState(
    students.filter((wizard) => wizard.house === "Ravenclaw")[
      Math.floor(Math.random() * quantityRavenclaw)
    ]
  );

  const listStudents = [
    studentGryffindor,
    studentSlytherin,
    studentHufflepuff,
    studentRavenclaw,
  ];

  const randomNumbers = (limit) => {
    let arrResult = [];
    for (let i = 0; i < limit; i++) {
      arrResult = [...arrResult, i];
    }

    return [
      arrResult.splice(Math.floor(Math.random() * arrResult.length), 1),
      arrResult.splice(Math.floor(Math.random() * arrResult.length), 1),
      arrResult.splice(Math.floor(Math.random() * arrResult.length), 1),
    ];
  };

  const positionsListStudents = randomNumbers(4);

  return (
    studentGryffindor &&
    studentSlytherin &&
    studentHufflepuff &&
    studentRavenclaw && (
      <div className="container-students">
        <Student student={listStudents[positionsListStudents[0]]} />
        <Student student={listStudents[positionsListStudents[1]]} />
        <Student student={listStudents[positionsListStudents[2]]} />
      </div>
    )
  );
}

export default ShowStudents;

import "./styles.css";
import { useState } from "react";
import Student from "../Student";

function ShowStudents({ students }) {
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

  const wizardWinner = () => {
    setWinner(!winner);
  };

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

  const [winner, setWinner] = useState(false);
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

  const optionStudents = [
    studentGryffindor,
    studentSlytherin,
    studentHufflepuff,
    studentRavenclaw,
  ];

  const positionsListStudents = randomNumbers(4);
  const studentsSelected = [
    optionStudents[positionsListStudents[0]],
    optionStudents[positionsListStudents[1]],
    optionStudents[positionsListStudents[2]],
  ];

  return (
    studentGryffindor &&
    studentSlytherin &&
    studentHufflepuff &&
    studentRavenclaw && (
      <div className="container">
        <div className="container__students">
          <Student student={studentsSelected[0]} />
          <Student student={studentsSelected[1]} />
          <Student student={studentsSelected[2]} />
        </div>

        <div className="container__bt">
          {winner ? (
            <>
              <p>
                {
                  studentsSelected[
                    Math.floor(Math.random() * studentsSelected.length)
                  ].name
                }
              </p>
              <button onClick={wizardWinner}>
                <i className="fas fa-redo"></i>
              </button>
            </>
          ) : (
            <button onClick={wizardWinner}>
              <i className="fas fa-trophy"></i>
            </button>
          )}
        </div>
      </div>
    )
  );
}

export default ShowStudents;

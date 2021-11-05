import "./styles.css";
import { useEffect, useState } from "react";
import Student from "../Student";

function ShowStudents({ students }) {
  const randomNumbers = (limit) => {
    let arrResult = [];
    for (let i = 0; i < limit; i++) {
      arrResult = [...arrResult, i];
    }

    return [
      parseInt(
        arrResult
          .splice(Math.floor(Math.random() * arrResult.length), 1)
          .join("")
      ),
      parseInt(
        arrResult
          .splice(Math.floor(Math.random() * arrResult.length), 1)
          .join("")
      ),
      parseInt(
        arrResult
          .splice(Math.floor(Math.random() * arrResult.length), 1)
          .join("")
      ),
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

  const [optionStudents, setOptionStudents] = useState([
    studentGryffindor,
    studentSlytherin,
    studentHufflepuff,
    studentRavenclaw,
  ]);

  const [positionsListStudents, setPositionsListStudents] = useState([
    ...randomNumbers(4),
  ]);

  const [studentsSelected, setStudentsSelected] = useState([]);

  //INICIALIZACAO E  MONTAGEM
  useEffect(() => {
    if (winner) {
      setStudentGryffindor(
        students.filter((wizard) => wizard.house === "Gryffindor")[
          Math.floor(Math.random() * quantityGryffindor)
        ]
      );

      setStudentSlytherin(
        students.filter((wizard) => wizard.house === "Slytherin")[
          Math.floor(Math.random() * quantitySlytherin)
        ]
      );

      setStudentHufflepuff(
        students.filter((wizard) => wizard.house === "Hufflepuff")[
          Math.floor(Math.random() * quantityHufflepuff)
        ]
      );

      setStudentRavenclaw(
        students.filter((wizard) => wizard.house === "Ravenclaw")[
          Math.floor(Math.random() * quantityRavenclaw)
        ]
      );

      setOptionStudents([
        studentGryffindor,
        studentSlytherin,
        studentHufflepuff,
        studentRavenclaw,
      ]);

      setPositionsListStudents([...randomNumbers(4)]);
    }
    setStudentsSelected([
      optionStudents[positionsListStudents[0]],
      optionStudents[positionsListStudents[1]],
      optionStudents[positionsListStudents[2]],
    ]);
  }, [winner]);

  return (
    studentsSelected.length === 3 && (
      <div className="container">
        <div className="container__students">
          <Student student={studentsSelected[0]} />
          <Student student={studentsSelected[1]} />
          <Student student={studentsSelected[2]} />
        </div>

        <div className="container__bt">
          {winner ? (
            <div className="wizard-win">
              <p className="wizard-win__title">
                <i class="fas fa-trophy"></i>
              </p>
              <div className="style-student">
                <Student
                  student={
                    studentsSelected[
                      Math.floor(Math.random() * studentsSelected.length)
                    ]
                  }
                />
              </div>
              <button onClick={wizardWinner}>
                <i class="fas fa-undo"></i>
              </button>
            </div>
          ) : (
            <button className="container__bt__iniciar" onClick={wizardWinner}>
              <i className="fas fa-trophy"></i>
            </button>
          )}
        </div>
      </div>
    )
  );
}

export default ShowStudents;

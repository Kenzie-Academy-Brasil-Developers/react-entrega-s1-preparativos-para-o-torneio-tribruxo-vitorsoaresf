import "./styles.css";

function Student({ student }) {
  return (
    student && (
      <div className="student-card">
        <p>{student.name}</p>
        <p>{student.house}</p>
        <img alt="wizard-img" src={student.image} />
      </div>
    )
  );
}

export default Student;

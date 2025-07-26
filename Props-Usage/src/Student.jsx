import PropTypes from 'prop-types';

function Student({ name = "Guest", age = 0, isStudent = false }) {
  return (
    <div className="stu">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}


Student.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool.isRequired,
}

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
}

export default Student;

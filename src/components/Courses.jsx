import { useState } from 'react';

const Courses = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100 bg-contain p-2 mt-4 rounded-xl" style={styles.Container}>
      <div className="Course" style={styles.Course} onClick={toggleDropdown}>
        <div className="Names" style={styles.Names}>
          <h1 className="CourseID" style={styles.CourseID}>
            CourseID
          </h1>
          <h1 className="CourseName" style={styles.CourseName}>
            CourseName
          </h1>
        </div>
        <h1 className="CourseCredit" style={styles.CourseCredit}>
          4 Credits
        </h1>
      </div>
      {isOpen && (
        <div className="CourseBlurb" style={styles.CourseBlurb}>
          <p>This is a brief description of the course. It provides an overview of what the course is about and what students can expect to learn.</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  Container: {
    maxHeight: '400px', // Adjust the height as needed
    overflowY: 'scroll',
  },
  Course: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '1em',
    justifyContent: 'space-between',
    cursor: 'pointer',
  },
  Names: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '.1em',
  },
  CourseID: {
    textAlign: 'left',
    fontSize: '1.3em',
  },
  CourseName: {
    textAlign: 'left',
    fontSize: '1.3em',
    paddingLeft: '1.5em',
  },
  CourseCredit: {
    width: '50%',
    textAlign: 'right',
    fontSize: '1.3em',
    marginRight: '1em',
  },
  CourseBlurb: {
    marginLeft: '1em',
    marginTop: '0.5em',
    fontSize: '1em',
    color: '#555',
  },
};

export default Courses;

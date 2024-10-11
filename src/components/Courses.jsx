import { useState } from 'react';

const Courses = ({ courses }) => {
  const [openCourses, setOpenCourses] = useState(
    Array(courses.length).fill(false),
  );

  const toggleDropdown = (index) => {
    setOpenCourses((prev) => {
      const newOpenCourses = [...prev];
      newOpenCourses[index] = !newOpenCourses[index];
      return newOpenCourses;
    });
  };

  return (
    <div
      className="bg-gray-100 bg-contain p-2 mt-4 rounded-xl"
      style={styles.Container}
    >
      {courses.map((course, index) => (
        <div key={course.id}>
          <div
            className="Course"
            style={styles.Course}
            onClick={() => toggleDropdown(index)}
          >
            <div className="Names" style={styles.Names}>
              <h1 className="CourseID" style={styles.CourseID}>
                {course.id}
              </h1>
              <h1 className="CourseName" style={styles.CourseName}>
                {course.name}
              </h1>
            </div>
            <h1 className="CourseCredit" style={styles.CourseCredit}>
              {course.credits} Credits
            </h1>
          </div>
          {openCourses[index] && (
            <div className="CourseBlurb" style={styles.CourseBlurb}>
              <p>{course.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const styles = {
  Container: {
    maxHeight: '400px',
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

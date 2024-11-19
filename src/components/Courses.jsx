const Courses = ({ courses, openCourses, toggleDropdown }) => {
  const displayCredit = (minCredit, maxCredit) => {
    if (minCredit === maxCredit) {
      return `${minCredit} Credits`;
    }
    return `${minCredit} - ${maxCredit} Credits`;
  };

  return (
    <div
      className="bg-gray-100 bg-contain p-2 mt-2 rounded-xl max-h-full"
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
                {course.department}-{course.code}
              </h1>
              <h1 className="CourseName" style={styles.CourseName}>
                {course.title}
              </h1>
            </div>
            <h1 className="CourseCredit" style={styles.CourseCredit}>
              {displayCredit(course.creditMin, course.creditMax)}
            </h1>
          </div>
          {openCourses[index] && (
            <div className="CourseBlurb" style={styles.CourseBlurb}>
              <p>{course.description || 'No description'}</p>
              <div style={styles.bubbleContainer}>
                {course.semesterList.length > 0 ? (
                  <div style={styles.bubble}>
                    Offered: {course.semesterList.join(', ')}
                  </div>
                ) : (
                  <div style={styles.bubble}>No semesters offered</div>
                )}
              </div>
              <div style={styles.bubbleContainer}>
                {course.attributeList.length > 0 ? (
                  <div style={styles.bubble}>
                    Attributes: {course.attributeList.join(', ')}
                  </div>
                ) : (
                  <div style={styles.bubble}>No attributes</div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const styles = {
  Container: {
    maxHeight: '500px', // Increased max height for a larger view
    overflowY: 'scroll',
  },
  Course: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '1em',
    justifyContent: 'space-between',
    cursor: 'pointer',
    padding: '1em',
    backgroundColor: '#f8f8f8',
    borderRadius: '8px',
    marginBottom: '8px',
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
    marginLeft: '2em',
    marginRight: '2em',
    marginTop: '0.5em',
    marginBottom: '0.5em',
    fontSize: '1em',
    color: '#555',
    backgroundColor: '#e0e0e0', // Slightly darker background color
    borderRadius: '8px',
    padding: '1em',
  },
  bubbleContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5em',
    marginTop: '0.5em',
  },
  bubble: {
    backgroundColor: '#d0d0d0', // Slightly darker background color for bubbles
    borderRadius: '15px',
    padding: '0.5em 1em',
    fontSize: '0.9em',
    color: '#333',
  },
};

export default Courses;

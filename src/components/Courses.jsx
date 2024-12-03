import Course from './Course';

const Courses = ({ courses, addCourseToToolbox, semesters }) => {
  return (
    <div
      className="bg-gray-100 bg-contain p-2 mt-2 rounded-xl max-h-full"
      style={styles.Container}
    >
      {courses.map((course, index) => (
        <Course
          course={course}
          addCourseToToolbox={addCourseToToolbox}
          semesters={semesters}
        ></Course>
      ))}
    </div>
  );
};

const styles = {
  Container: {
    maxHeight: '500px', // Increased max height for a larger view
    overflowY: 'scroll',
  },
};

export default Courses;

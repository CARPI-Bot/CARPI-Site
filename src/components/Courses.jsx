import Course from './Course';

const Courses = ({ courses, openCourses }) => {
  return (
    <div
      className="bg-gray-100 bg-contain p-2 mt-2 rounded-xl max-h-full"
      style={styles.Container}
    >
      {courses.map((course, index) => (
        <Course course={course}></Course>
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

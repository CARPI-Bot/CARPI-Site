import React from 'react';
import Course from './Course';

interface CourseProps {
  courses: any[];
  addCourseToToolbox: (course: any) => void;
  addCourseToSemester: (course: any, semester: any) => void;
  semesters: any[];
}

const Courses: React.FC<CourseProps> = ({
  courses,
  addCourseToToolbox,
  addCourseToSemester,
  semesters,
}) => {
  return (
    <div
      className="bg-gray-100 bg-contain p-2 mt-2 rounded-xl max-h-full"
      style={styles.Container}
    >
      {courses.map((course, index) => (
        <Course
          key={index}
          course={course}
          addCourseToToolbox={addCourseToToolbox}
          addCourseToSemester={addCourseToSemester}
          semesters={semesters}
        />
      ))}
    </div>
  );
};

const styles: { Container: React.CSSProperties } = {
  Container: {
    maxHeight: '500px', // Increased max height for a larger view
    overflowY: 'scroll',
  },
};

export default Courses;

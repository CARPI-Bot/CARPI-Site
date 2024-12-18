import React from 'react';
import Course from './Course';

interface CourseType {
  id: number;
  name: string;
  department: string;
  code: string;
  title: string;
  creditMin: number;
  creditMax: number;
  description: string;
  semesterList: string[];
  attributeList: string[];
}

interface SemesterType {
  id: number;
  name: string;
  courses: CourseType[];
}

interface SemesterProps {
  semester: SemesterType;
  deleteSemester: (id: number) => void;
}

const Semester: React.FC<SemesterProps> = ({ semester, deleteSemester }) => {
  function addCourseToSemester(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div key={semester.id} className="bg-gray-100 p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <h2
          className="text-xl pb-2 ml-8 font-semibold cursor-pointer"
          //   onClick={() => openModal(semester)}
        >
          {semester.name}
        </h2>
        <button
          type="button"
          onClick={() => deleteSemester(semester.id)}
          className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
        >
          <span className="text-white text-xl">X</span>
        </button>
      </div>
      <div className="space-y-2 flex flex-col ">
        {semester.courses.map((course) => (
          <Course
            key={course.id}
            course={course}
            addCourseToSemester={addCourseToSemester}
          />
        ))}
      </div>
    </div>
  );
};

export default Semester;

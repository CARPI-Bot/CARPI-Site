import React, { useState } from 'react';
import Courses from '../components/Courses';

const Planner = () => {
  const [semesters, setSemesters] = useState([
    { id: 1, courses: ['Course 1', 'Course 2', 'Course 3', 'Course 4'] },
    { id: 2, courses: ['Course 1', 'Course 2', 'Course 3', 'Course 4'] },
  ]);

  const addSemester = () => {
    const newSemester = { id: semesters.length + 1, courses: [] };
    setSemesters([...semesters, newSemester]);
  };

  return (
    <div className="bg-red-100 bg-contain w-6/12 p-6 ml-8 rounded-xl min-h-[600px]">
      <h1 className="text-left text-2xl pb-6">Course Planner</h1>
      <div className="space-y-4 max-h-[500px] overflow-y-auto min-h-[500px]">
        {semesters.map((semester) => (
          <div key={semester.id} className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-xl pb-2 font-semibold">
              Semester {semester.id}
            </h2>
            <div className="space-y-2">
              {semester.courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-red-300 text-white text-left py-2 px-4 rounded-full"
                >
                  {course}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={addSemester}
        className="mt-2 bg-red-300 text-white py-2 px-4 rounded-full w-full"
      >
        + Add New Semester
      </button>
    </div>
  );
};

export default Planner;

import React, { useState } from 'react';
import Courses from '../components/Courses';

const Planner = () => {
  const [semesters, setSemesters] = useState([
    {
      id: 1,
      name: 'Semester 1',
      courses: ['Course 1', 'Course 2', 'Course 3', 'Course 4'],
    },
    {
      id: 2,
      name: 'Semester 2',
      courses: ['Course 1', 'Course 2', 'Course 3', 'Course 4'],
    },
    {
      id: 3,
      name: 'Semester 3',
      courses: ['Course 1', 'Course 2', 'Course 3', 'Course 4'],
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [newSemesterName, setNewSemesterName] = useState('');

  const addSemester = () => {
    const newSemester = {
      id: semesters.length + 1,
      name: `Semester ${semesters.length + 1}`,
      courses: [],
    };
    setSemesters([...semesters, newSemester]);
  };

  const openModal = (semester) => {
    setSelectedSemester(semester);
    setNewSemesterName(semester.name);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSemester(null);
    setNewSemesterName('');
  };

  const handleNameChange = () => {
    setSemesters(
      semesters.map((semester) =>
        semester.id === selectedSemester.id
          ? { ...semester, name: newSemesterName }
          : semester,
      ),
    );
    closeModal();
  };

  return (
    <div className="bg-red-100 bg-contain w-6/12 p-5 ml-8 rounded-xl min-h-[600px]">
      <h1 className="text-left text-2xl pb-4">Course Planner</h1>
      <div className="space-y-4 max-h-[500px] overflow-y-auto min-h-[500px]">
        {semesters.map((semester) => (
          <div key={semester.id} className="bg-gray-100 p-4 rounded-lg">
            <h2
              className="text-xl pb-2 ml-8 font-semibold cursor-pointer"
              onClick={() => openModal(semester)}
            >
              {semester.name}
            </h2>
            <div className="space-y-2 flex flex-col items-center">
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
        className="mt-6 bg-red-300 text-white py-2 px-4 rounded-full w-full"
      >
        + Add New Semester
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h2 className="text-lg font-semibold mb-4">Edit Semester Name</h2>
            <input
              type="text"
              value={newSemesterName}
              onChange={(e) => setNewSemesterName(e.target.value)}
              className="border border-gray-300 rounded w-full p-2 mb-4"
              placeholder="Enter new semester name"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="bg-gray-300 text-black px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleNameChange}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Planner;

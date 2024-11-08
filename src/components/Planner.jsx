import React, { useState } from 'react';

const Planner = ({ isToolboxExpanded }) => {
  const [semesters, setSemesters] = useState([
    {
      id: 1,
      name: 'Semester 1',
      courses: ['Course 1', 'Course 2', 'Course 3'],
    },
    {
      id: 2,
      name: 'Semester 2',
      courses: ['Course 1', 'Course 2', 'Course 3'],
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [newSemesterName, setNewSemesterName] = useState('');
  const [newCourse, setNewCourse] = useState('');

  const addSemester = () => {
    const newSemester = {
      id: semesters.length + 1,
      name: `Semester ${semesters.length + 1}`,
      courses: [], // Empty courses initially
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

  const addCourse = (semesterId) => {
    setSemesters(
      semesters.map((semester) =>
        semester.id === semesterId
          ? { ...semester, courses: [...semester.courses, newCourse] }
          : semester,
      ),
    );
    setNewCourse('');
  };

  const deleteSemester = (semesterId) => {
    setSemesters(semesters.filter((semester) => semester.id !== semesterId));
  };

  return (
    <div
      className="bg-red-100 w-6/12 p-5 ml-8 rounded-xl min-h-[10em]"
      style={{
        height: isToolboxExpanded ? '32em' : '36em', // Adjust height dynamically
        transition: 'height 0.3s ease', // Smooth transition effect
      }}
    >
      <h1 className="text-left text-2xl pb-2">Course Planner</h1>
      <div className="space-y-4 max-h-[350px] overflow-y-auto min-h-[100px]">
        {semesters.map((semester) => (
          <div key={semester.id} className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <h2
                className="text-xl pb-2 ml-8 font-semibold cursor-pointer"
                onClick={() => openModal(semester)}
              >
                {semester.name}
              </h2>
              <button
                onClick={() => deleteSemester(semester.id)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
            <div className="space-y-2 flex flex-col items-center">
              {semester.courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-red-300 text-white text-left py-2 px-4 rounded-full w-11/12"
                >
                  {course}
                </div>
              ))}
            </div>
            <div className="flex mt-2">
              <input
                type="text"
                value={newCourse}
                onChange={(e) => setNewCourse(e.target.value)}
                placeholder="New Course"
                className="border border-gray-300 rounded w-full p-2"
              />
              <button
                onClick={() => addCourse(semester.id)}
                className="bg-red-300 text-white px-4 py-2 rounded ml-2"
              >
                Add Course
              </button>
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

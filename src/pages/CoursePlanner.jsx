import React, { useState } from 'react';
import Logo from '../assets/transparent_carpi.png';
import Semester from '../components/Semester';

const Planner = ({ isToolboxExpanded }) => {
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
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [newSemesterName, setNewSemesterName] = useState('');

  const addSemester = () => {
    const newSemester = {
      id: semesters.length + 1,
      name: `Semester ${semesters.length + 1}`,
      courses: ['Course 1', 'Course 2', 'Course 3', 'Course 4'],
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

  const deleteSemester = (semesterId) => {
    setSemesters(semesters.filter((semester) => semester.id !== semesterId));
  };

  return (
    <div className="flex flex-col flex-grow p-4 ">
      <div
        className="bg-red-100 p-5 rounded-xl"
        style={{
          height: isToolboxExpanded ? '32em' : '36em',
          transition: 'height 0.3s ease',
        }}
      >
        <h1 className="text-left text-2xl pb-2">Course Planner</h1>
        {semesters.length === 0 ? (
          <button
            onClick={addSemester}
            className="bg-red-200 relative"
            style={{
              backgroundImage: 'url(../assets/images/Transparent_Carpi.svg)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              borderRadius: '1em',
              width: '100%',
              height: '93%',
            }}
          >
            <img
              src={Logo}
              alt="CARPI"
              className="w-1/2 md:w-1/3 lg:w-1/4 opacity-100 absolute"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            <h1
              style={{
                marginTop: '6em',
                alignContent: 'center',
                fontSize: '2em',
              }}
            >
              Add Your First Semester
            </h1>
          </button>
        ) : (
          <div>
            <div
              className="space-y-4 max-h-[350px] overflow-y-auto min-h-[100px]"
              style={{
                minHeight: isToolboxExpanded ? '9em' : '10em',
                maxHeight: isToolboxExpanded ? '24em' : '28em',
                transition: 'height 0.3s ease',
              }}
            >
              {semesters.map((semester) => (
                <Semester semester={semester}></Semester>
              ))}
            </div>
            <button
              onClick={addSemester}
              className="mt-4 bg-red-300 text-white py-2 px-4 rounded-full w-full"
              style={{
                marginTop: isToolboxExpanded ? '1em' : '1em',
                transition: 'height 0.3s ease',
              }}
            >
              + Add New Semester
            </button>
          </div>
        )}

        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg max-w-md w-full">
              <h2 className="text-lg font-semibold mb-4">Edit Semester Name</h2>
              <input
                type="text"
                value={newSemesterName}
                onChange={(e) => setNewSemesterName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && newSemesterName !== '') {
                    handleNameChange();
                  } else if (e.key === 'Escape') {
                    closeModal();
                  } else if (e.key === 'Enter' && newSemesterName === '') {
                    closeModal();
                  }
                }}
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
    </div>
  );
};

export default Planner;

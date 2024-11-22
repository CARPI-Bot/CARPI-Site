import React, { useState } from 'react';
import Logo from '../assets/transparent_carpi.png';
import DragCourse from './DragCourse';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Planner = ({ isToolboxExpanded }) => {
  const [semesters, setSemesters] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [newSemesterName, setNewSemesterName] = useState('');

  // Add a new semester
  const addSemester = () => {
    const newSemester = {
      id: semesters.length + 1,
      name: `Semester ${semesters.length + 1}`,
      courses: ['Course 1', 'Course 2', 'Course 3', 'Course 4'],
    };
    setSemesters([...semesters, newSemester]);
  };

  // Add a course to a semester
  const addCourse = (semesterId, courseName) => {
    setSemesters(
      semesters.map((semester) =>
        semester.id === semesterId
          ? { ...semester, courses: [...semester.courses, courseName] }
          : semester,
      ),
    );
  };

  // Handle adding a course with prompt input
  const handleAddCourse = (semesterId) => {
    const courseName = prompt('Enter course name:');
    if (courseName) addCourse(semesterId, courseName);
  };

  // Open the modal for editing a semester name
  const openModal = (semester) => {
    setSelectedSemester(semester);
    setNewSemesterName(semester.name);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSemester(null);
    setNewSemesterName('');
  };

  // Handle renaming a semester
  const handleNameChange = () => {
    if (!newSemesterName.trim()) {
      alert('Semester name cannot be empty');
      return;
    }
    if (
      semesters.some(
        (semester) =>
          semester.name.toLowerCase() === newSemesterName.toLowerCase() &&
          semester.id !== selectedSemester.id,
      )
    ) {
      alert('Semester name must be unique');
      return;
    }
    setSemesters(
      semesters.map((semester) =>
        semester.id === selectedSemester.id
          ? { ...semester, name: newSemesterName }
          : semester,
      ),
    );
    closeModal();
  };

  // Delete a semester
  const deleteSemester = (semesterId) => {
    setSemesters(semesters.filter((semester) => semester.id !== semesterId));
  };

  // Move a course between semesters or reorder within a semester
  const moveCourse = (draggedItem, target) => {
    const { semesterId: fromSemesterId, index: fromIndex } = draggedItem;
    const { semesterId: toSemesterId, index: toIndex } = target;

    setSemesters((prevSemesters) => {
      const updatedSemesters = [...prevSemesters];
      const fromSemester = updatedSemesters.find(
        (semester) => semester.id === fromSemesterId,
      );
      const toSemester = updatedSemesters.find(
        (semester) => semester.id === toSemesterId,
      );

      if (fromSemester && toSemester) {
        const [movedCourse] = fromSemester.courses.splice(fromIndex, 1);
        toSemester.courses.splice(toIndex, 0, movedCourse);
      }

      return updatedSemesters;
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        className={`bg-red-100 w-6/12 p-5 ml-8 rounded-xl ${
          isToolboxExpanded ? 'h-[35em]' : 'h-[40em]'
        } transition-all duration-300`}
      >
        <h1 className="text-left text-2xl mb-4">Course Planner</h1>

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
              loading="lazy"
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
            <div className="space-y-4 max-h-[350px] overflow-y-auto">
              {semesters.map((semester) => (
                <div key={semester.id} className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <h2
                      className="text-xl font-semibold cursor-pointer"
                      onClick={() => openModal(semester)}
                    >
                      {semester.name}
                    </h2>
                    <button
                      onClick={() => deleteSemester(semester.id)}
                      className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                    >
                      X
                    </button>
                  </div>
                  <div className="space-y-2">
                    {semester.courses.map((course, index) => (
                      <DragCourse
                        key={index}
                        course={course}
                        semesterId={semester.id}
                        index={index}
                        moveCourse={moveCourse}
                      />
                    ))}
                    <button
                      onClick={() => handleAddCourse(semester.id)}
                      className="bg-red-500 text-white py-2 px-4 rounded-full"
                    >
                      + Add Course
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={addSemester}
              className="mt-4 bg-red-300 text-white py-2 px-4 rounded-full w-full"
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
    </DndProvider>
  );
};

export default Planner;

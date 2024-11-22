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
      <div style={styles.plannerContainer}>
        <h1 style={styles.header}>Course Planner</h1>

        {semesters.length === 0 ? (
          <button onClick={addSemester} style={styles.addFirstSemesterButton}>
            <img src={Logo} alt="CARPI" style={styles.logo} />
            <h1 style={styles.addFirstSemesterText}>Add Your First Semester</h1>
          </button>
        ) : (
          <div>
            <div style={styles.semesterContainer}>
              {semesters.map((semester) => (
                <div key={semester.id} style={styles.semesterCard}>
                  <div style={styles.semesterHeader}>
                    <h2
                      style={styles.semesterTitle}
                      onClick={() => openModal(semester)}
                    >
                      {semester.name}
                    </h2>
                    <button
                      onClick={() => deleteSemester(semester.id)}
                      style={styles.deleteSemesterButton}
                    >
                      X
                    </button>
                  </div>
                  <div style={styles.courseContainer}>
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
                      style={styles.addCourseButton}
                    >
                      + Add Course
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={addSemester} style={styles.addSemesterButton}>
              + Add New Semester
            </button>
          </div>
        )}

        {isModalOpen && (
          <div style={styles.modalOverlay}>
            <div style={styles.modal}>
              <h2 style={styles.modalHeader}>Edit Semester Name</h2>
              <input
                type="text"
                value={newSemesterName}
                onChange={(e) => setNewSemesterName(e.target.value)}
                style={styles.input}
                placeholder="Enter new semester name"
              />
              <div style={styles.modalButtons}>
                <button onClick={closeModal} style={styles.cancelButton}>
                  Cancel
                </button>
                <button onClick={handleNameChange} style={styles.submitButton}>
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

// Styles Section
const styles = {
  plannerContainer: {
    backgroundColor: '#FEE2E2',
    width: '50%',
    padding: '1em',
    // marginLeft: '2em',
    borderRadius: '1em',
    height: '100%',
    transition: 'all 0.3s ease',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '1rem',
    textAlign: 'left',
  },
  addFirstSemesterButton: {
    position: 'relative',
    backgroundColor: '#FECACA',
    width: '100%',
    borderRadius: '1em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {
    width: '25%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '1em',
  },
  addFirstSemesterText: {
    marginTop: '6em',
    textAlign: 'center',
    fontSize: '2em',
  },
  semesterContainer: {
    maxHeight: '28em',
    overflowY: 'auto',
    gap: '1rem',
  },
  semesterCard: {
    backgroundColor: '#E5E7EB',
    padding: '1rem',
    borderRadius: '10px',
  },
  semesterHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  semesterTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    cursor: 'pointer',
  },
  deleteSemesterButton: {
    backgroundColor: '#F87171',
    color: 'white',
    borderRadius: '50%',
    width: '1.5rem',
    height: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  courseContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  addCourseButton: {
    backgroundColor: '#F87171',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
  },
  addSemesterButton: {
    marginTop: '1rem',
    backgroundColor: '#F87171',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    width: '100%',
  },
  modalOverlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '10px',
    maxWidth: '400px',
    width: '100%',
  },
  modalHeader: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  input: {
    border: '1px solid #D1D5DB',
    borderRadius: '5px',
    width: '100%',
    padding: '10px',
    marginBottom: '1rem',
  },
  modalButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '0.5rem',
  },
  cancelButton: {
    backgroundColor: '#D1D5DB',
    padding: '10px 20px',
    borderRadius: '5px',
  },
  submitButton: {
    backgroundColor: '#F87171',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
  },
};

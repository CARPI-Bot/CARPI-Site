import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Header from './components/Header';
import SearchCourse from './pages/SearchCourse';
import CoursePlanner from './pages/CoursePlanner';
import Toolbox from './pages/Toolbox';

import { useState } from 'react';

const App = () => {
  const [toolBoxCourses, setToolboxCourses] = useState([]);

  const [semesters, setSemesters] = useState([
    {
      id: 1,
      name: 'Semester 1',
      courses: [],
    },
  ]);

  const addSemester = () => {
    const newSemester = {
      id: semesters.length + 1,
      name: `Semester ${semesters.length + 1}`,
      courses: [],
    };
    setSemesters([...semesters, newSemester]);
  };

  const deleteSemester = (semesterId) => {
    setSemesters(semesters.filter((semester) => semester.id !== semesterId));
  };

  const addCourseToSemester = (newCourse, semesterName) => {
    setSemesters((prevSemesters) =>
      prevSemesters.map((sem) => {
        if (sem.name === semesterName) {
          return {
            ...sem,
            courses: [...sem.courses, newCourse], // Add newCourse to the courses array
          };
        }
        return sem; // Return the semester unchanged if it doesn't match
      }),
    );
  };

  const addCourseToToolbox = (newCourse) => {
    setToolboxCourses((prevCourses) => {
      const isDuplicate = prevCourses.some(
        (course) => JSON.stringify(course) === JSON.stringify(newCourse),
      );

      if (!isDuplicate) {
        return [...prevCourses, newCourse];
      }

      return prevCourses; // No changes if duplicate
    });
  };

  const removeCourseFromToolbox = (courseToRemove) => {
    setToolboxCourses((prevCourses) =>
      prevCourses.filter(
        (course) => JSON.stringify(course) !== JSON.stringify(courseToRemove),
      ),
    );
  };

  return (
    <Router>
      <div className="w-screen h-screen flex flex-col">
        <Header />
        <main className="flex flex-grow ">
          <Routes>
            {/* Redirect from / to /course-search */}
            <Route path="/" element={<Navigate to="/search-course" />} />
            <Route
              path="/search-course"
              element={
                <SearchCourse
                  addCourseToToolbox={addCourseToToolbox}
                  addCourseToSemester={addCourseToSemester}
                  semesters={semesters}
                />
              }
            />
            <Route
              path="/toolbox"
              element={
                <Toolbox courses={toolBoxCourses} semesters={semesters} />
              }
            />
            <Route
              path="/course-planner"
              element={
                <CoursePlanner
                  semesters={semesters}
                  addSemester={addSemester}
                  deleteSemester={deleteSemester}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

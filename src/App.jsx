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
      courses: ['Course 1', 'Course 2', 'Course 3', 'Course 4'],
    },
  ]);

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
        <main className="flex grow ">
          <Routes>
            {/* Redirect from / to /course-search */}
            <Route path="/" element={<Navigate to="/search-course" />} />
            <Route
              path="/search-course"
              element={
                <SearchCourse
                  addCourseToToolbox={addCourseToToolbox}
                  semesters={semesters}
                />
              }
            />
            <Route
              path="/toolbox"
              element={<Toolbox courses={toolBoxCourses} />}
            />
            <Route path="/course-planner" element={<CoursePlanner />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

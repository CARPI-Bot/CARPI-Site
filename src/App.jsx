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

const App = () => {
  return (
    <Router>
      <div className="w-screen h-screen flex flex-col">
        <Header />
        <main className="flex grow ">
          <Routes>
            {/* Redirect from / to /course-search */}
            <Route path="/" element={<Navigate to="/search-course" />} />
            <Route path="/search-course" element={<SearchCourse />} />
            <Route path="/toolbox" element={<Toolbox />} />
            <Route path="/course-planner" element={<CoursePlanner />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

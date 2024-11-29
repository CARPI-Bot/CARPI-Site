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
    <div className="container">
      <Router>
        <Header />
        <main style={{ padding: '20px' }}>
          <Routes>
            {/* Redirect from / to /course-search */}
            <Route path="/" element={<Navigate to="/course-search" />} />
            <Route path="/search-course" element={<SearchCourse />} />
            <Route path="/toolbox" element={<Toolbox />} />
            <Route path="/course-planner" element={<CoursePlanner />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;

import { useState } from 'react';
import Courses from '../components/Courses';
import filterIcon from '../assets/images/filter.svg';
import expandedIcon from '../assets/images/expanded.svg';
import closedIcon from '../assets/images/closed.svg';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    height: '50vh',
    padding: '1.75rem',
    marginLeft: '1.25rem',

    backgroundColor: 'rgb(254, 226, 226)',
    borderRadius: '0.75rem',
    fontFamily: 'Single Day, cursive',
  },
  coursesContainer: {
    flexGrow: 1,
    borderRadius: '0.75rem',
    overflowY: 'auto',
    paddingBottom: '10px',
  },
  heading: {
    textAlign: 'left',
    fontSize: 'max(1.5vw, 28px)',
    margin: "0px",
  },
  searchFilterContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '10px',
  },
  input: {
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    backgroundColor: '#f3f4f6',
  },
  filter: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    backgroundColor: 'rgb(254, 226, 226)',
    width: '30%',
    fontSize: '20px',
  },
  filterAttribute: {
    fontSize: '20px',
    backgroundColor: '#f3f4f6',
  },
  filterOptions: {
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    padding: '0.75rem',
    marginBottom: '10px',

    backgroundColor: '#f3f4f6',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '0.5rem',
  },
  attribute: {
    fontSize: '15px',
    color: '#8D8D8D',
  },
};

const courseData = Array.from({ length: 2000 }, (_, index) => ({
  id: `Test ${index + 1}`,
  name: `CourseName ${index + 1}`,
  credits: 4,
  description: `This is a brief description of Course ${index + 1}.`,
}));

const SearchCourse = () => {
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Search Course</h1>
      <div style={styles.searchFilterContainer}>
        <input
          type="text"
          style={styles.input}
          placeholder="Find Courses Here..."
        />
        <div
          style={styles.filter}
          onClick={() => setShowFilterOptions(!showFilterOptions)}
        >
          <img src={filterIcon} alt="filter icon"></img>          
          Filter
         {!showFilterOptions && (<img src={closedIcon} alt="closed icon"></img>)}
         {showFilterOptions && (<img src={expandedIcon} alt="closed icon"></img>)}       
        </div>
      </div>
      {showFilterOptions && (
        <div style={styles.filterOptions}>
          <div> 
            <div style={styles.attribute}>Subject</div>
            <select style={styles.filterAttribute} >
              <option value="">All Subjects</option>
              <option value="programming">rahh</option>
              <option value="math">rahh2</option>
              <option value="science">rahh3</option>
            </select>
          </div>

          <div> 
            <div style={styles.attribute}>Attribute</div>
            <select style={styles.filterAttribute} >
              <option value="">All Attributes</option>
              <option value="programming">Programming</option>
              <option value="math">Math</option>
              <option value="science">Science</option>
            </select>
          </div>

          <div> 
            <div style={styles.attribute}>Semesters Offered</div>
            <select style={styles.filterAttribute} >
              <option value="">All Semesters</option>
              <option value="programming">Programming</option>
              <option value="math">Math</option>
              <option value="science">Science</option>
            </select>
          </div>
        </div>
      )}
      <div style={styles.coursesContainer}>
        <Courses courses={courseData} />
      </div>
    </div>
  );
};

export default SearchCourse;

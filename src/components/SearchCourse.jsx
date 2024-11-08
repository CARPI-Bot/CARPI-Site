import { useState } from 'react';
import Select from 'react-select';

import Courses from '../components/Courses';
import filterIcon from '../assets/images/filter.svg';
import expandedIcon from '../assets/images/expanded.svg';
import closedIcon from '../assets/images/closed.svg';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    minHeight: '25em',
    padding: '1.75rem',
    marginLeft: '1.25rem',
    backgroundColor: 'rgb(254, 226, 226)',
    borderRadius: '0.75rem',
    fontFamily: 'Single Day, cursive',
    height: '656px', // Set a fixed height
    overflow: 'hidden', // Hide overflow to prevent height shift
  },
  coursesContainer: {
    flexGrow: 1,
    borderRadius: '0.75rem',
    overflowY: 'auto',
    paddingBottom: '10px',
    maxHeight: 'calc(100% - 150px)', // Adjust max height to account for filter options
  },
  heading: {
    textAlign: 'left',
    fontSize: 'max(1.5vw, 28px)',
    margin: '0px',
  },
  searchFilterContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '5px',
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
  filterOptions: {
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    padding: '0.75rem',
    paddingBottom: '5px',
    marginBottom: '10px',
    backgroundColor: '#f3f4f6',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '0.5rem',
    overflowY: 'auto', // Enable vertical scrolling for filter options
    maxHeight: '150px', // Set a max height for filter options
  },
  attribute: {
    fontSize: '15px',
    color: '#8D8D8D',
    marginLeft: '10px',
    marginBottom: '-10px',
  },
};

const courseData = Array.from({ length: 2000 }, (_, index) => ({
  id: `Test ${index + 1}`,
  name: `CourseName ${index + 1}`,
  credits: 4,
  description: `This is a brief description of Course ${index + 1}.`,
}));

const subjectOptions = [
  { value: '', label: 'All Subjects' },
  { value: 'programming', label: 'Programming' },
  { value: 'math', label: 'Math' },
  { value: 'science', label: 'Science' },
];

const attributeOptions = [
  { value: '', label: 'All Attributes' },
  { value: 'programming', label: 'Programming' },
  { value: 'math', label: 'Math' },
  { value: 'science', label: 'Science' },
];

const semesterOptions = [
  { value: '', label: 'All Semesters' },
  { value: 'Fall', label: 'Fall' },
  { value: 'Spring', label: 'Spring' },
  { value: 'Summer', label: 'Summer' },
];

const customStyles = {
  control: (base) => ({
    ...base,
    backgroundColor: 'none',
    border: 'none',
    lineHeight: '20px',
    padding: '0px',
    margin: '0px',
    fontSize: '20px',
    width: '200px',
  }),
  option: (base, { isFocused, isSelected }) => ({
    ...base,
    fontSize: '20px',
    color: isSelected ? '#333' : '#666',
    backgroundColor: isFocused
      ? '#f3f4f6'
      : isSelected
        ? 'rgb(254, 226, 226)'
        : '#ffffff',
    padding: '5px',
    cursor: 'pointer',
  }),
  menu: (base) => ({
    ...base,
    width: '400px',
  }),
  indicatorSeparator: () => ({ display: 'none' }),
};

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
          <img src={filterIcon} alt="filter icon" />
          Filter
          {!showFilterOptions && <img src={closedIcon} alt="closed icon" />}
          {showFilterOptions && <img src={expandedIcon} alt="closed icon" />}
        </div>
      </div>
      {showFilterOptions && (
        <div style={styles.filterOptions}>
          <div>
            <div style={styles.attribute}>Subject</div>
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue={subjectOptions[0]}
              isSearchable
              name="subject"
              options={subjectOptions}
              styles={customStyles}
            />
          </div>
          <div>
            <div style={styles.attribute}>Attribute</div>
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue={attributeOptions[0]}
              isSearchable
              name="attribute"
              options={attributeOptions}
              styles={customStyles}
            />
          </div>
          <div>
            <div style={styles.attribute}>Semesters Offered</div>
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue={semesterOptions[0]}
              isSearchable
              name="semester"
              options={semesterOptions}
              styles={customStyles}
            />
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

import { useState, useEffect } from 'react';
import axios from 'axios';
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
    height: '656px',
    overflow: 'hidden',
  },
  coursesContainer: {
    flexGrow: 1,
    borderRadius: '0.75rem',
    overflowY: 'auto',
    paddingBottom: '10px',
    maxHeight: 'calc(100% - 100px)',
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
  },
  attribute: {
    fontSize: '15px',
    color: '#8D8D8D',
    marginLeft: '10px',
    marginBottom: '-5px',
  },
};

const customStyles = {
  control: (base) => ({
    ...base,
    display: 'flex',
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
  }),
  indicatorSeparator: () => ({ display: 'none' }),
};

const subjectOptions = [
  { value: '', label: 'All Subjects' },
  { value: 'programming', label: 'Programming' },
  { value: 'math', label: 'Math' },
  { value: 'science', label: 'Science' },
  // Add more subjects as needed
];

const attributeOptions = [
  { value: '', label: 'All Attributes' },
  { value: 'online', label: 'Online' },
  { value: 'in-person', label: 'In-Person' },
  // Add more attributes as needed
];

const semesterOptions = [
  { value: '', label: 'All Semesters' },
  { value: 'Fall', label: 'Fall' },
  { value: 'Spring', label: 'Spring' },
  { value: 'Summer', label: 'Summer' },
  // Add more semesters as needed
];

const HOST = process.env.REACT_APP_API_HOST;

const SearchCourse = () => {
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [courses, setCourses] = useState([]);
  const [searchPrompt, setSearchPrompt] = useState('');
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [selectedSemesters, setSelectedSemesters] = useState([]);
  const [openCourses, setOpenCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`${HOST}/api/v1/course/all`);
        setCourses(response.data);
        setOpenCourses(Array(response.data.length).fill(false));
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleSearch = async () => {
    const params = new URLSearchParams();

    if (searchPrompt) {
      params.append('searchPrompt', searchPrompt);
    }
    if (selectedSubjects.length > 0) {
      params.append(
        'deptFilters',
        selectedSubjects.map((s) => s.value).join(','),
      );
    }
    if (selectedAttributes.length > 0) {
      params.append(
        'attrFilters',
        selectedAttributes.map((a) => a.value).join(','),
      );
    }
    if (selectedSemesters.length > 0) {
      params.append(
        'semFilters',
        selectedSemesters.map((s) => s.value).join(','),
      );
    }

    try {
      const response = await axios.get(
        `${HOST}/api/v1/course/search?${params.toString()}`,
      );
      setCourses(response.data);
      setOpenCourses(Array(response.data.length).fill(false));
    } catch (error) {
      console.error('Error searching courses:', error);
    }
  };

  const toggleDropdown = (index) => {
    setOpenCourses((prev) => {
      const newOpenCourses = [...prev];
      newOpenCourses[index] = !newOpenCourses[index];
      return newOpenCourses;
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Search Course</h1>
      <div style={styles.searchFilterContainer}>
        <input
          type="text"
          style={styles.input}
          placeholder="Find Courses Here..."
          value={searchPrompt}
          onChange={(e) => setSearchPrompt(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
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
        <button onClick={handleSearch}>Search</button>
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
              onChange={setSelectedSubjects}
              menuPosition={'fixed'}
              isMulti
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
              onChange={setSelectedAttributes}
              menuPosition={'fixed'}
              isMulti
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
              onChange={setSelectedSemesters}
              menuPosition={'fixed'}
              isMulti
            />
          </div>
        </div>
      )}
      <div style={styles.coursesContainer}>
        <Courses
          courses={courses}
          openCourses={openCourses}
          toggleDropdown={toggleDropdown}
        />
      </div>
    </div>
  );
};

export default SearchCourse;

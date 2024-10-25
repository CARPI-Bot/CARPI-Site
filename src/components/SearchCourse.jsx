import Courses from '../components/Courses';

const courseData = Array.from({ length: 2000 }, (_, index) => ({
  id: `Test ${index + 1}`,
  name: `CourseName ${index + 1}`,
  credits: 4,
  description: `This is a brief description of Course ${index + 1}.`,
}));

const SearchCourse = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Search Course</h1>
      <div style={styles.searchAndFilter}>
        <input
          type="text"
          style={styles.input}
          placeholder="Find Courses Here..."
        />
        <div  type="text">
                    Filter
        </div>
      </div>
      <div>
        <Courses courses={courseData} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: 'rgb(254, 226, 226)',
    width: '50%',
    padding: '1.75rem',
    marginLeft: '1.25rem',
    borderRadius: '0.75rem',
  },
  heading: {
    textAlign: 'left',
    fontSize: '2.25rem',
    margin: '0px',
  },
  input: {
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
    width: '100%',
    padding: '0.75rem',
    borderRadius: '0.5rem',
  },
  searchAndFilter: {
    flexDirection: 'row',
  },
};

export default SearchCourse;
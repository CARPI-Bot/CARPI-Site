const Courses = () => {
  return (
    <div className="bg-gray-100 bg-contain p-2 mt-4 rounded-xl drop-shadow-md">
      <div class="Course" style={styles.Course}>
        <div class="Names" style={styles.Names}>
          <h1 class="CourseID" style={styles.CourseID}>
            CourseID
          </h1>
          <h1 class="CourseName" style={styles.CourseName}>
            CourseName
          </h1>
        </div>
        <h1 class="CourseCredit" style={styles.CourseCredit}>
          4 Credits
        </h1>
      </div>
    </div>
  );
};

const styles = {
  Course: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '1em',
    justifyContent: 'space-between',
  },
  Names: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '.1em',
  },
  CourseID: {
    textAlign: 'left',
    fontSize: '1.3em',
  },
  CourseName: {
    textAlign: 'left',
    fontSize: '1.3em',
    paddingLeft: '1.5em',
  },
  CourseCredit: {
    width: '50%',
    textAlign: 'right',
    fontSize: '1.3em',
    marginRight: '1em',
  },
};

export default Courses;

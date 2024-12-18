import React, { useState } from 'react';
import Select, { SingleValue } from 'react-select';

// Define the shape of a Semester
interface Semester {
  name: string;
}

// Define the shape of a Course
interface CourseType {
  id: number;
  department: string;
  code: string;
  title: string;
  creditMin: number;
  creditMax: number;
  description?: string;
  semesterList: string[];
  attributeList: string[];
}

// Define the props for the Course component
interface CourseProps {
  course: CourseType;
  addCourseToToolbox?: (course: CourseType) => void;
  addCourseToSemester: (course: CourseType, semesterName: string) => void;
  semesters?: Semester[];
}

// Define the shape of Select options
interface SelectOption {
  value: string;
  label: string;
}

const Course: React.FC<CourseProps> = ({
  course,
  addCourseToToolbox,
  addCourseToSemester,
  semesters = [],
}) => {
  const [selectedOption, setSelectedOption] =
    useState<SingleValue<SelectOption>>(null);
  const [dropdown, setDropdown] = useState<boolean>(false);

  const handleChange = (option: SingleValue<SelectOption>) => {
    setSelectedOption(option);
    if (option) {
      console.log('Selected option:', option);
      console.log(course);
      if (option.value === 'toolbox') {
        if (addCourseToToolbox) {
          addCourseToToolbox(course);
        }
      } else {
        addCourseToSemester(course, option.value);
      }
    }
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const displayCredit = (minCredit: number, maxCredit: number): string => {
    if (minCredit === maxCredit) {
      return `${minCredit} Credits`;
    }
    return `${minCredit} - ${maxCredit} Credits`;
  };

  // Generate options for the Select component
  const selectOptions: SelectOption[] = [
    ...semesters.map((s) => ({
      value: s.name,
      label: s.name,
    })),
    { value: 'toolbox', label: 'Toolbox' },
  ];

  return (
    <div key={course.id}>
      <div className="Course" style={styles.Course} onClick={toggleDropdown}>
        <div className="Names" style={styles.Names}>
          <h1 className="CourseID" style={styles.CourseID}>
            {course.department}-{course.code}
          </h1>
          <h1 className="CourseName" style={styles.CourseName}>
            {course.title}
          </h1>
        </div>
        <h1 className="CourseCredit" style={styles.CourseCredit}>
          {displayCredit(course.creditMin, course.creditMax)}
        </h1>
      </div>
      {/* Drop down contents */}
      {dropdown && (
        <div className="CourseBlurb" style={styles.CourseBlurb}>
          <p>{course.description || 'No description'}</p>
          <div style={styles.bubbleContainer}>
            {course.semesterList.length > 0 ? (
              <div style={styles.bubble}>
                Offered: {course.semesterList.join(', ')}
              </div>
            ) : (
              <div style={styles.bubble}>No semesters offered</div>
            )}
          </div>
          <div style={styles.bubbleContainer}>
            {course.attributeList.length > 0 ? (
              <div style={styles.bubble}>
                Attributes: {course.attributeList.join(', ')}
              </div>
            ) : (
              <div style={styles.bubble}>No attributes</div>
            )}
          </div>

          {semesters.length > 0 && (
            <Select
              options={selectOptions}
              value={selectedOption}
              onChange={handleChange}
              placeholder="Add course to..."
            />
          )}
        </div>
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  Course: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '1em',
    justifyContent: 'space-between',
    cursor: 'pointer',
    padding: '1em',
    backgroundColor: '#f8f8f8',
    borderRadius: '8px',
    marginBottom: '8px',
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
  CourseBlurb: {
    marginLeft: '2em',
    marginRight: '2em',
    marginTop: '0.5em',
    marginBottom: '0.5em',
    fontSize: '1em',
    color: '#555',
    backgroundColor: '#e0e0e0', // Slightly darker background color
    borderRadius: '8px',
    padding: '1em',
  },
  bubbleContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5em',
    marginTop: '0.5em',
  },
  bubble: {
    backgroundColor: '#d0d0d0', // Slightly darker background color for bubbles
    borderRadius: '15px',
    padding: '0.5em 1em',
    fontSize: '0.9em',
    color: '#333',
  },
};

export default Course;

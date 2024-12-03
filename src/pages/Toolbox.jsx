import { useState } from 'react';
import expandedIcon from '../assets/images/expanded.svg';
import collapsedIcon from '../assets/images/closed.svg';
import Courses from '../components/Courses';

const styles = {
  container: {
    width: '100%',
    padding: '1rem',
    backgroundColor: 'rgb(254, 226, 226)',
    borderRadius: '0.75rem',
    fontFamily: 'Single Day, cursive',
    transition: 'height 0.3s ease', // Smooth transition for collapse
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
  },
  space: {
    width: '100%',
    height: 'calc(100% - 2rem)',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    transition: 'max-height 0.3s ease',
  },
};

const Toolbox = ({ courses }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="flex flex-col flex-grow p-4 ">
      <div
        style={{ ...styles.container }}
        className={'' + (isExpanded ? 'flex-grow' : '')}
      >
        <div style={styles.header} onClick={toggleExpand}>
          <h1 className="text-left text-2xl pb-2">Toolbox</h1>
          <img
            src={isExpanded ? expandedIcon : collapsedIcon}
            alt="Toggle arrow"
            style={{
              transform: isExpanded ? 'rotate(0deg)' : 'rotate(180deg)',
              transition: 'transform 0.3s ease',
            }}
          />
        </div>
        {isExpanded && (
          <div style={styles.space}>
            <Courses courses={courses} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Toolbox;

import { useState } from 'react';
import SearchCourse from '../components/SearchCourse';
import Planner from '../components/Planner';
import Toolbox from '../components/Toolbox';

const Page2 = () => {
  const [isToolboxExpanded, setIsToolboxExpanded] = useState(true);

  const toggleToolbox = () => {
    setIsToolboxExpanded((prev) => !prev);
  };

  return (
    <div style={styles.section}>
      <div style={styles.courses}>
        <SearchCourse isToolboxExpanded={isToolboxExpanded} />
        <Planner isToolboxExpanded={isToolboxExpanded} />
      </div>
      <Toolbox isExpanded={isToolboxExpanded} toggleExpand={toggleToolbox} />
    </div>
  );
};

export default Page2;

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    fontSize: '2rem',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  courses: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'black',
  },
  section: {
    marginRight: '4em',
  },
};

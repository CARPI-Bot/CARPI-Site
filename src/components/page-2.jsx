import { useState } from 'react';
import Logo from './Header';
import About from '../components/About';
import SearchCourse from '../components/SearchCourse';
import Planner from '../components/Planner';
import Toolbox from '../components/Toolbox';
import { section } from 'framer-motion/client';

const Page2 = () => {
  const [isToolboxExpanded, setIsToolboxExpanded] = useState(true);

  const toggleToolbox = () => {
    setIsToolboxExpanded((prev) => !prev);
  };

  return (
    <div style={styles.main}>
      <div style={styles.header}>
        <Logo />
        <About />
      </div>
      <div style={styles.section}>
        <div style={styles.courses}>
          <SearchCourse isToolboxExpanded={isToolboxExpanded} />
          <Planner isToolboxExpanded={isToolboxExpanded} />
        </div>
        <Toolbox isExpanded={isToolboxExpanded} toggleExpand={toggleToolbox} />
      </div>
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
    marginLeft: '2.5em',
    marginRight: '2em',
  },
};

import Logo from './Header';
import About from '../components/About';
import SearchCourse from '../components/SearchCourse';
import Planner from '../components/Planner';
import Toolbox from '../components/Toolbox';

const Page2 = () => {
  return (
    <div>
      <div style={styles.header}>
        <Logo></Logo>
        <About></About>
      </div>
      <div style={styles.section}>
        <div style={styles.courses}>
          <SearchCourse></SearchCourse>
          {/* <SearchCourse></SearchCourse> */}
          <Planner></Planner>
        </div>
        <Toolbox></Toolbox>
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
    marginRight: '4em',
  },
};

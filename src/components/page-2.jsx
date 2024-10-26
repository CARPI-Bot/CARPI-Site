import Logo from './Header';
import About from '../components/About';
import SearchCourse from '../components/SearchCourse';
import Planner from '../components/Planner';

const Page2 = () => {
  return (
    <div>
      <div style={styles.header}>
        <Logo></Logo>
        <About></About>
      </div>
      <div style={styles.courses}>
        <SearchCourse></SearchCourse>
        <Planner></Planner>
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
    alignItems: 'center',
    color: 'black',
    marginRight: '4rem',
  },
};

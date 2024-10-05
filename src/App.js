import './App.css';
import Logo from './components/Logo';
import About from './components/About';
import SearchCourse from './components/SearchCourse';

function App() {
  return (
    <div>
      <div style={styles}>
        <Logo></Logo>
        <About></About>
      </div>
      <SearchCourse></SearchCourse>
    </div>
  );
}

export default App;

const styles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: 'white',
  fontSize: '2rem',
  fontWeight: 'bold',
  fontFamily: 'sans-serif',
};

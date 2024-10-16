import './App.css';
import Logo from './components/Logo';
import About from './components/About';
import Catalog from './components/course_catalog'

function App() {
  return (
    <div style={styles}>
      <Logo></Logo>
      <About></About>
    </div>
    <div>
        <Catalog></Catalog>
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

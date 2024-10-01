import './App.css';
import Logo from './components/Logo';
import About from './components/About';

function App() {
  return (
    <div style={styles}>
      <Logo></Logo>
      <About></About>
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

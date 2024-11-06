import CARPI from '../assets/images/Transparent_Carpi.svg';
import '../assets/css/font.css';

function Header() {
  return (
    <header className="bg-black-600 text-black mt-6 mb-4 flex justify-between">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <img
          className="size-24 rounded-full ml-8"
          src={CARPI}
          alt="Filler"
        ></img>
        <h1 className="text-3xl font-bold" style={styles.CARPI}>
          CARPI
        </h1>
      </div>
    </header>
  );
}

export default Header;
const styles = {
  CARPI: {
    fontFamily: "'Single Day', cursive",
    fontSize: '2rem',
    color: '#000',
    textAlign: 'center',
    marginTop: '1rem',
    marginBottom: '1rem',
    textShadow: '2px 2px 2px #d1d1d1',
  },
};

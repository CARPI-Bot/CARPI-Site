import CARPI from '../assets/images/Transparent_Carpi.svg';
import '../assets/css/font.css';
import { Link } from 'react-router-dom';
import { useState, CSSProperties } from 'react';
import React from 'react';

function Header(): JSX.Element {
  const [, setClickCount] = useState<number>(0); // Click tracker for secret

  // Secret Egg
  const handleClick = (): void => {
    setClickCount((prevCount) => {
      if (prevCount + 1 === 10) {
        alert('Fish ');
        return 0;
      }
      return prevCount + 1;
    });
  };

  return (
    <header className="bg-red-100 h-16 text-black flex justify-between px-2">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <img
          className="size-16 rounded-full ml-4"
          src={CARPI}
          alt="Filler"
          onClick={handleClick}
        ></img>
        <nav>
          <Link to="/search-course" style={{ margin: '0 10px' }}>
            Search Course
          </Link>
          <Link to="/toolbox" style={{ margin: '0 10px' }}>
            Toolbox
          </Link>
          <Link to="/course-planner" style={{ margin: '0 10px' }}>
            Course Planner
          </Link>
        </nav>
        <h1 className="text-3xl font-bold" style={styles.CARPI}>
          CARPI
        </h1>
      </div>
    </header>
  );
}

export default Header;

const styles: { [key: string]: CSSProperties } = {
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
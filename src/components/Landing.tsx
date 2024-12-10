import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/transparent_carpi.png';
import Text from '../assets/CARPI-text.png';
import Page2 from '../pages/page-2';

// Define the type for the props
interface LandingPageProps {
  onTransition: () => void;
}

// Landing page with carpi logo. click to move to dashboard. Archived.
const LandingPage: React.FC<LandingPageProps> = ({ onTransition }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      className="h-screen flex justify-center items-center relative"
      style={{ backgroundColor: '#F5CECE' }}
    >
      <img
        src={Logo}
        alt="CARPI"
        className="w-1/2 md:w-1/3 lg:w-1/4 opacity-50"
      />
      <img
        src={Text}
        alt="CARPI Text"
        className="absolute w-1/2 md:w-1/3 lg:w-1/4 cursor-pointer hover:filter hover:brightness-0 hover:invert"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        onClick={onTransition}
      />
    </motion.div>
  );
};

const App: React.FC = () => {
  const [showNextPage, setShowNextPage] = useState<boolean>(false);

  const handleTransition = () => {
    setShowNextPage(true);
  };

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      {!showNextPage ? (
        <LandingPage onTransition={handleTransition} />
      ) : (
        <React.Fragment>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: -window.innerHeight }}
            transition={{ duration: 0.35 }}
            className="h-screen w-screen absolute top-0 left-0"
            style={{ backgroundColor: '#F5CECE' }}
          ></motion.div>
          <motion.div
            initial={{ y: window.innerHeight }}
            animate={{ y: 0 }}
            transition={{ duration: 0.35 }}
            className="h-screen w-screen absolute top-0 left-0"
          >
            <Page2 />
          </motion.div>
        </React.Fragment>
      )}
    </div>
  );
};

export default App;

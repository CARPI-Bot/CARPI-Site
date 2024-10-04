import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/transparent_carpi.png';
import Page2 from '../components/page-2';

const LandingPage = ({ onTransition }) => {
    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            className="h-screen flex justify-center items-center"
            style={{ backgroundColor: '#F5CECE' }}
        >
            <img 
                src={Logo}
                alt="CARPI" 
                className="cursor-pointer w-1/2 md:w-1/3 lg:w-1/4"
                onClick={onTransition}
            />
        </motion.div>
    );
};

const App = () => {
    const [showNextPage, setShowNextPage] = useState(false);

    const handleTransition = () => {
        setShowNextPage(true);
    };

    return (
        <div className="w-screen h-screen overflow-hidden">
            {!showNextPage ? (
                <LandingPage onTransition={handleTransition} />
            ) : (
                <>
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: -window.innerHeight }}
                        transition={{ duration: 1 }}
                        className="h-screen"
                        style={{ backgroundColor: '#F5CECE' }}
                    >
                    </motion.div>
                    <motion.div
                        initial={{ y: window.innerHeight }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                        className="h-screen"
                    >
                        <Page2 />
                    </motion.div>
                </>
            )}
        </div>
    );
};

export default App;
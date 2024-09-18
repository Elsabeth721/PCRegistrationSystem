import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/im.jpg';
import { useNavigate } from 'react-router-dom';

const SlideDown = (delay) => {
  return {
    initial: { y: '-100%', opacity: 0 },
    animate: {
      y: '0',
      opacity: 1,
      transition: { duration: 0.8, delay: delay },
    },
  };
};

const WelcomePage = () => {
  const navigate= useNavigate();
  return (
    <motion.div
      className="flex justify-center items-center min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'contain', backgroundPosition: 'center' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        className="w-full max-w-lg mx-4 p-8 bg-blueBlack rounded-md shadow-md text-center"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
      >
        <motion.h1 
          variants={SlideDown(1.5)}
          initial="initial"
          animate="animate"
          className="font-bold text-2xl md:text-3xl text-white mb-4"
        >
          Welcome to Addis Ababa Science and Technology University PC Registration System.
        </motion.h1>
        
        <motion.h2 
          variants={SlideDown(1.7)}
          initial="initial"
          animate="animate"
          className="font-semibold text-lg md:text-2xl text-white mb-6"
        >
          "Register and Keep Students PC Safe."
        </motion.h2>

        <motion.button
          className="p-3 bg-purple-500 rounded-md text-white hover:bg-purple-600 transition-colors"
          variants={SlideDown(1.9)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={()=> navigate('/login')}
        >
          Login
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default WelcomePage;

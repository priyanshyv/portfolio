import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiLock } from 'react-icons/fi';
import { motion } from 'framer-motion';

const WorkExperience = () => {
  const [expanded, setExpanded] = useState(true);
  const [showStealthInfo, setShowStealthInfo] = useState(false);

  return (
    <motion.section 
      className="my-8 mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-6 cursor-pointer" onClick={() => setExpanded(!expanded)}>
        <h2 className="text-2xl font-semibold text-slate-200 flex items-center">
          Work Experience
        </h2>
        {expanded ? <FiChevronUp className="text-gray-400" /> : <FiChevronDown className="text-gray-400" />}
      </div>
      
      {expanded && (
        <motion.div 
          className="space-y-8"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Platinumrx Entry */}
          <div className="relative group">
            <div className="absolute -left-5 top-0 h-full w-0.5 bg-gradient-to-b from-purple-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="border-b border-gray-800 pb-8 hover:bg-gray-900/30 transition-all duration-300 rounded-lg px-4 py-3">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium text-slate-200 ">
                  SDE Intern
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowStealthInfo(!showStealthInfo);
                    }}
                    className="ml-2 inline-block text-gray-500 hover:text-purple-400 transition-colors"
                  >
                    <span className='group-hover:text-purple-400 transition-colors duration-300'>@Platinumrx</span> 
                    
                  </button>
                </h3>
                <span className="text-gray-400 text-sm bg-gray-900/50 px-2 py-1 rounded">Aug 2025 - Present</span>
              </div>
              
              <p className="text-gray-400 mb-4 flex items-center">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-500 mr-2"></span>
                Bangalore,India (On-site)
              </p>
              
              {/* {showStealthInfo ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-900/50 p-4 rounded-lg mb-4"
                >
                  <p className="text-gray-300 mb-3">
                    🕵️‍♂️ Working on an innovative product in stealth mode. Due to confidentiality:
                  </p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>Details cannot be publicly disclosed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>Working with cutting-edge web technologies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>Building full-stack architecture from scratch</span>
                    </li>
                  </ul>
                </motion.div>
              ) : (
                <ul className="space-y-3 text-gray-300">
                  <motion.li 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-purple-400 mr-2">↳</span>
                    <span>Building full e-commerce platform from scratch</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-purple-400 mr-2">↳</span>
                    <span>Implementing both frontend and backend architecture</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-purple-400 mr-2">↳</span>
                    <span>Developing user, admin, and seller roles with an inventory management system.</span>
                  </motion.li>
                </ul>
              )} */}
              
              {/* <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-gray-800/50 text-purple-400 rounded-full">React</span>
                <span className="text-xs px-2 py-1 bg-gray-800/50 text-purple-400 rounded-full">Node.js</span>
                <span className="text-xs px-2 py-1 bg-gray-800/50 text-purple-400 rounded-full">MongoDB</span>
                <span className="text-xs px-2 py-1 bg-gray-800/50 text-purple-400 rounded-full">Express</span>
              </div> */}
            </div>
          </div>
          {/* Stealth Startup Entry */}
          <div className="relative group">
            <div className="absolute -left-5 top-0 h-full w-0.5 bg-gradient-to-b from-purple-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="border-b border-gray-800 pb-8 hover:bg-gray-900/30 transition-all duration-300 rounded-lg px-4 py-3">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium text-slate-200 ">
                  Full Stack Developer (SDE Intern) 
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowStealthInfo(!showStealthInfo);
                    }}
                    className="ml-2 inline-block text-gray-500 hover:text-purple-400 transition-colors"
                  >
                    <span className='group-hover:text-purple-400 transition-colors duration-300'>@Stealth Startup <FiLock className='inline-block' size={14} /></span> 
                    
                  </button>
                </h3>
                <span className="text-gray-400 text-sm bg-gray-900/50 px-2 py-1 rounded">May 2025 - Jul 2025</span>
              </div>
              
              <p className="text-gray-400 mb-4 flex items-center">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-500 mr-2"></span>
                India (Remote)
              </p>
              
              {showStealthInfo ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-900/50 p-4 rounded-lg mb-4"
                >
                  <p className="text-gray-300 mb-3">
                    🕵️‍♂️ Working on an innovative product in stealth mode. Due to confidentiality:
                  </p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>Details cannot be publicly disclosed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>Working with cutting-edge web technologies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>Building full-stack architecture from scratch</span>
                    </li>
                  </ul>
                </motion.div>
              ) : (
                <ul className="space-y-3 text-gray-300">
                  <motion.li 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-purple-400 mr-2">↳</span>
                    <span>Building full e-commerce platform from scratch</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-purple-400 mr-2">↳</span>
                    <span>Implementing both frontend and backend architecture</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-purple-400 mr-2">↳</span>
                    <span>Developing user, admin, and seller roles with an inventory management system.</span>
                  </motion.li>
                </ul>
              )}
              
              {/* <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-gray-800/50 text-purple-400 rounded-full">React</span>
                <span className="text-xs px-2 py-1 bg-gray-800/50 text-purple-400 rounded-full">Node.js</span>
                <span className="text-xs px-2 py-1 bg-gray-800/50 text-purple-400 rounded-full">MongoDB</span>
                <span className="text-xs px-2 py-1 bg-gray-800/50 text-purple-400 rounded-full">Express</span>
              </div> */}
            </div>
          </div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default WorkExperience;
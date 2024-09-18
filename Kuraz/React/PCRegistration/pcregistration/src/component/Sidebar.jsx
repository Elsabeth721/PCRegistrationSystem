import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose, AiOutlineLaptop } from 'react-icons/ai';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation(); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex h-screen">
     
      <div className="md:hidden fixed top-4 left-2 z-50 ">
        <button onClick={toggleSidebar} className="text-white">
          {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </button>
      </div>

  
      <div
        className={`fixed inset-0 z-40 w-64 bg-blueBlack shadow-lg transition-transform transform h-screen overflow-y-auto border-r border-gray-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:relative md:w-64`}
      >
        
        <div className="text-white p-6 text-2xl font-bold shadow-md flex items-center justify-between bg-blueBlack">
          <div className="flex items-center space-x-2">
            <AiOutlineLaptop size={24} />
            <span>PC Registration System</span>
          </div>
          {/* Close button for mobile */}
          {/* <button 
            onClick={toggleSidebar} 
            className="md:hidden text-white flex-shrink-0"
          > */}
            {/* <AiOutlineClose size={24} />
          </button> */}
        </div>

        <nav className="mt-8">
          <ul className="space-y-4">
            <li>
              <Link
                to="/dashboard"
                className={`block px-6 py-2 rounded-md transition-colors ${
                  isActive('/dashboard')
                    ? 'bg-deepPurple text-white w-1/2 m-5'
                    : 'text-white hover:bg-deepPurple'
                }`}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/student"
                className={`block px-6 py-2 rounded-md transition-colors ${
                  isActive('/student')
                    ? 'bg-deepPurple text-white  w-1/2 m-5'
                    : 'text-white hover:bg-deepPurple'
                }`}
              >
                Student
              </Link>
            </li>
            <li>
              <Link
                to="/admin"
                className={`block px-6 py-2 rounded-md transition-colors ${
                  isActive('/admin')
                    ? 'bg-deepPurple text-white  w-1/2 m-5 '
                    : 'text-white hover:bg-deepPurple'
                }`}
              >
                Admin
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex-1 p-1">
  
      </div>
    </div>
  );
};

export default Sidebar;

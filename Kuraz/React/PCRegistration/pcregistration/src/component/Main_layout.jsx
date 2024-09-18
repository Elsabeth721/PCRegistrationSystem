import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard_page';
import Sidebar from './Sidebar';
import Student from './Student_page';
import Admin from './Admin_page';

const MainLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      
      <div className="flex-1">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/student" element={<Student />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainLayout;
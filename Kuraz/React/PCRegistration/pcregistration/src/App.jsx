
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome_page from './component/Welcome_page';
import Login_page from './component/Login_page';
import MainLayout from './component/Main_layout';
import Login from './component/Login';
const App = () => {
  return (
    <Router>
      <Routes>
         <Route path='/' element={<Welcome_page />} /> 
        {/* <Route path='/' element={<Login/>}/> */}
        <Route path='/login' element={<Login_page />} />
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </Router>
  );
};

export default App;

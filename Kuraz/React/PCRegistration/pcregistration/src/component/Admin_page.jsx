import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlinePlus, AiOutlineEdit, AiOutlineDelete, AiOutlineUser } from 'react-icons/ai';
import Modal from './Modal'; 
const sampleData = [
  {
    name: 'Maki',
    idNumber: '654321',
    phone: '9876543210',
  },
];

const Admin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
    handleCloseModal(); 
  };

  return (
    <div className="flex flex-col h-screen bg-blueBlack text-white">
    
      <div className="flex items-center justify-between p-4 bg-blueBlack text-white">
        <h1 className="text-xl md:text-2xl font-bold">Admin</h1>
        <AiOutlineUser size={24} className="md:size-30" />
      </div>

      <div className="bg-white h-1" />

      <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-blueBlack">
        <div className="ml-auto flex items-center space-x-2 mb-4 sm:mb-0">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white text-textPrimary px-4 py-2 rounded-md border border-gray-600 focus:outline-none w-full sm:w-auto"
          />
          <button
            onClick={handleAddClick}
            className="flex items-center bg-deepPurple text-white px-4 py-2 rounded-md mt-2 sm:mt-0"
          >
            <AiOutlinePlus size={20} />
            <span className="ml-2">Add</span>
          </button>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-auto bg-blueBlack">
   
        <div className="bg-white h-0.5 mb-2" />
        <div className="flex flex-col sm:flex-row text-sm md:text-lg font-bold mb-2 text-white">
          <div className="flex-1 p-2">Name</div>
          <div className="flex-1 p-2">ID Number</div>
          <div className="flex-1 p-2">Phone</div>
          <div className="flex-1 p-2">Actions</div>
        </div>

        <div className="bg-white h-0.5 mb-2" />

        {sampleData.map((item, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-center mb-2 py-2 border-b border-white">
            <div className="flex-1 p-2">{item.name}</div>
            <div className="flex-1 p-2">{item.idNumber}</div>
            <div className="flex-1 p-2">{item.phone}</div>
            <div className="flex-1 p-2 flex space-x-2">
              <button className="text-blue-500">
                <AiOutlineEdit size={20} />
              </button>
              <button className="text-red-500">
                <AiOutlineDelete size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmit} />
    </div>
  );
};

export default Admin;

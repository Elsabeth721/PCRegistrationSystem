// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white text-black p-6 rounded-md w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4 text-textPrimary">Add New Admin</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-textPrimary">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-textSecondary"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-textPrimary">ID Number</label>
            <input
              type="text"
              placeholder="Enter ID Number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-textSecondary"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-textPrimary">Phone</label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-textSecondary"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-deepPurple text-white px-4 py-2 rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;

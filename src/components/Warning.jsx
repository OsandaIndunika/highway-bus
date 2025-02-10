import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Warning = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className='flex items-center justify-between p-4 text-sm text-yellow-600 bg-yellow-100 rounded-xl' role='alert'>
      <span>
        {message}
      </span>
      <button
        onClick={handleClose}
        className='ml-4 text-yellow-600 hover:text-yellow-500'
        aria-label='Close'
      >
        <FaTimes className="w-3 h-3" />
      </button>
    </div>
  );
}

export default Warning;
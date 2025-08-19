import React, { useEffect } from 'react';

function Notification({ message, type = 'success', onClose }) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000); 
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  const styles = {
    success: 'bg-green-100 border-green-400 text-green-700',
    error: 'bg-red-100 border-red-400 text-red-700',
    info: 'bg-blue-100 border-blue-400 text-blue-700',
  };

  return (
    <div
      className={`fixed top-5 right-5 border-l-4 p-4 rounded shadow-lg z-50 ${styles[type]}`}
      role="alert"
    >
      <span className="block sm:inline">{message}</span>
    </div>
  );
}

export default Notification;

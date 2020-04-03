import React, { useEffect, useRef } from 'react';

function Toast({ children, remove }) {
  const removeRef = useRef();
  removeRef.current = remove;

  useEffect(() => {
    const duration = 5000;
    const id = setTimeout(() => removeRef.current(), duration);

    return () => clearTimeout(id);
  }, []);

  return (
    <div className="toast">
      <div className="toast__text">
               <button onClick={remove} className="toast__close-btn">x</button>{ children }
      </div>
      <div>
 
      </div>
    </div>
  );
}

export default Toast;
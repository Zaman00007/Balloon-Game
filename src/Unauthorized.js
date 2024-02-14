import React from 'react';
import './Unauthorized.css';
import { useHistory } from 'react-router-dom';

function Unauthorized() {
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <div className='container'>
      <h1>Unauthorized Access! You are being Warned.</h1>
      <button onClick={handleClick} className='button' >Click here to Login as an Authorized User </button>
    </div>
  );
}

export default Unauthorized;

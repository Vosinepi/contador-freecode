import React from 'react';
import './contador.css';

function Contador( {numClics} ) {
  return (
    <div className='contador'>
      <h1>{numClics}</h1>
    </div>
  );
}

export default Contador;

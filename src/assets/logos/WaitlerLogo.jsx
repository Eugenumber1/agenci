import React from 'react';
import newLogo from '../images/waitler.png'; // Adjust the path as necessary


export const WaitlerLogo = () => (
<img 
    src={newLogo} 
    alt="Waitler Logo" 
    width="200" 
    height="60" 
    style={{ filter: 'grayscale(100%) brightness(60%) contrast(90%)' }}  
  />
);
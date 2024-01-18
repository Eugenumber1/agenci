import React from 'react';
import newLogo from '../images/zgt.png'; // Adjust the path as necessary


export const ZgtLogo = () => (
<img 
    src={newLogo} 
    alt="New Brand Logo" 
    width="200" 
    height="60" 
    style={{ filter: 'grayscale(100%) brightness(60%) contrast(90%)' }}  
  />
);

import React from 'react';
import newLogo from '../images/cm_logo.svg'; // Adjust the path as necessary


export const CreativeMulesLogo = () => (
<img 
    src={newLogo} 
    alt="Creative Mules Logo" 
    width="200" 
    height="60" 
    style={{ filter: 'grayscale(100%) brightness(60%) contrast(90%)' }}  
  />
);
import React from 'react';



const iconSize = {
   fontSize : '20px',
   color: '#d9e3f0'
};


const CopyRight = () => (
  <div className='footer-copyright green -4'>
    <div className='container center-align'>
        &copy; 2022 Copyright TetraByte Travel 
        <a href='https://github.com/billpap4/Tetrabyte-Project'> 
          <i className='fab fa-instagram' style={iconSize}></i> 
        </a>
        <a href='https://github.com/billpap4/Tetrabyte-Project'> 
          <i className='fab fa-github-square' style={iconSize}></i> 
        </a>
    </div>
  </div>
);


export default CopyRight;
import React from 'react';
import Logo from './logo.png';

function Header() {
  return (
    <header>
      <span className="left">

         &nbsp;
         <img src = {Logo} />
        
      </span>
      <span className="right">
        <a href="#"> Teams </a>
      </span>

    </header>
  );
}

export default Header;

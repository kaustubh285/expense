import React from "react";
import "../css/Header.css";

function Header() {
  return (
    <div className='header'>
      <img
        src='/expense-logoWhite.png'
        className='navbar__logo'
        alt='Expense'
      />
    </div>
  );
}

export default Header;

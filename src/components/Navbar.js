import React from "react";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-white'>
      <a className='navbar-brand' href='/'>
        <img
          src='/expense-logoWhite.png'
          className='navbar__logo'
          alt='Expense'
        />
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavAltMarkup'
        aria-controls='navbarNavAltMarkup'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          <a className='nav-item nav-link active' href='/'>
            Reports <span className='sr-only'>(current)</span>
          </a>
          <a className='nav-item nav-link' href='/'>
            Main Expenses
          </a>
          <a className='nav-item nav-link' href='/'>
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React from 'react';
import './header.css';

const Header = () => {
  return (

    <header>
      <h1>Mountain Equipment</h1>
      <nav>
        <a href="home">Home</a>
        <a href="catalog">Products</a>
        <a href="cart">Sales </a>
      </nav>
      <input type="search" id="find_input" placeholder="Search equipment" />
    </header>
  );
};

export default Header;

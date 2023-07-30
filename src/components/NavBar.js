import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav>
      <div>Brand (título/nombre de la tienda)</div>
      <ul>
        <li>Categoría 1</li>
        <li>Categoría 2</li>
        <li>Categoría 3</li>
        {}
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;

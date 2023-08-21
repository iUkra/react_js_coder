// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  const categorias = ['Categoría 1', 'Categoría 2', 'Categoría 3'];

  return (
    <nav className="navbar">
      <div className="logo">Mi Tienda</div>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        {categorias.map((categoria, index) => (
          <li key={index}>
            <Link to={`/category/${index}`}>{categoria}</Link>
          </li>
        ))}
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;

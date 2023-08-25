import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  const categorias = [
    { name: 'Categoría 1', productID: 1 },
    { name: 'Categoría 2', productID: 2 },
    { name: 'Categoría 3', productID: 3 }
  ];

  return (
    <nav className="navbar">
      <div className="logo">Mi Tienda</div>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        {categorias.map(categoria => (
          <li key={categoria.productID}>
            <Link to={`/category/${categoria.productID}`}>{categoria.name}</Link>
          </li>
        ))}
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;

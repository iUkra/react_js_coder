import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  // Datos de las categorías
  const categorias = ['Categoría 1', 'Categoría 2', 'Categoría 3'];

  return (
    <nav>
      <div>Tienda</div>
      <ul>
        {categorias.map((categoria, index) => (
          <li key={index}>
            <a href="#">{categoria}</a>
          </li>
        ))}
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;

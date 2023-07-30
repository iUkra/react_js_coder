import React from 'react';

const CartWidget = () => {
  const cantidadElementos = 3; 

  return (
    <div className="cart-widget">
      <i className="material-icons">shopping_cart</i>
      <span className="badge badge-primary">{cantidadElementos}</span>
    </div>
  );
};

export default CartWidget;

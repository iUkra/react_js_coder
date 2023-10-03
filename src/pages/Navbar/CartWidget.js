import React, { useContext } from "react";
import { useCartContext } from "../../Context/CartContext"; // Actualiza la importación
import { Link } from "react-router-dom";

const CartWidget = () => {
  const context = useCartContext(); // Utiliza useCartContext para acceder al contexto
  let itemspush = 0;

  context.items.map((x) => (itemspush = x.cantidad + itemspush));

  return (
    <Link to={"/cart"}>
      <div className="visible content">
        Carrito &ensp;
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary"></span>{" "}
        {itemspush}
      </div>
      <div className="hidden content">
        <i className="shop icon"></i>
      </div>
    </Link>
  );
};

export default CartWidget;

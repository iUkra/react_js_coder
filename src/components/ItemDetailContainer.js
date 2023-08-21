// ItemDetailContainer.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams(); // Esto parece estar bien
  //Reemplazar la siguiente línea con la lógica para obtener los detalles del producto por su ID
  const productDetails = { id: 1, name: "Producto 1", image: "image1.jpg", description: "Descripción del producto" };

  return (
    <div className="item-detail-container">
      <div className="product-detail">
        <img src={productDetails.image} alt={productDetails.name} />
        <h2>{productDetails.name}</h2>
        <p>{productDetails.description}</p>
      </div>
    </div>
  );
};

export default ItemDetailContainer;

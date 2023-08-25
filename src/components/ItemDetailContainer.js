import React from 'react';
import { useParams } from 'react-router-dom';

const productsData = [
  { id: 1, name: "Producto 1", category: "categoria1", image: "image1.jpg", description: "Descripción del producto 1" },
  { id: 2, name: "Producto 2", category: "categoria2", image: "image2.jpg", description: "Descripción del producto 2" },
  { id: 3, name: "Producto 3", category: "categoria1", image: "image3.jpg", description: "Descripción del producto 3" },
];

const ItemDetailContainer = () => {
  const { id } = useParams();
  const productDetails = productsData.find(product => product.id === parseInt(id));

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

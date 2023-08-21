// ItemListContainer.js
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id: categoryId } = useParams(); // Esto parece estar bien
  const location = useLocation();

  useEffect(() => {
    if (categoryId) {
      // Lógica para cargar productos por categoría
      // Ejemplo temporal para evitar el error
      const productsByCategory = [
        { id: 1, name: "Producto 1", image: "image1.jpg" },
        { id: 2, name: "Producto 2", image: "image2.jpg" },
      ];
      setProducts(productsByCategory);
    } else {
      // Lógica para cargar todos los productos
      // Ejemplo temporal para evitar el error
      const allProducts = [
        { id: 1, name: "Producto 1", image: "image1.jpg" },
        { id: 2, name: "Producto 2", image: "image2.jpg" },
        { id: 3, name: "Producto 3", image: "image3.jpg" },
      ];
      setProducts(allProducts);
    }
  }, [categoryId, location]);

  return (
    <div className="item-list-container">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <a href={`/item/${product.id}`}>Ver detalles</a>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;

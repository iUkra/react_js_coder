import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const productsData = [
  { id: 1, name: "Producto 1", category: "categoria1", image: "image1.jpg" },
  { id: 2, name: "Producto 2", category: "categoria2", image: "image2.jpg" },
  { id: 3, name: "Producto 3", category: "categoria3", image: "image3.jpg" },
];

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id: categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      const productToShow = productsData.find(product => product.category === `categoria${categoryId}`);
      if (productToShow) {
        setProducts([productToShow]);
      } else {
        setProducts([]);
      }
    } else {
      setProducts(productsData);
    }
  }, [categoryId]);

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



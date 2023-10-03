import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItems = (x) => {
    if (!lookItem(x)) {
      setItems([...items, x]);
    } else {
      alert('Ya está en el carrito');
    }
  }

  const lookItem = (b) => {
    return items.some(item => item.id === b.id);
  }

  const clear = () => {
    setItems([]);
  }

  const eliminarId = (h) => {
    const newItems = items.filter((_, index) => index !== h);
    setItems(newItems);
  }

  const upCant = (h) => {
    if (items[h].cantidad < items[h].stock) {
      const newItems = [...items];
      newItems[h].cantidad++;
      setItems(newItems);
    } else {
      alert('No se puede aumentar más');
    }
  }

  const downCant = (h) => {
    const newItems = [...items];
    newItems[h].cantidad--;
    if (newItems[h].cantidad === 0) {
      eliminarId(h);
    } else {
      setItems(newItems);
    }
  }

  return (
    <CartContext.Provider value={{ items, addItems, clear, eliminarId, upCant, downCant }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}

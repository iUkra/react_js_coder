import React, { createContext, useContext } from 'react';

class CartContextClass {
  constructor() {
    this.items = [];
  }

  addItems(x) {
    if (this.items.length !== 0) {
      if (!this.lookItem(x)) {
        this.items.push(x);
      } else {
        alert('Ya está en el carrito');
      }
    } else {
      this.items.push(x);
    }
  }

  lookItem(b) {
    return this.items.some(item => item.id === b.id);
  }

  clear() {
    this.items = [];
  }

  eliminarId(h) {
    this.items.splice(h, 1);
  }

  upCant(h) {
    if (this.items[h].cantidad === this.items[h].stock) {
      alert('No se puede aumentar más');
    } else {
      this.items[h].cantidad++;
    }
  }

  downCant(h) {
    this.items[h].cantidad--;
    if (this.items[h].cantidad === 0) {
      this.eliminarId(h);
    }
  }
}

const CartContext = createContext(new CartContextClass());

export function useCartContext() {
  return useContext(CartContext);
}

export default CartContext;



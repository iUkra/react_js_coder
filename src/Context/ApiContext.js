import React, { createContext } from 'react';

class ApiContextClass {
  constructor() {
    this.items = [];
    this.email = "";
    this.name = "";
    this.phone = "";
    this.lastPurchase = "";
  }
}

const ApiContext = createContext(new ApiContextClass());

export default ApiContext;

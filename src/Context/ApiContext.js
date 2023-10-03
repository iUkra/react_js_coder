import React, { createContext, useContext, useState } from 'react';

const ApiContext = createContext();

export function ApiProvider({ children }) {
  const [apiState, setApiState] = useState({
    items: [],
    email: "",
    name: "",
    phone: "",
    lastPurchase: ""
  });

  return (
    <ApiContext.Provider value={{ apiState, setApiState }}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApiContext() {
  return useContext(ApiContext);
}

export default ApiContext;
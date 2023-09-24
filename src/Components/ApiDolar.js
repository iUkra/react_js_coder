import { useState, useEffect } from 'react';
import axios from "axios";

const ApiDolar = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.bluelytics.com.ar/v2/latest");
        const valorDolar = response.data.blue.value_sell;
        setData(valorDolar);
      } catch (error) {
        console.error("Error al obtener el valor del dólar:", error);
      }
    };

    fetchData();
  }, []);

  return data;
};

export default ApiDolar;
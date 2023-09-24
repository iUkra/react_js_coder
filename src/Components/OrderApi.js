import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase/firebaseConfig";

const OrderApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      try {
        const arrEmp = [];
        const q = collection(db, "order");
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          arrEmp.push({ ...doc.data(), price: doc.data().price, id: doc.id });
        });

        setData(arrEmp);
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };

    getApi();
  }, []);

  return data;
};

export default OrderApi;
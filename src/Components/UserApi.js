
import { useState, useEffect } from 'react';
import { collection, getFirestore, query, getDocs } from 'firebase/firestore';



const db = getFirestore();

const FireBaseApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const arrEmp = [];
      const q = query(collection(db, "users"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        arrEmp.push({ ...doc.data(), id: doc.id });
      });
      setData(arrEmp);
    };

    getUsers();
  }, []);

  return data;
};

export default FireBaseApi;



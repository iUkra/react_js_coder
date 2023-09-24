import { useState, useEffect } from 'react';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../services/firebase/firebaseConfig';

const UserApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const arrEmp = [];
        const q = query(collection(db, "users"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          arrEmp.push({ ...doc.data(), id: doc.id });
        });
        setData(arrEmp);
      } catch (error) {
        console.error("Error al cargar datos de Firebase:", error);
      }
    };

    getUsers();
  }, []);

  return data;
};

export default UserApi;
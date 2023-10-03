import { useState, useEffect } from 'react';
import {collection, query, getDocs } from 'firebase/firestore';
import { db } from '../services/firebase/firebaseConfig';

const FireBaseApi = () =>{

const [data, setData] = useState();
useEffect(() => {
  const getProducts = async () =>{
      const arrEmp= [];
      const q = query(collection(db, "products"));
      const querySnapshot = await getDocs(q); 
      querySnapshot.forEach((doc) => {
      arrEmp.push({...doc.data(),price: doc.data().price, id:doc.id}) 
      })
      setData(arrEmp)
  }
  getProducts();
},[]);

return data
}
export default FireBaseApi;
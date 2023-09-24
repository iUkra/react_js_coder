import { collection, addDoc, updateDoc, doc, setDoc, query, getDocs } from "firebase/firestore";
import { db } from "../services/firebase/firebaseConfig";
import { createBrowserHistory } from "history";

const PushApi = (props) => {
  let finalPrice = 0;
  const history = createBrowserHistory({ forceRefresh: true });

  props.items.forEach((x) => {
    finalPrice += x.price * x.cantidad;
  });

  addDoc(collection(db, "order"), {
    buyer: props.name,
    items: props.items,
    date: new Date().toLocaleString() + "",
    total: finalPrice < 10000 ? finalPrice + 1000 : finalPrice,
    phone: props.phone,
    email: props.email,
  })
    .then(function (docRef) {
      props.items.forEach((x) => {
        const stocked = parseInt(x.cantidad);
        const productsUpdated = doc(db, "products", x.id);
        updateDoc(productsUpdated, {
          stock: x.stock - stocked,
        });
      });

      const getUsers = async () => {
        const q = query(collection(db, "users"));
        const querySnapshot = await getDocs(q);
        const emailQuery = doc(db, "users", `${props.email}`);
        let isTruly = false;

        querySnapshot.forEach((doc) => {
          if (doc.id === props.email) {
            setDoc(emailQuery, {
              ...doc.data(),
              purchase: [...doc.data().purchase, docRef.id],
            });
            isTruly = true;
          }
        });

        if (!isTruly) {
          setDoc(emailQuery, {
            buyer: props.name,
            phone: props.phone,
            email: props.email,
            purchase: [docRef.id],
          });
        }

        history.push(`/${props.email}/${docRef.id}`);
        history.go(0);
      };
      getUsers();
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
};

export default PushApi;
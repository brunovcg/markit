import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { addDoc, collection, query, onSnapshot } from "firebase/firestore";

function useFirebase(setData: Function) {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  const writeFirebase = (payload: unknown) => {
    const payloadData = { data: payload };

    addDoc(collection(db, "marks"), payloadData)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  const getFirebase = () => {
    const q = query(collection(db, "marks"));
    onSnapshot(q, (querySnapshot) => {
      const recoverData = querySnapshot.docs.map((item) => item.data());

      setData(recoverData[recoverData.length - 1]?.data || []);

      console.log(recoverData[recoverData.length - 1]?.data )
    });
  };

  return { writeFirebase, getFirebase };
}

export default useFirebase;

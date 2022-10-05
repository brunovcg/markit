import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {
  addDoc,
  doc,
  updateDoc,
  collection,
  query,
  onSnapshot,
} from "firebase/firestore";
import { useState } from "react";

function useFirebase(setData: Function) {
  const [docId, setDocId] = useState("");

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

    if (!docId) {
      addDoc(collection(db, "marks"), payloadData)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    } else {
      const ref = doc(db, "marks", "kmpt6Sk0h0C5BaeAiRQc");
      updateDoc(ref, payloadData);
    }
  };

  const getFirebase = () => {
    const q = query(collection(db, "marks"));
    onSnapshot(q, (querySnapshot) => {
      const recoverData = querySnapshot.docs[0]?.data().data;
      const id = querySnapshot.docs[0]?.id;
      setDocId(id);
      setData(recoverData ?? []);
    });
  };

  return { writeFirebase, getFirebase };
}

export default useFirebase;

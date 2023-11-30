import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBXAncI71BArlCJX67aBocaESm8fDlkT5I",
    authDomain: "fir-blog-app-b6600.firebaseapp.com",
    projectId: "fir-blog-app-b6600",
    storageBucket: "fir-blog-app-b6600.appspot.com",
    messagingSenderId: "62031275959",
    appId: "1:62031275959:web:4deef02d721a9063d1ea32"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
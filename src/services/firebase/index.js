
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAPnG3O91Vkiz8T-kuu1adEn8zy8xyZv7U",
  authDomain: "backendpmarchan.firebaseapp.com",
  projectId: "backendpmarchan",
  storageBucket: "backendpmarchan.appspot.com",
  messagingSenderId: "265266374487",
  appId: "1:265266374487:web:9adbddd04d1cb3fdfbc012"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
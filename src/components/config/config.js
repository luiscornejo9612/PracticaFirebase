
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsF7I6nTGtXlY_fr1JYW03IoL0TLne4sg",
  authDomain: "practicareact-1f712.firebaseapp.com",
  projectId: "practicareact-1f712",
  storageBucket: "practicareact-1f712.appspot.com",
  messagingSenderId: "625872450742",
  appId: "1:625872450742:web:d065d10adb40e368de2217",
  measurementId: "G-6FQYJ7W5S3"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;


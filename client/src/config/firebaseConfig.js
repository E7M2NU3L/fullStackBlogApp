// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    collection,
    getDocs,
    getFirestore
} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

// set up firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDx5JHDZ-iqpCgHtKPRjyoD6dKHcqDQqVM",
    authDomain: "jehr-blog.firebaseapp.com",
    projectId: "jehr-blog",
    storageBucket: "jehr-blog.appspot.com",
    messagingSenderId: "467042903265",
    appId: "1:467042903265:web:dd0ade323b788c561103a0",
    measurementId: "G-0QRXS89G7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// deploy the project
const login = "firebase login";
const initProject = "firebase init";
const deployProject = "firebase deploy";

// creating the Database Instance
const db = getFirestore();

// get the collection
const userData = collection(db, 'userData');

// getting the Data from the collection
getDocs(userData).then((data) => {
    console.log(data.docs);
}).catch((err) => {
    console.log(err);
})

// get the storage
export const storage = getStorage(app);
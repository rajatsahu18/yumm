import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCQDGTl15FawpkYhvyvgtL-QVfH_GkxnXs",
    authDomain: "restaurantapp-77433.firebaseapp.com",
    databaseURL: "https://restaurantapp-77433-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-77433",
    storageBucket: "restaurantapp-77433.appspot.com",
    messagingSenderId: "16181335740",
    appId: "1:16181335740:web:6a37f2dbc2c3d53e90e2b9"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage };
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyATHAHDt1RCCqBiBxXdCCq3zE3eEOQVgIE",
    authDomain: "wonderguard-051516-2c7fd.firebaseapp.com",
    projectId: "wonderguard-051516-2c7fd",
    storageBucket: "wonderguard-051516-2c7fd.firebasestorage.app",
    messagingSenderId: "206710874149",
    appId: "1:206710874149:web:abc0c16169b77e7bf75fcc",
    measurementId: "G-ZXK41GBCRV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

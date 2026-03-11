// import '@tanstack/react-start/server-only'
// import firebase from 'firebase-admin';
// import { getAuth as getAdminAuth } from "firebase-admin/auth";
// import { getFirestore as getAdminFirestore } from "firebase-admin/firestore";
// import { getStorage as getAdminStorage } from "firebase-admin/storage";

// function getApp() {
//     if (firebase?.apps?.length > 0) return firebase.app();

//     try {
//         const serviceAccount: firebase.ServiceAccount = {
//             projectId: process.env["PROJECT_ID"],
//             clientEmail: process.env["CLIENT_EMAIL"],
//             privateKey: process.env["PRIVATE_KEY"]?.replace(/\\n/g, '\n'),
//         };

//         return firebase.initializeApp({
//             credential: firebase.credential.cert(serviceAccount),
//         });
//     } catch (error) {
//         console.error("CRITICAL: Failed to parse Service Account JSON:", error);
//         throw error;
//     }
// }

// export const app = getApp();
// export const db = getAdminFirestore(app);
// export const auth = getAdminAuth(app);
// export const storage = getAdminStorage(app);
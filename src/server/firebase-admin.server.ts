import '@tanstack/react-start/server-only'
import firebase from "firebase-admin";
import { getAuth as getAdminAuth } from "firebase-admin/auth";
import { getFirestore as getAdminFirestore } from "firebase-admin/firestore";
import { getStorage as getAdminStorage } from "firebase-admin/storage";

function getApp() {
    if (firebase.apps.length > 0) return firebase.app();

    const rawKey = process.env.GCP_SERVICE_ACCOUNT;

    if (!rawKey) {
        console.error("CRITICAL: GCP_SERVICE_ACCOUNT is missing from environment variables.");
        throw new Error("GCP_SERVICE_ACCOUNT is not defined");
    }

    try {
        const serviceAccount = JSON.parse(rawKey.replace(/\\n/g, '\n')) as firebase.ServiceAccount;
        return firebase.initializeApp({
            credential: firebase.credential.cert(serviceAccount),
        });
    } catch (error) {
        console.error("CRITICAL: Failed to parse Service Account JSON:", error);
        throw error;
    }
}

export const app = getApp();
export const db = getAdminFirestore(app);
export const auth = getAdminAuth(app);
export const storage = getAdminStorage(app);
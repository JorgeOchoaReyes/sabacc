import '@tanstack/react-start/server-only'
import * as firebase from 'firebase-admin';

function getApp() {
    if (firebase.apps.length > 0) return firebase.app();

    const rawKey = process.env['GCP_ADMIN_ACCOUNT'];

    if (!rawKey) {
        console.error("CRITICAL: GCP_SERVICE_ACCOUNT is missing from environment variables.");
        throw new Error("GCP_SERVICE_ACCOUNT is not defined");
    }

    const decodedKey = Buffer.from(rawKey, 'base64').toString('utf-8');

    const cleanKey = decodedKey
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '');
    try {
        const serviceAccount = JSON.parse(cleanKey) as firebase.ServiceAccount;
        return firebase.initializeApp({
            credential: firebase.credential.cert(serviceAccount),
        });
    } catch (error) {
        console.error("CRITICAL: Failed to parse Service Account JSON:", error);
        throw error;
    }
}

export const app = getApp();
export const db = firebase.firestore(app);
export const auth = firebase.auth(app);
export const storage = firebase.storage(app);
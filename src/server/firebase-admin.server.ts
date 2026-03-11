import '@tanstack/react-start/server-only'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

let admin: typeof import('firebase-admin') | null = null;

export function getAdmin() {
    if (!admin) {
        admin = require('firebase-admin');
        if (admin && admin.apps.length === 0) {
            try {
                const serviceAccount = {
                    projectId: process.env["PROJECT_ID"],
                    clientEmail: process.env["CLIENT_EMAIL"],
                    privateKey: process.env["PRIVATE_KEY"]?.replace(/\\n/g, '\n'),
                };
                admin.initializeApp({
                    credential: admin.credential.cert(serviceAccount),
                });
            } catch (error) {
                console.error("CRITICAL: Failed to initialize Firebase Admin:", error);
                throw error;
            }
        }
    }
    return admin!;
}

export const app = getAdmin().app();

export const db = getAdmin().firestore();
export const auth = getAdmin().auth();
export const storage = getAdmin().storage();


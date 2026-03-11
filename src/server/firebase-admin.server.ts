import admin from 'firebase-admin';

if (admin && admin.apps && admin.apps.length === 0) {
    try {
        const projectId = process.env["PROJECT_ID"];
        const clientEmail = process.env["CLIENT_EMAIL"];
        let privateKey = process.env["PRIVATE_KEY"];

        if (privateKey) {
            privateKey = privateKey.replace(/\\n/g, '\n');
            if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
                privateKey = privateKey.slice(1, -1);
            }
        }

        const serviceAccount = {
            projectId,
            clientEmail,
            privateKey,
        };

        if (serviceAccount.projectId && serviceAccount.clientEmail && serviceAccount.privateKey) {
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount),
            });
        } else {
            admin.initializeApp();
        }
    } catch (error) {
        console.error("CRITICAL: Failed to initialize Firebase Admin:", error);
        throw error;
    }
}

export { admin };
export const app = admin.app();
export const db = admin.firestore();
export const auth = admin.auth();
export const storage = admin.storage();


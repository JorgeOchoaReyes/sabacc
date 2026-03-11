// import { auth } from './firebase-admin.server';
// import type { DecodedIdToken } from 'firebase-admin/auth';

// export async function withAuth(
//     request: Request,
//     handler: (user: DecodedIdToken) => Promise<Response> | Response
// ): Promise<Response> {
//     const authHeader = request.headers.get('authorization');

//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//         return Response.json(
//             { error: 'Unauthorized - Missing or invalid Bearer token' },
//             { status: 401 }
//         );
//     }

//     const token = authHeader.split('Bearer ')[1];

//     try {
//         const decodedUser = await auth.verifyIdToken(token);
//         return handler(decodedUser);
//     } catch (error) {
//         console.error('Error verifying Firebase auth token:', error);
//         return Response.json(
//             { error: 'Unauthorized - Invalid Firebase token' },
//             { status: 401 }
//         );
//     }
// }

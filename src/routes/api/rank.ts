import { createFileRoute } from '@tanstack/react-router'
import { db } from '../../server/firebase-admin.server'
import { withAuth } from '../../server/auth'

export const Route = createFileRoute('/api/rank')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        return withAuth(request, async (user) => {
          try {
            const data = await db.collection('users').doc(user.uid).get();

            return Response.json({
              uid: user.uid,
              data: data.data()
            })
          } catch (error) {
            console.error(error)
            return Response.json(
              { error: error },
              { status: 500 }
            )
          }
        });
      },
    },
  },
})

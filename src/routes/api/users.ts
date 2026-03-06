import { createFileRoute } from '@tanstack/react-router'
// import { db } from '../../server/firebase-admin.server'

export const Route = createFileRoute('/api/users')({
  server: {
    handlers: {
      GET: async ({ request }) => {

        try {
          // const data = await db.collection('test').doc('test').get();

          return Response.json(
            { data: 'test' }
          )
        } catch (error) {
          console.error(error)
          return Response.json(
            { error: error },
            { status: 500 }
          )
        }
      },
    },
  },
})

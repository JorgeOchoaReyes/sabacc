import { queryOptions } from '@tanstack/react-query'
import { notFound } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import axios from 'redaxios'

export type PostType = {
  id: string
  title: string
  body: string
}

const API_URL = process.env.VITE_API_URL;

export const fetchPosts = createServerFn({ method: 'GET' }).handler(
  async () => {
    return axios
      .get<Array<PostType>>(`${API_URL}/posts`)
      .then((r) => r.data.slice(0, 10))
  },
)

export const postsQueryOptions = () =>
  queryOptions({
    queryKey: ['posts'],
    queryFn: () => fetchPosts(),
  })

export const fetchPost = createServerFn({ method: 'GET' })
  .inputValidator((d: string) => d)
  .handler(async ({ data }) => {
    console.info(`Fetching post with id ${data}...`)
    const post = await axios
      .get<PostType>(`${API_URL}/posts/${data}`)
      .then((r) => r.data)
      .catch((err) => {
        console.error(err)
        if (err.status === 404) {
          throw notFound()
        }
        throw err
      })

    return post
  })

export const postQueryOptions = (postId: string) =>
  queryOptions({
    queryKey: ['post', postId],
    queryFn: () => fetchPost({ data: postId }),
  })

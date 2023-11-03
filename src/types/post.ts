import { User } from './user'

export interface Post {
  id: string
  title: string
  subtitle: string
  description: string
  image?: string
  createdAt: string
  author: User
  authorId: string
}

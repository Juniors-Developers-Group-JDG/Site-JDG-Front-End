import CardPost from '@/app/components/CardPost'
import { Post } from '@/types/post'
import { Metadata } from 'next'

export async function generateMetadata({
  params: { postId },
}: {
  params: { postId: string }
}): Promise<Metadata> {
  // fetch data
  const { title } = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/post/${postId}`,
  ).then((res) => res.json())

  return {
    title: `JDG | ${title}`,
  }
}

export default async function Post({
  params: { postId },
}: {
  params: { postId: string }
}) {
  const post: Post = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/post/${postId}`,
  ).then((res) => res.json())

  return <CardPost {...post} />
}

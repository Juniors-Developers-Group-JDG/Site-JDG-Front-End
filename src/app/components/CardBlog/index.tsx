'use client'
import postPlaceholderPng from '@/assets/postPlaceholder.png'
import { format } from 'date-fns'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import { CardBlogProps } from './types'

export default function CardBlog({ date, image, title, id }: CardBlogProps) {
  const route = useRouter()
  const handlePushRoute = useCallback(() => {
    route.push(`/post/${id}`)
  }, [id, route])

  const parsedDate = format(new Date(date), 'dd/MM/yyyy')

  return (
    <article
      onClick={handlePushRoute}
      className="flex h-96 w-64 flex-col items-center justify-between gap-6 overflow-hidden rounded-2xl border border-secondary-850 bg-primary-900 transition-all ease-in-out hover:cursor-pointer hover:border-primary-400 md:w-72 xl:w-80"
    >
      {image ? (
        <figure className="w-full">
          <Image
            src={image}
            alt="blog-thumb"
            className="h-full w-full object-cover"
            width={500}
            height={500}
            priority
          />
        </figure>
      ) : (
        <figure className="w-full">
          <Image
            src={postPlaceholderPng}
            alt="blog-thumb"
            className="h-full w-full object-cover"
            width={500}
            height={500}
            priority
          />
        </figure>
      )}
      <section className="flex h-36 w-full flex-col items-start justify-center gap-8 p-6">
        <h1 className="text-base font-bold leading-tight text-secondary-50">
          {title}
        </h1>
        <span className="text-base leading-5 text-primary-400">
          {parsedDate}
        </span>
      </section>
    </article>
  )
}

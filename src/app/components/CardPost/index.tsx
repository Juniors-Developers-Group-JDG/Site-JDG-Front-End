'use client'
import postPlaceholderPng from '@/assets/postPlaceholder.png'
import { format } from 'date-fns'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { CardPostProps } from './types'

const CardPost = ({
  title,
  subtitle,
  description,
  image,
  createdAt,
}: CardPostProps) => {
  const route = useRouter()
  const handlePushRoute = useCallback(() => {
    route.back()
  }, [route])

  const parsedDate = format(new Date(createdAt), 'dd/MM/yyyy')

  return (
    <section className="container flex flex-col items-center justify-center gap-4 py-10">
      <h1 className="max-w-2xl text-center text-2xl font-semibold tracking-wider text-primary md:text-3xl">
        {title}
      </h1>
      <span className="text-xs text-secondary-500">{parsedDate}</span>

      <BsArrowLeft
        onClick={handlePushRoute}
        className="my-4 h-12 w-12 self-start rounded-full border border-secondary-500 border-opacity-30 p-2 text-secondary-50 transition-all ease-in-out hover:cursor-pointer hover:border-opacity-100"
      />

      <article className="">
        {image ? (
          <figure className="h-96 w-full">
            <Image
              src={image}
              width={1000}
              height={1000}
              className="h-full w-full rounded-t-lg object-cover"
              alt="post-image"
            />
          </figure>
        ) : (
          <figure className="h-96 w-full">
            <Image
              src={postPlaceholderPng}
              alt="post-image"
              className="h-full w-full rounded-t-lg object-cover"
              width={1000}
              height={1000}
              priority
            />
          </figure>
        )}

        <h2 className="mt-16 text-2xl font-bold text-secondary">{subtitle}</h2>
        <p className="mt-4 text-base leading-9 text-secondary-500">
          {description}
        </p>
      </article>
    </section>
  )
}
export default CardPost

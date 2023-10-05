import Link from 'next/link'
import Image from 'next/image'
import { PostsMock } from '@/mocks/Posts'
import CardBlog from '@/app/components/CardBlog'

export default function Blog() {
  return (
    <section className="container flex flex-col items-center justify-center px-4 md:px-0">
      <header className="mt-10 flex flex-col items-center justify-center gap-4">
        <h1 className="max-w-2xl text-center text-2xl font-semibold tracking-wider text-primary md:text-3xl">
          Blog da JDG
        </h1>

        <p className="mt-4 text-center text-base leading-9 text-secondary-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
          alias tempora eaque corporis debitis assumenda quaerat numquam, saepe
          molestiae esse cupiditate architecto nihil dolore odio molestias
          laborum asperiores impedit sit?
        </p>
      </header>

      <section
        key={PostsMock[1].id}
        className="mt-14 flex h-full w-full flex-col-reverse items-center justify-between overflow-hidden rounded-2xl bg-primary-900 xl:h-96 xl:flex-initial xl:flex-row xl:gap-8"
      >
        <article className="flex w-full flex-col items-center justify-between gap-2 p-6 xl:h-full xl:w-1/2">
          <h1 className="text-2xl font-bold leading-tight text-secondary-50 md:text-3xl">
            {PostsMock[1].title}
          </h1>
          <p className="h-48 overflow-hidden text-base leading-8 text-secondary-500">
            {PostsMock[1].description}
          </p>
          <Link
            href={`/views/post/${PostsMock[1].id}`}
            className="self-end rounded-xl bg-primary-400 px-8 py-4 text-base font-bold leading-5"
          >
            Ler mais
          </Link>
        </article>

        <figure className="h-full xl:w-1/2">
          <Image
            src={PostsMock[1].image}
            alt="blog-thumb"
            className="h-full w-full object-cover"
            width={1000}
            height={1000}
            priority
          />
        </figure>
      </section>

      <section className="mt-14 grid grid-cols-1 gap-20 md:grid-cols-2 xl:grid-cols-3">
        {PostsMock.map((post) => (
          <CardBlog
            key={post.id}
            id={post.id}
            image={post.image}
            title={post.title}
            date={post.createdAt}
          />
        ))}
      </section>
    </section>
  )
}

'use client'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import { CardVacanciesProps } from './types'

const CardVacancies = ({
  stack,
  title,
  description,
  id,
}: CardVacanciesProps) => {
  const route = useRouter()
  const handlePushRoute = useCallback(() => {
    route.push(`/vacancy/${id}`)
  }, [id, route])
  return (
    <section className="min-w-96 my-2 h-full w-full rounded-lg border border-l-4 border-primary border-y-transparent border-r-transparent bg-primary-900 p-4 xl:w-[30rem]">
      <span className="rounded-lg bg-primary-800 p-2 text-xs text-secondary">
        Estamos procurando um novo
      </span>
      <article className="mt-4">
        <h1 className="text-base font-semibold tracking-wider text-secondary">
          {title}
        </h1>
        {stack.map((tech, index) => (
          <span
            key={tech}
            data-tech={tech}
            className="relative p-2 text-xs tracking-wider text-primary-400"
          >
            {tech}
            {index < stack.length - 1 && (
              <span className="absolute top-[5.5px] pl-[5.5px] text-primary-400">
                .
              </span>
            )}
          </span>
        ))}
        <p className="my-4 max-h-16 overflow-hidden text-xs tracking-wide text-secondary-500">
          {description}
        </p>

        <button
          onClick={handlePushRoute}
          className="bg-gradient-btn mt-4 h-12 w-full rounded-lg border border-primary text-base text-secondary outline-none transition-all ease-in-out hover:bg-primary-400 hover:font-semibold hover:text-secondary-800"
        >
          Voluntariar-se
        </button>
      </article>
    </section>
  )
}

export default CardVacancies

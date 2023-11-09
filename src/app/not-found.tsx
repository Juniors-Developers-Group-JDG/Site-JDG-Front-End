import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="bg-gradient-center container my-20 flex flex-col items-center justify-center py-20">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <article className="my-8 flex flex-col items-center justify-center gap-4">
        <h3 className="text-center text-base font-medium text-secondary md:text-3xl">
          Página não encontrada!
        </h3>
        <p className="text-center text-base font-medium text-secondary md:text-3xl">
          A página que você esta procurando não existe.
        </p>
      </article>
      <Link
        className="bg-gradient-btn mt-16 flex h-12 items-center justify-center rounded-lg border border-primary px-6 text-center text-xs text-secondary outline-none transition-all ease-in-out hover:bg-primary-400 hover:font-semibold hover:text-secondary-800 md:text-base
        "
        href={'/'}
      >
        Voltar para a Home
      </Link>
    </section>
  )
}

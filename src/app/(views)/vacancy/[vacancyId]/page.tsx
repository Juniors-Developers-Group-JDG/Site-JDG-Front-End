import VacancyCardPage from '@/app/components/VacancyDetailsPage'
import { Vacancy } from '@/types/Vacancy'
import { Metadata } from 'next'

export async function generateMetadata({
  params: { vacancyId },
}: {
  params: { vacancyId: string }
}): Promise<Metadata> {
  // fetch data
  const { title } = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/job-opportunities/${vacancyId}`,
  ).then((res) => res.json())

  return {
    title: `JDG | Vaga ${title}`,
  }
}

export default async function Vacancy({
  params: { vacancyId },
}: {
  params: { vacancyId: string }
}) {
  const vacancy: Vacancy = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/job-opportunities/${vacancyId}`,
  ).then((res) => res.json())

  return <VacancyCardPage {...vacancy} />
}

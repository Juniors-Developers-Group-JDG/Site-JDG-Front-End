import OpportunityCardPage from '@/app/components/OpportunityDetailsPage'
import { Opportunity } from '@/types/Opportunity'
import { Metadata } from 'next'

export async function generateMetadata({
  params: { opportunityId },
}: {
  params: { opportunityId: string }
}): Promise<Metadata> {
  // fetch data
  const { title } = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/job-opportunities/${opportunityId}`,
  ).then((res) => res.json())

  return {
    title: `JDG | Vaga ${title}`,
  }
}

export default async function Opportunity({
  params: { opportunityId },
}: {
  params: { opportunityId: string }
}) {
  const opportunity: Opportunity = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/job-opportunities/${opportunityId}`,
  ).then((res) => res.json())

  return (
    <OpportunityCardPage {...opportunity} jobOpportunityId={opportunityId} />
  )
}

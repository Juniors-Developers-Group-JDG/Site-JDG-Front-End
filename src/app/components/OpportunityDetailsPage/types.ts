import { opportunityFormPropsSchema } from '@/zod'
import { z } from 'zod'

export type CardOpportunitiesProps = {
  id: string
  title: string
  stack: string[]
  category: string
  description: string
  endDate: string
  jobOpportunityId: string
}

export type OpportunityFormProps = z.infer<typeof opportunityFormPropsSchema>

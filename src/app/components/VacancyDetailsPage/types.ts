import { vacancyFormPropsSchema } from '@/zod'
import { z } from 'zod'

export type CardVacanciesProps = {
  id: string
  title: string
  stack: string[]
  category: string
  description: string
  endDate: string
  jobOpportunityId: string
}

export type VacancyFormProps = z.infer<typeof vacancyFormPropsSchema>

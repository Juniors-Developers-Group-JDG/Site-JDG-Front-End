import { vacancyFormPropsSchema } from '@/zod'
import { z } from 'zod'

export type CardVacanciesProps = {
  id: number
  title: string
  stack: string[]
  category: string
  description: string
  endDate: string
}

export type VacancyFormProps = z.infer<typeof vacancyFormPropsSchema>

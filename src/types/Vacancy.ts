export type VacancyStatus = 'OPENED' | 'RECRUITING' | 'CLOSED'

export interface Vacancy {
  id: string
  title: string
  description: string
  category: string
  status: VacancyStatus
  stack: string[]
  candidates: string[]
}

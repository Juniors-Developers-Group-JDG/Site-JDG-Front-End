export type OpportunityStatus = 'OPENED' | 'RECRUITING' | 'CLOSED'

export interface Opportunity {
  id: string
  title: string
  description: string
  category: string
  status: OpportunityStatus
  stack: string[]
  candidates: string[]
  endDate: string
}

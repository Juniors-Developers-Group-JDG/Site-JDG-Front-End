'use client'

import { opportunitiesContext } from '@/context/Opportunities'
import { useContext } from 'react'

export function useOpportunities() {
  const context = useContext(opportunitiesContext)

  return context
}

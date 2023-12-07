'use client'

import { useFetch } from '@/hooks/useFetch'
import { Opportunity } from '@/types/Opportunity'
import { createContext, useEffect } from 'react'
import { toast } from 'react-toastify'

interface OpportunitiesContextData {
  opportunities: Opportunity[]
  isLoading: boolean
}

export const opportunitiesContext = createContext<OpportunitiesContextData>(
  {} as OpportunitiesContextData,
)

interface OpportunitiesProviderProps {
  children: React.ReactNode
}

export function OpportunitiesProvider({
  children,
}: OpportunitiesProviderProps) {
  const {
    data: opportunities = [],
    error,
    isLoading,
  } = useFetch<Opportunity[]>('/job-opportunities')

  useEffect(() => {
    if (error) {
      toast.error('Erro ao carregar as vagas!')
    }
  }, [error])

  return (
    <opportunitiesContext.Provider value={{ opportunities, isLoading }}>
      {children}
    </opportunitiesContext.Provider>
  )
}

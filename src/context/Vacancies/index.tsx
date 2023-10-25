'use client'

import { useFetch } from '@/hooks/useFetch'
import { Vacancy } from '@/types/Vacancy'
import { createContext, useEffect } from 'react'
import { toast } from 'react-toastify'

interface VacanciesContextData {
  vacancies: Vacancy[]
  isLoading: boolean
}

export const vacanciesContext = createContext<VacanciesContextData>(
  {} as VacanciesContextData,
)

interface VacanciesProviderProps {
  children: React.ReactNode
}

export function VacanciesProvider({ children }: VacanciesProviderProps) {
  const {
    data: vacancies = [],
    error,
    isLoading,
  } = useFetch<Vacancy[]>('/job-opportunities')

  useEffect(() => {
    if (error) {
      toast.error('Erro ao carregar as vagas!')
    }
  }, [error])

  return (
    <vacanciesContext.Provider value={{ vacancies, isLoading }}>
      {children}
    </vacanciesContext.Provider>
  )
}
'use client'

import { vacanciesContext } from '@/context/Vacancies'
import { useContext } from 'react'

export function useVacancies() {
  const context = useContext(vacanciesContext)

  return context
}

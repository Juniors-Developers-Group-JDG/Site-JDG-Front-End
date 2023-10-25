'use client'
import { useVacancies } from '@/hooks/useVacancies'
import { useState } from 'react'
import CardVacancies from '../CardVacancies'
import VacancieDropdown from '../VacancieDropdown'
import { VacancieInputFilter } from '../VacancieInputFilter'
import VacanciesHeader from '../VacanciesHeader'

const VacanciesPage = () => {
  const [searchText, setSearchText] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const { vacancies } = useVacancies()

  const filteredVacancies = vacancies.filter((vacancie) => {
    const categoryMatch =
      !selectedCategory || vacancie.category === selectedCategory
    const textMatch =
      !searchText ||
      (typeof searchText === 'string' &&
        vacancie.title.toLowerCase().includes(searchText.toLowerCase()))

    return categoryMatch && textMatch
  })

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName)
    setSearchText('')
  }

  const handleInputFilter = (input: string) => {
    setSearchText(input)
    setSelectedCategory('')
  }

  return (
    <section
      data-testid="vacancies-page"
      className="container flex flex-col items-center justify-center"
    >
      <VacanciesHeader />
      <section className="mb-10 mt-20 flex w-full flex-col items-end justify-between gap-4 md:items-center lg:flex-row">
        <VacancieInputFilter
          value={searchText}
          onChange={(e) => handleInputFilter(e.target.value)}
        />
        <VacancieDropdown handleCategorySelect={handleCategorySelect} />
      </section>

      <section className="flex w-full flex-col items-center justify-center md:flex-row md:flex-wrap md:justify-between">
        {filteredVacancies &&
          filteredVacancies.map((vacancie) => (
            <CardVacancies key={vacancie.id} {...vacancie} />
          ))}
      </section>
    </section>
  )
}

export default VacanciesPage

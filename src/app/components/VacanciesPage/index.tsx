'use client'
import { useVacancies } from '@/hooks/useVacancies'
import { useState } from 'react'
import CardVacancies from '../CardVacancies'
import { LoadingFallback } from '../LoadingFallback'
import VacancieDropdown from '../VacancieDropdown'
import { VacancieInputFilter } from '../VacancieInputFilter'
import VacanciesHeader from '../VacanciesHeader'

const VacanciesPage = () => {
  const [searchText, setSearchText] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    '',
  )

  const { vacancies, isLoading } = useVacancies()

  // console.log({ vacancies })

  const filteredVacancies = vacancies.filter((vacancy) => {
    const categoryMatch =
      !selectedCategory ||
      vacancy.category.toLowerCase() === selectedCategory.toLowerCase()
    const textMatch =
      !searchText ||
      (typeof searchText === 'string' &&
        vacancy.title.toLowerCase().includes(searchText.toLowerCase()))

    return categoryMatch && textMatch
  })

  const handleCategorySelect = (categoryName: string | undefined) => {
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
        <VacancieDropdown
          handleCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
        />
      </section>

      <section className="flex w-full flex-col items-center justify-center md:flex-row md:flex-wrap md:justify-between">
        {isLoading ? (
          <LoadingFallback />
        ) : filteredVacancies.length > 0 ? (
          filteredVacancies.map((vacancy) => (
            <CardVacancies key={vacancy.id} {...vacancy} />
          ))
        ) : (
          <p className="w-full text-center text-2xl text-secondary opacity-70">
            Infelizmente não foi possível encontrar vagas
          </p>
        )}
      </section>
    </section>
  )
}

export default VacanciesPage

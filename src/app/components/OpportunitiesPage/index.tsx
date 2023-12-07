'use client'
import { useOpportunities } from '@/hooks/useOpportunities'
import { useState } from 'react'
import CardOpportunities from '../CardOpportunity'
import { LoadingFallback } from '../LoadingFallback'
import OpportunitiesHeader from '../OpportunitiesHeader'
import OpportunitieDropdown from '../OpportunityDropdown'
import { OpportunitieInputFilter } from '../OpportunityInputFilter'

const OpportunitiesPage = () => {
  const [searchText, setSearchText] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    '',
  )

  const { opportunities, isLoading } = useOpportunities()

  // console.log({ opportunities })

  const filteredOpportunities = opportunities.filter((opportunity) => {
    const categoryMatch =
      !selectedCategory ||
      opportunity.category.toLowerCase() === selectedCategory.toLowerCase()
    const textMatch =
      !searchText ||
      (typeof searchText === 'string' &&
        opportunity.title.toLowerCase().includes(searchText.toLowerCase()))

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
      data-testid="opportunities-page"
      className="container flex flex-col items-center justify-center"
    >
      <OpportunitiesHeader />
      <section className="mb-10 mt-20 flex w-full flex-col items-end justify-between gap-4 md:items-center lg:flex-row">
        <OpportunitieInputFilter
          value={searchText}
          onChange={(e) => handleInputFilter(e.target.value)}
        />
        <OpportunitieDropdown
          handleCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
        />
      </section>

      <section className="flex w-full flex-col items-center justify-center md:flex-row md:flex-wrap md:justify-between">
        {isLoading ? (
          <LoadingFallback />
        ) : filteredOpportunities.length > 0 ? (
          filteredOpportunities.map((opportunity) => (
            <CardOpportunities key={opportunity.id} {...opportunity} />
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

export default OpportunitiesPage

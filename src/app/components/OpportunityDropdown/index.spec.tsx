import { Categories } from '@/mocks/Categories'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import OpportunitieDropdown from '.'

const mockHandleCategorySelect = jest.fn()

describe('<OpportunitieDropdown />', () => {
  it('should render the dropdown button correctly', () => {
    render(
      <OpportunitieDropdown handleCategorySelect={mockHandleCategorySelect} />,
    )
    const dropdownButton = screen.getByText('Filtrar por')
    expect(dropdownButton).toBeInTheDocument()
    expect(dropdownButton).toHaveClass('text-sm text-secondary')
  })

  it('should open the dropdown menu on button click', async () => {
    render(
      <OpportunitieDropdown handleCategorySelect={mockHandleCategorySelect} />,
    )
    const dropdownButton = screen.getByText('Filtrar por')

    fireEvent.click(dropdownButton)

    await waitFor(() => {
      const dropdownMenu = screen.getByRole('menu')
      expect(dropdownMenu).toBeInTheDocument()
    })
  })

  it('should render category options correctly', async () => {
    render(
      <OpportunitieDropdown handleCategorySelect={mockHandleCategorySelect} />,
    )
    const dropdownButton = screen.getByText('Filtrar por')
    fireEvent.click(dropdownButton)

    await waitFor(() => {
      Categories[0].categories.forEach((category) => {
        const categoryOption = screen.getByText(category.name)
        expect(categoryOption).toBeInTheDocument()
        expect(categoryOption).toHaveClass('text-sm')
      })
    })
  })

  it('should call handleCategorySelect when a category is selected', async () => {
    render(
      <OpportunitieDropdown handleCategorySelect={mockHandleCategorySelect} />,
    )
    const dropdownButton = screen.getByText('Filtrar por')
    fireEvent.click(dropdownButton)

    const selectedCategory = Categories[0].categories[0]
    const categoryOption = screen.getByText(selectedCategory.name)

    fireEvent.click(categoryOption)

    await waitFor(() => {
      expect(mockHandleCategorySelect).toHaveBeenCalledTimes(1)
      expect(mockHandleCategorySelect).toHaveBeenCalledWith(
        selectedCategory.name,
      )
    })
  })
})

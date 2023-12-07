import { render, screen } from '@testing-library/react'
import OpportunitiesHeader from '.'

describe('<OpportunitiesHeader/>', () => {
  it('should render the component', () => {
    render(<OpportunitiesHeader />)

    expect(screen.getByTestId('opportunities-header-text')).toBeInTheDocument()
  })

  it('should display the main title correctly', () => {
    render(<OpportunitiesHeader />)

    const mainTitle = screen.getByRole('heading', {
      name: /Encontre sua vaga voluntária aqui!/i,
    })

    expect(mainTitle).toBeInTheDocument()
  })

  it('should display the secondary title correctly', () => {
    render(<OpportunitiesHeader />)

    expect(
      screen.getByText('Faça parte do Juniors Developers Group:'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('onde o talento é voluntário e a inovação é infinita!'),
    ).toBeInTheDocument()
  })

  it('should have the correct styling', () => {
    render(<OpportunitiesHeader />)

    const headerElement = screen.getByTestId('opportunities-header-text')
    expect(headerElement).toHaveClass('mt-10')
    expect(headerElement).toHaveClass('flex')
  })
})

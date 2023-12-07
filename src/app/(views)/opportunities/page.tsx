import { OpportunitiesProvider } from '@/context/Opportunities'
import { Metadata } from 'next'
import OpportunitiesPage from '../../components/OpportunitiesPage'

export const metadata: Metadata = {
  title: 'JDG | Vagas',
  description: 'Generated by create next app',
}

export default function Opportunities() {
  return (
    <OpportunitiesProvider>
      <OpportunitiesPage />
    </OpportunitiesProvider>
  )
}
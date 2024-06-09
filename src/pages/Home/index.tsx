import { Header } from '../../components/Header'
import { SectionGenre, SectionRecommendedBooks } from '../../components/Section'

export function Home() {
  return (
    <div className='mb-6'>
      <Header />
      <SectionGenre />
      <SectionRecommendedBooks />
    </div>
  )
}

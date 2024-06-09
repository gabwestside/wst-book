import { Header } from '../../components/Header'
import { SectionGenre } from '../../components/Section'
import { SectionRecommendedBooks } from '../../components/Section/section-recommended-books'

export default function Home() {
  return (
    <div className='mb-6'>
      <Header />
      <SectionGenre />
      <SectionRecommendedBooks />
    </div>
  )
}

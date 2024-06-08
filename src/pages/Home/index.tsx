import { Header } from '../../components/Header'
import { SectionGenre } from '../../components/Section'
import { SectionRecommendedBooks } from '../../components/Section/section-recommended-books'

export default function Home() {
  return (
    <>
      <Header />
      <SectionGenre />
      <SectionRecommendedBooks />
    </>
  )
}

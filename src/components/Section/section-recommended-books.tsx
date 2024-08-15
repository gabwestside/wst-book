import { useId } from 'react'
import { Card } from '../Card'
import { Container } from '../Container'
import { SectionTitle } from './'

export function SectionRecommendedBooks() {
  const id = useId()

  return (
    <Container>
      <SectionTitle title='Recommended Books' />
      <Card
        bookId={id}
        name='Clean Code'
        author='Robert C. Martin'
        tag='Software Engineer'
        overview='Clean code can be read and enhanced by a developer other than its original author.'
        bookCover='https://m.media-amazon.com/images/I/41bOkXnNBjL._SY445_SX342_.jpg'
      />
    </Container>
  )
}

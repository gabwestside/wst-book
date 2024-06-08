import { Card } from '../Card'
import { Container } from '../Container'
import { SectionTitle } from './section-title'

export function SectionRecommendedBooks() {
  return (
    <Container>
      <SectionTitle title='Recommended Books' />
      <Card
        name='Clean Code'
        author='Robert C. Martin'
        tag='Software Engineer'
        overview='Code is clean if it can be understood easily – by everyone on the team. Clean code can be read and enhanced by a developer other than its original author. With understandability comes readability, changeability, extensibility and maintainability.'
      />
    </Container>
  )
}

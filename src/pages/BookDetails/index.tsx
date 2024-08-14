import { Card } from '../../components/Card'
import { Container } from '../../components/Container'
import { HeaderTitle } from '../../components/Header'
import { SectionTitle } from '../../components/Section'

export function BookDetails() {
  return (
    <Container>
      <HeaderTitle title='FindBook' />
      <div className='grid grid-cols-1 md:grid-cols-2 mt-16 gap-4'>
        <div>
          <h2 className='text-5xl font-bold text-evergreen-200'>
            Nome do livro
          </h2>
          <p className='text-xl text-gray-500 font-light py-4'>Autor</p>
          <p className='text-gray-500 mt-6'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            illum unde soluta aut odit recusandae ducimus omnis reprehenderit
            quam nobis nam eius eum cupiditate quibusdam, maiores ex culpa
            veniam cumque.
          </p>
        </div>
        <div>
          <img
            src='https://m.media-amazon.com/images/I/41bOkXnNBjL._SY445_SX342_.jpg'
            alt='Capa do livro'
            className='w-full rounded-lg'
          />
        </div>
      </div>
      <div>
        <SectionTitle title='Recomendações com base nesse livro' />
        <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
          <Card
            name='Clean Code'
            author='Robert C. Martin'
            tag='Software Engineer'
            overview='Clean code can be read and enhanced by a developer other than its original author.'
            bookCover='https://m.media-amazon.com/images/I/41bOkXnNBjL._SY445_SX342_.jpg'
          />
        </div>
      </div>
    </Container>
  )
}

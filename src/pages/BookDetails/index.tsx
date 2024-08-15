import { useParams } from 'react-router-dom'
import { Card } from '../../components/Card'
import { Container } from '../../components/Container'
import { HeaderTitle } from '../../components/Header'
import { SectionTitle } from '../../components/Section'

export function BookDetails() {
  const { id } = useParams()

  return (
    <Container>
      <HeaderTitle title='FindBook' />
      <div className='grid grid-cols-1 md:grid-cols-2 mt-16 gap-4'>
        <div>
          <h2 className='text-5xl font-bold text-evergreen-200'>Clean Code</h2>
          <p className='text-xl text-gray-500 font-light py-4'>
            Robert C. Martin
          </p>
          <p className='text-gray-500 mt-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            magna mollis, volutpat metus ut, convallis nisi. Sed vel neque
            scelerisque, pretium magna vel, tempus massa. Phasellus vel erat a
            orci egestas ultricies non in erat. Curabitur sodales et enim in
            rutrum. Nunc tortor nunc, posuere eget convallis non, posuere vel
            libero. Quisque tempus feugiat auctor. Pellentesque in libero leo.
            Cras dui libero, posuere eu maximus et, sollicitudin eu quam. Fusce
            dapibus arcu nec justo accumsan lobortis. Cras velit mauris, varius
            ac tellus eget, tincidunt sagittis orci. Integer ullamcorper
            consectetur eros ac gravida. Cras blandit eros venenatis massa
            sodales, id pretium leo suscipit. Vivamus id lectus id lorem ornare
            aliquet eget nec eros. Maecenas et fermentum risus, ac interdum
            arcu. In odio erat, blandit vitae metus nec, fermentum porta lectus.
          </p>
        </div>
        <div className='w-full flex justify-center items-center'>
          <img
            src='https://m.media-amazon.com/images/I/41bOkXnNBjL._SY445_SX342_.jpg'
            alt='Capa do livro'
            className='w-full rounded-lg max-w-md'
          />
        </div>
      </div>
      <div className='mt-20'>
        <SectionTitle title='Recomendações com base nesse livro' className='' />
        <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
          <Card
            bookId={id ?? ''}
            name='Clean Code'
            author='Robert C. Martin'
            tag='Software Engineer'
            overview='Clean code can be read and enhanced by a developer other than its original author.'
            bookCover='https://m.media-amazon.com/images/I/41bOkXnNBjL._SY445_SX342_.jpg'
          />
          <Card
            bookId={id ?? ''}
            name='Clean Code'
            author='Robert C. Martin'
            tag='Software Engineer'
            overview='Clean code can be read and enhanced by a developer other than its original author.'
            bookCover='https://m.media-amazon.com/images/I/41bOkXnNBjL._SY445_SX342_.jpg'
          />
          <Card
            bookId={id ?? ''}
            name='Clean Code'
            author='Robert C. Martin'
            tag='Software Engineer'
            overview='Clean code can be read and enhanced by a developer other than its original author.'
            bookCover='https://m.media-amazon.com/images/I/41bOkXnNBjL._SY445_SX342_.jpg'
          />
          <Card
            bookId={id ?? ''}
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

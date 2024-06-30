import { Container } from '../../components/Container'
import { HeaderTitle } from '../../components/Header'

export function BookDetails() {
  return (
    <Container>
      <HeaderTitle title='FindBook' />
      <div className='grid grid-cols-2 mt-16'>
        <div>
          <h2>Nome do livro</h2>
          <p>Autor</p>
          <p>
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
          />
        </div>
      </div>
    </Container>
  )
}

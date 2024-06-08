import bg from '../../assets/img/background-header.png'
import { Button } from '../Button'
import { Container } from '../Container'
import { HeaderTitle } from './'

export function Header() {
  return (
    <header
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className='w-auto bg-cover bg-center bg-no-repeat'
    >
      <Container>
        <HeaderTitle title='FindBook' />
        <div className='mt-20'>
          <p className='text-7xl font-extrabold text-evergreen-200'>
            Find a book that <br /> suits you!
          </p>
          <p className='text-gray-600 my-3 text-xl'>
            Lorem Ipsum dolor sit amet
          </p>
          <Button>Search Books</Button>
        </div>
      </Container>
    </header>
  )
}

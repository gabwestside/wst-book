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
          <p className='md:text-7xl text-3xl font-extrabold text-evergreen-200'>
            Find a book that <br /> suits you!
          </p>
          <p className='text-gray-600 my-3 md:text-xl text-lg'>
            It's perfect for you
          </p>
          <Button>Search Books</Button>
        </div>
      </Container>
    </header>
  )
}
